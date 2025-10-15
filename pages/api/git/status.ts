import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface GitStatusResponse {
  success: boolean;
  isGitRepo: boolean;
  hasChanges: boolean;
  currentBranch?: string;
  changedFiles?: string[];
  message: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GitStatusResponse>
) {
  // Disable Git operations in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && process.env.ENABLE_ADMIN !== 'true') {
    return res.status(403).json({
      success: false,
      isGitRepo: false,
      hasChanges: false,
      message: 'Git features are not available in production mode',
      error: 'Git features are not available in production mode'
    });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      isGitRepo: false,
      hasChanges: false,
      message: 'Method not allowed',
      error: 'Only GET requests are allowed'
    });
  }

  try {
    // In production (especially serverless), Git may not be available
    // Return a mock response that indicates no Git repository
    if (process.env.NODE_ENV === 'production') {
      return res.status(200).json({
        success: true,
        isGitRepo: false,
        hasChanges: false,
        message: 'Git not available in production environment'
      });
    }

    // Check if we're in a Git repository (development only)
    const isGitRepoResult = await execAsync('git rev-parse --is-inside-work-tree', { cwd: process.cwd() });
    const isGitRepo = isGitRepoResult.stdout.trim() === 'true';

    if (!isGitRepo) {
      return res.status(200).json({
        success: true,
        isGitRepo: false,
        hasChanges: false,
        message: 'Not a Git repository'
      });
    }

    // Get current branch
    const branchResult = await execAsync('git branch --show-current', { cwd: process.cwd() });
    const currentBranch = branchResult.stdout.trim();

    // Check for changes
    const statusResult = await execAsync('git status --porcelain', { cwd: process.cwd() });
    const hasChanges = statusResult.stdout.trim().length > 0;
    
    // Get list of changed files
    const changedFiles = hasChanges 
      ? statusResult.stdout.trim().split('\n').map(line => line.substring(3))
      : [];

    return res.status(200).json({
      success: true,
      isGitRepo: true,
      hasChanges,
      currentBranch,
      changedFiles,
      message: hasChanges 
        ? `${changedFiles.length} file(s) changed`
        : 'Working tree is clean'
    });

  } catch (error: any) {
    console.error('Git status failed:', error);
    
    // In production, return a safe response instead of error
    if (process.env.NODE_ENV === 'production') {
      return res.status(200).json({
        success: true,
        isGitRepo: false,
        hasChanges: false,
        message: 'Git not available in production environment'
      });
    }
    
    return res.status(500).json({
      success: false,
      isGitRepo: false,
      hasChanges: false,
      message: 'Failed to check Git status',
      error: error.message || 'Unknown error occurred'
    });
  }
}
