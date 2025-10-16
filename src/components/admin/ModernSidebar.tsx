import React from "react";
import {
  ChevronRight,
  ChevronDown,
  Star,
  Layout,
  Grid,
  Box,
  FileText,
  Palette,
  Zap,
} from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: any;
  category: string;
}

interface ModernSidebarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  isDarkMode: boolean;
  collapsed: boolean;
  collapsedGroups: Record<string, boolean>;
  onToggleGroup: (group: string) => void;
  favoriteSections: string[];
  onToggleFavorite: (tabId: string) => void;
  searchQuery: string;
}

export const ModernSidebar: React.FC<ModernSidebarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  isDarkMode,
  collapsed,
  collapsedGroups,
  onToggleGroup,
  favoriteSections,
  onToggleFavorite,
  searchQuery,
}) => {
  // Group tabs by category
  const groupedTabs = tabs.reduce((acc, tab) => {
    const category = tab.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(tab);
    return acc;
  }, {} as Record<string, Tab[]>);

  const filteredTabs = searchQuery
    ? tabs.filter(
        (tab) =>
          tab.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tab.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tabs;

  if (collapsed) {
    return (
      <div
        className={`w-16 flex-shrink-0 border-r flex flex-col items-center py-4 space-y-2 h-full ${
          isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        }`}
      >
        {filteredTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`p-3 rounded-lg transition-all duration-200 relative group ${
                activeTab === tab.id
                  ? isDarkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-600 text-white"
                  : isDarkMode
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              title={tab.label}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                {tab.label}
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`w-72 flex-shrink-0 border-r flex flex-col h-full ${
        isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {/* Favorites Section */}
        {favoriteSections.length > 0 && !searchQuery && (
          <div className="mb-4">
            <div
              className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Favorites
            </div>
            {tabs
              .filter((tab) => favoriteSections.includes(tab.id))
              .map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                      activeTab === tab.id
                        ? isDarkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-600 text-white"
                        : isDarkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="flex-1 text-left text-sm font-medium">{tab.label}</span>
                    <Star
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-0 group-hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(tab.id);
                      }}
                    />
                  </button>
                );
              })}
          </div>
        )}

        {/* Grouped Sections */}
        {Object.entries(groupedTabs).map(([category, categoryTabs]) => {
          const isCollapsed = collapsedGroups[category];
          const visibleTabs = searchQuery
            ? categoryTabs.filter((tab) =>
                tab.label.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : categoryTabs;

          if (visibleTabs.length === 0) return null;

          return (
            <div key={category} className="mb-2">
              <button
                onClick={() => onToggleGroup(category)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isDarkMode
                    ? "text-gray-400 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {isCollapsed ? (
                  <ChevronRight className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                {category}
                <span
                  className={`ml-auto text-xs ${
                    isDarkMode ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {visibleTabs.length}
                </span>
              </button>

              {!isCollapsed && (
                <div className="mt-1 space-y-1">
                  {visibleTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isFavorite = favoriteSections.includes(tab.id);
                    return (
                      <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                          activeTab === tab.id
                            ? isDarkMode
                              ? "bg-blue-600 text-white shadow-lg"
                              : "bg-blue-600 text-white shadow-lg"
                            : isDarkMode
                            ? "text-gray-300 hover:bg-gray-800"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="flex-1 text-left text-sm font-medium">
                          {tab.label}
                        </span>
                        <Star
                          className={`w-4 h-4 transition-all duration-200 ${
                            isFavorite
                              ? "fill-yellow-400 text-yellow-400"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(tab.id);
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
