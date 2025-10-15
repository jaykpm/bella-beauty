import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import { promisify } from 'util';
import { Octokit } from '@octokit/rest';

const execAsync = promisify(exec);

interface GitResponse {
  success: boolean;
  message: string;
  details?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GitResponse>
) {
  // Disable Git operations in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && process.env.ENABLE_ADMIN !== 'true') {
    return res.status(403).json({
      success: false,
      message: 'Git operations disabled in production',
      error: 'Git features are not available in production mode'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
      error: 'Only POST requests are allowed'
    });
  }

  const { commitMessage, branch = 'main' } = req.body;

  if (!commitMessage) {
    return res.status(400).json({
      success: false,
      message: 'Commit message is required',
      error: 'Please provide a commit message'
    });
  }

  try {
    // In production, use GitHub API instead of Git commands
    if (process.env.NODE_ENV === 'production') {
      return await handleProductionDeploy(commitMessage, branch, res);
    }

    // Check if we're in a git repository
    await execAsync('git status');

    // Stage all changes
    await execAsync('git add .');
    
    // Check if there are any changes to commit
    const { stdout: statusOutput } = await execAsync('git status --porcelain');
    
    if (!statusOutput.trim()) {
      return res.status(200).json({
        success: true,
        message: 'No changes to commit',
        details: 'All files are up to date'
      });
    }

    // Commit changes
    const { stdout: commitOutput } = await execAsync(`git commit -m "${commitMessage}"`);
    
    // Push to remote branch
    await execAsync(`git push origin ${branch}`);

    return res.status(200).json({
      success: true,
      message: 'Changes committed and pushed successfully',
      details: `Committed: ${commitOutput.split('\n')[0]}\nPushed to: ${branch}`
    });
  } catch (error: any) {
    console.error('Git operation failed:', error);
    
    // In production, return a safe response instead of error
    if (process.env.NODE_ENV === 'production') {
      return res.status(400).json({
        success: false,
        message: 'Git operations not available in production',
        error: 'Git commands are not available in serverless production environments'
      });
    }
    
    if (error.message.includes('nothing to commit')) {
      return res.status(200).json({
        success: true,
        message: 'No changes to commit',
        details: 'Working tree is clean'
      });
    }
    
    if (error.message.includes('remote rejected')) {
      return res.status(400).json({
        success: false,
        message: 'Push rejected by remote',
        error: 'Check your permissions and branch protection rules'
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Git operation failed',
      error: error.message || 'Unknown error occurred'
    });
  }
}

// Handle production deployment using GitHub API
async function handleProductionDeploy(
  commitMessage: string,
  branch: string,
  res: NextApiResponse<GitResponse>
) {
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

    // Get all content from localStorage (sent in request body)
    // In production, the admin panel will send all modified sections
    
    // For now, return a message that GitHub API integration is ready
    // The actual deployment will happen through the github/save-content endpoint
    // which gets called for each section
    
    return res.status(200).json({
      success: true,
      message: 'Production deployment uses GitHub API per-section',
      details: 'Each section is committed separately via /api/github/save-content'
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'GitHub API deployment failed',
      error: error.message
    });
  }
}
