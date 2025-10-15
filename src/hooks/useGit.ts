import { useState, useEffect } from 'react';

interface GitStatus {
  isGitRepo: boolean;
  hasChanges: boolean;
  currentBranch?: string;
  changedFiles?: string[];
  message: string;
}

interface GitCommitResponse {
  success: boolean;
  message: string;
  details?: string;
  error?: string;
}

export const useGit = () => {
  const [gitStatus, setGitStatus] = useState<GitStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCommitting, setIsCommitting] = useState(false);
  const [lastCommitResult, setLastCommitResult] = useState<GitCommitResponse | null>(null);

  // Check Git status
  const checkGitStatus = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/git/status');
      const data = await response.json();
      setGitStatus(data);
    } catch (error) {
      console.error('Failed to check Git status:', error);
      setGitStatus({
        isGitRepo: false,
        hasChanges: false,
        message: 'Failed to check Git status'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Commit and push changes
  const commitAndPush = async (commitMessage: string, branch: string = 'main') => {
    setIsCommitting(true);
    setLastCommitResult(null);
    
    try {
      const response = await fetch('/api/git/commit-and-push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commitMessage,
          branch
        }),
      });

      const result = await response.json();
      setLastCommitResult(result);
      
      // Refresh Git status after commit
      if (result.success) {
        await checkGitStatus();
      }
      
      return result;
    } catch (error) {
      const errorResult = {
        success: false,
        message: 'Failed to commit and push',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      setLastCommitResult(errorResult);
      return errorResult;
    } finally {
      setIsCommitting(false);
    }
  };

  // Auto-check Git status on mount
  useEffect(() => {
    checkGitStatus();
  }, []);

  return {
    gitStatus,
    isLoading,
    isCommitting,
    lastCommitResult,
    checkGitStatus,
    commitAndPush,
    clearLastResult: () => setLastCommitResult(null)
  };
};
