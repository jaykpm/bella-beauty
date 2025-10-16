import React, { useState, useEffect } from "react";
import { Search, Command, Zap, Save, GitBranch, Eye, Settings } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  tabs: Array<{ id: string; label: string; icon: any }>;
  onNavigate: (tabId: string) => void;
  onSave: () => void;
  onCommit: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  tabs,
  onNavigate,
  onSave,
  onCommit,
}) => {
  const [search, setSearch] = useState("");

  const commands = [
    { id: "save", label: "Save Changes", icon: Save, action: onSave, shortcut: "⌘S" },
    { id: "commit", label: "Commit & Push", icon: GitBranch, action: onCommit, shortcut: "⌘⇧P" },
    ...tabs.map((tab) => ({
      id: tab.id,
      label: `Go to ${tab.label}`,
      icon: tab.icon,
      action: () => onNavigate(tab.id),
      shortcut: "",
    })),
  ];

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!isOpen) setSearch("");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-[20vh] p-4 animate-fadeIn">
      <div
        className={`w-full max-w-2xl rounded-2xl shadow-2xl border ${
          isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        }`}
      >
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type a command or search..."
              className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 text-white placeholder-gray-500"
                  : "bg-gray-50 text-gray-900 placeholder-gray-400"
              } focus:outline-none`}
              autoFocus
            />
          </div>
        </div>

        {/* Commands List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No commands found</div>
          ) : (
            filtered.map((cmd, index) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                    isDarkMode
                      ? "hover:bg-gray-800 text-gray-300"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5 text-blue-500" />
                  <span className="flex-1 text-left">{cmd.label}</span>
                  {cmd.shortcut && (
                    <kbd
                      className={`px-2 py-1 text-xs rounded ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      {cmd.shortcut}
                    </kbd>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div
          className={`p-3 border-t text-xs flex items-center justify-between ${
            isDarkMode
              ? "bg-gray-800/50 border-gray-800 text-gray-500"
              : "bg-gray-50 border-gray-200 text-gray-500"
          }`}
        >
          <span>Navigate with ↑↓</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
