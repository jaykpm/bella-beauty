import React from "react";
import { GitBranch, X, Sparkles } from "lucide-react";

interface CommitDialogProps {
  isOpen: boolean;
  onClose: () => void;
  commitMessage: string;
  setCommitMessage: (message: string) => void;
  onCommit: () => void;
  isCommitting: boolean;
  gitStatus: any;
  lastCommitResult: any;
  isDarkMode: boolean;
  onGenerateMessage: () => void;
}

export const CommitDialog: React.FC<CommitDialogProps> = ({
  isOpen,
  onClose,
  commitMessage,
  setCommitMessage,
  onCommit,
  isCommitting,
  gitStatus,
  lastCommitResult,
  isDarkMode,
  onGenerateMessage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div
        className={`w-full max-w-md rounded-2xl p-6 shadow-2xl ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3
            className={`text-2xl font-bold bg-gradient-to-r ${
              isDarkMode
                ? "from-green-400 to-emerald-400"
                : "from-green-600 to-emerald-600"
            } bg-clip-text text-transparent flex items-center gap-2`}
          >
            <GitBranch className="w-6 h-6 text-green-600" />
            Commit Changes
          </h3>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isDarkMode
                ? "hover:bg-gray-800 text-gray-400"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Changed Files */}
        {gitStatus && gitStatus.changedFiles && (
          <div className="mb-4">
            <p
              className={`text-sm font-semibold mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Files to commit ({gitStatus.changedFiles.length}):
            </p>
            <div
              className={`rounded-xl p-3 max-h-32 overflow-y-auto border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              {gitStatus.changedFiles.map((file: string, index: number) => (
                <div
                  key={index}
                  className={`text-xs font-mono ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {file}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Commit Message */}
        <div className="mb-4">
          <label
            className={`block text-sm font-semibold mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Commit Message
          </label>
          <textarea
            value={commitMessage}
            onChange={(e) => setCommitMessage(e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-all duration-200 shadow-sm ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
            }`}
            rows={3}
            placeholder="Describe your changes..."
          />
          <button
            type="button"
            onClick={onGenerateMessage}
            className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            Generate automatic message
          </button>
        </div>

        {/* Last Commit Result */}
        {lastCommitResult && (
          <div
            className={`mb-4 p-4 rounded-xl text-sm shadow-sm border ${
              lastCommitResult.success
                ? isDarkMode
                  ? "bg-green-900/30 text-green-300 border-green-800"
                  : "bg-green-50 text-green-800 border-green-200"
                : isDarkMode
                ? "bg-red-900/30 text-red-300 border-red-800"
                : "bg-red-50 text-red-800 border-red-200"
            }`}
          >
            <div className="font-medium">{lastCommitResult.message}</div>
            {lastCommitResult.details && (
              <div className="mt-1 text-xs opacity-75">
                {lastCommitResult.details}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isCommitting}
            className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md ${
              isDarkMode
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Cancel
          </button>
          <button
            onClick={onCommit}
            disabled={isCommitting || !commitMessage.trim()}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            {isCommitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Committing...
              </>
            ) : (
              <>
                <GitBranch className="w-4 h-4" />
                Commit & Push
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
