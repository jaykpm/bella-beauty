import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

interface GitHubSaveRequest {
  section: string;
  data: any;
  commitMessage?: string;
}

interface GitHubSaveResponse {
  success: boolean;
  message: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GitHubSaveResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  const { section, data, commitMessage }: GitHubSaveRequest = req.body;

  // Check for required environment variables
  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_OWNER || !process.env.GITHUB_REPO) {
    return res.status(500).json({
      success: false,
      message: 'GitHub configuration missing',
      error: 'GITHUB_TOKEN, GITHUB_OWNER, and GITHUB_REPO environment variables required'
    });
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    // Map section to file path
    const sectionFileMap: Record<string, string> = {
      hero: 'public/content/hero/index.json',
      settings: 'public/content/settings/index.json',
      trustBadges: 'public/content/trust-badges/index.json',
      keyFeatures: 'public/content/key-features/index.json',
      ctaSection: 'public/content/cta-section/index.json',
      pluginsSection: 'public/content/plugins-section/index.json',
    };

    const filePath = sectionFileMap[section];
    if (!filePath) {
      return res.status(400).json({
        success: false,
        message: 'Invalid section'
      });
    }

    // Get current file to get SHA
    let sha: string | undefined;
    try {
      const { data: currentFile } = await octokit.rest.repos.getContent({
        owner: process.env.GITHUB_OWNER!,
        repo: process.env.GITHUB_REPO!,
        path: filePath,
      });

      if ('sha' in currentFile) {
        sha = currentFile.sha;
      }
    } catch (error) {
      // File doesn't exist, that's okay
    }

    // Create or update file
    const content = JSON.stringify(data, null, 2);
    const message = commitMessage || `Update ${section} content via admin panel`;

    await octokit.rest.repos.createOrUpdateFileContents({
      owner: process.env.GITHUB_OWNER!,
      repo: process.env.GITHUB_REPO!,
      path: filePath,
      message,
      content: Buffer.from(content).toString('base64'),
      sha,
    });

    return res.status(200).json({
      success: true,
      message: 'Content saved to GitHub successfully'
    });

  } catch (error: any) {
    console.error('GitHub save failed:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to save to GitHub',
      error: error.message
    });
  }
}
