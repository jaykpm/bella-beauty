import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Check environment variables
    const config = {
      token: process.env.GITHUB_TOKEN ? '✅ Set (hidden)' : '❌ Missing',
      owner: process.env.GITHUB_OWNER || '❌ Missing',
      repo: process.env.GITHUB_REPO || '❌ Missing',
    };

    if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_OWNER || !process.env.GITHUB_REPO) {
      return res.status(500).json({
        success: false,
        message: 'GitHub configuration incomplete',
        config,
      });
    }

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    // Test 1: Check if we can authenticate
    let userInfo;
    try {
      const { data } = await octokit.rest.users.getAuthenticated();
      userInfo = {
        username: data.login,
        name: data.name,
        email: data.email,
      };
    } catch (error: any) {
      return res.status(401).json({
        success: false,
        message: 'GitHub token authentication failed',
        error: error.message,
        hint: 'Check if your GitHub token is valid',
      });
    }

    // Test 2: Check if repository exists and we have access
    let repoInfo;
    try {
      const { data } = await octokit.rest.repos.get({
        owner: process.env.GITHUB_OWNER!,
        repo: process.env.GITHUB_REPO!,
      });
      repoInfo = {
        fullName: data.full_name,
        private: data.private,
        permissions: data.permissions,
        defaultBranch: data.default_branch,
      };
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: 'Repository not found or no access',
        error: error.message,
        config: {
          owner: process.env.GITHUB_OWNER,
          repo: process.env.GITHUB_REPO,
        },
        hint: 'Check if the repository name is correct and your token has access to it',
      });
    }

    // Test 3: Check token permissions
    const scopes = await octokit.request('GET /');
    const tokenScopes = scopes.headers['x-oauth-scopes']?.split(', ') || [];

    return res.status(200).json({
      success: true,
      message: 'GitHub connection successful! ✅',
      user: userInfo,
      repository: repoInfo,
      tokenScopes,
      config,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Connection test failed',
      error: error.message,
    });
  }
}
