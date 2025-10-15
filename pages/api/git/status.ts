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
    // Check if we're in a git repository
    await execAsync('git status');

    // Get current branch
    const { stdout: branchOutput } = await execAsync('git branch --show-current');
    const currentBranch = branchOutput.trim();

    // Check for changes
    const { stdout: statusOutput } = await execAsync('git status --porcelain');
    const changedFiles = statusOutput
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.substring(3)); // Remove status indicators

    const hasChanges = changedFiles.length > 0;

    return res.status(200).json({
      success: true,
      isGitRepo: true,
      hasChanges,
      currentBranch,
      changedFiles,
      message: hasChanges 
        ? `${changedFiles.length} file(s) changed on branch '${currentBranch}'`
        : `Working tree is clean on branch '${currentBranch}'`
    });

  } catch (error: any) {
    console.error('Git status check failed:', error);
    
    if (error.message.includes('not a git repository')) {
      return res.status(200).json({
        success: true,
        isGitRepo: false,
        hasChanges: false,
        message: 'Not a Git repository',
        error: 'This project is not initialized as a Git repository'
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
