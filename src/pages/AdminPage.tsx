import React, { useState } from "react";
import { useTina } from "@/contexts/TinaContext";

export const AdminPage = () => {
  const { content, updateContent } = useTina();
  const [activeTab, setActiveTab] = useState("hero");
  const [formData, setFormData] = useState<any>({});

  React.useEffect(() => {
    if (content[activeTab as keyof typeof content]) {
      setFormData(content[activeTab as keyof typeof content]);
    }
  }, [activeTab, content]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateContent(activeTab, formData);
    alert("Content saved successfully!");
  };

  const tabs = [
    { id: "hero", label: "Hero Section" },
    { id: "settings", label: "Site Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Content Management
            </h1>
            <a
              href="/"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Site
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "hero" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title || ""}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <textarea
                    value={formData.subtitle || ""}
                    onChange={(e) =>
                      handleInputChange("subtitle", e.target.value)
                    }
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    value={formData.buttonText || ""}
                    onChange={(e) =>
                      handleInputChange("buttonText", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Button Link
                  </label>
                  <input
                    type="url"
                    value={formData.buttonLink || ""}
                    onChange={(e) =>
                      handleInputChange("buttonLink", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    value={formData.siteName || ""}
                    onChange={(e) =>
                      handleInputChange("siteName", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site Description
                  </label>
                  <textarea
                    value={formData.siteDescription || ""}
                    onChange={(e) =>
                      handleInputChange("siteDescription", e.target.value)
                    }
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Logo URL
                  </label>
                  <input
                    type="url"
                    value={formData.logo || ""}
                    onChange={(e) => handleInputChange("logo", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase Link
                  </label>
                  <input
                    type="url"
                    value={formData.purchaseLink || ""}
                    onChange={(e) =>
                      handleInputChange("purchaseLink", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
