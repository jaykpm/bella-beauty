import React from "react";
import { GitBranch, Clock, Save } from "lucide-react";

interface StatusBarProps {
  gitStatus: any;
  hasUnsavedChanges: boolean;
  lastSaved: Date | null;
  isDarkMode: boolean;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  gitStatus,
  hasUnsavedChanges,
  lastSaved,
  isDarkMode,
}) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {/* Git Status */}
      {gitStatus && (
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full animate-pulse ${
              gitStatus.hasChanges ? "bg-orange-500" : "bg-green-500"
            }`}
          />
          <GitBranch className="w-4 h-4" />
          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
            {gitStatus.currentBranch || "main"}
          </span>
          {gitStatus.hasChanges && (
            <span className={isDarkMode ? "text-gray-500" : "text-gray-500"}>
              • {gitStatus.changedFiles?.length || 0} changed
            </span>
          )}
        </div>
      )}

      {/* Save Status */}
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
          isDarkMode
            ? "bg-gradient-to-r from-blue-900/50 to-indigo-900/50"
            : "bg-gradient-to-r from-blue-50 to-indigo-50"
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full animate-pulse ${
            hasUnsavedChanges ? "bg-yellow-500" : "bg-blue-500"
          }`}
        />
        <Save className="w-4 h-4" />
        <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          {hasUnsavedChanges
            ? "Unsaved changes"
            : lastSaved
            ? `Saved at ${lastSaved.toLocaleTimeString()}`
            : "All saved"}
        </span>
      </div>
    </div>
  );
};
