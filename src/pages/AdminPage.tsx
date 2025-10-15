import React, { useState } from "react";
import { useTina } from "@/contexts/TinaContext";
import { Plus, Trash2, Edit2 } from "lucide-react";

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

  const handleArrayItemChange = (index: number, field: string, value: string) => {
    setFormData((prev: any) => {
      const newArray = [...(prev || [])];
      newArray[index] = { ...newArray[index], [field]: value };
      return newArray;
    });
  };

  const handleAddArrayItem = () => {
    const newItem: any = { id: Date.now().toString() };
    
    if (activeTab === "demos") {
      newItem.title = "New Demo";
      newItem.href = "#";
      newItem.imageUrl = "";
      newItem.qrCodeUrl = "";
    } else if (activeTab === "features") {
      newItem.title = "New Feature";
      newItem.description = "";
      newItem.icon = "Star";
    } else if (activeTab === "plugins") {
      newItem.name = "New Plugin";
      newItem.imageUrl = "";
      newItem.showBadge = false;
    }
    
    setFormData((prev: any) => [...(prev || []), newItem]);
  };

  const handleRemoveArrayItem = (index: number) => {
    setFormData((prev: any) => prev.filter((_: any, i: number) => i !== index));
  };

  const handleSave = () => {
    updateContent(activeTab, formData);
    alert("Content saved successfully!");
  };

  const tabs = [
    { id: "hero", label: "Hero Section" },
    { id: "settings", label: "Site Settings" },
    { id: "demos", label: "Demo Showcases" },
    { id: "features", label: "Key Features" },
    { id: "plugins", label: "Plugins" },
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
            <nav className="flex -mb-px overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 text-sm font-medium border-b-2 whitespace-nowrap ${
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

            {activeTab === "demos" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Demo Showcases</h3>
                  <button
                    onClick={handleAddArrayItem}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Plus size={16} />
                    Add Demo
                  </button>
                </div>

                {Array.isArray(formData) && formData.map((demo: any, index: number) => (
                  <div key={demo.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">Demo {index + 1}</h4>
                      <button
                        onClick={() => handleRemoveArrayItem(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={demo.title || ""}
                        onChange={(e) => handleArrayItemChange(index, "title", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Link URL
                      </label>
                      <input
                        type="url"
                        value={demo.href || ""}
                        onChange={(e) => handleArrayItemChange(index, "href", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Screenshot URL
                      </label>
                      <input
                        type="url"
                        value={demo.imageUrl || ""}
                        onChange={(e) => handleArrayItemChange(index, "imageUrl", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        QR Code URL
                      </label>
                      <input
                        type="url"
                        value={demo.qrCodeUrl || ""}
                        onChange={(e) => handleArrayItemChange(index, "qrCodeUrl", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
                  <button
                    onClick={handleAddArrayItem}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Plus size={16} />
                    Add Feature
                  </button>
                </div>

                {Array.isArray(formData) && formData.map((feature: any, index: number) => (
                  <div key={feature.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">Feature {index + 1}</h4>
                      <button
                        onClick={() => handleRemoveArrayItem(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={feature.title || ""}
                        onChange={(e) => handleArrayItemChange(index, "title", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={feature.description || ""}
                        onChange={(e) => handleArrayItemChange(index, "description", e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Icon Name (Lucide)
                      </label>
                      <input
                        type="text"
                        value={feature.icon || ""}
                        onChange={(e) => handleArrayItemChange(index, "icon", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Star, Heart, Zap"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "plugins" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Plugins</h3>
                  <button
                    onClick={handleAddArrayItem}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Plus size={16} />
                    Add Plugin
                  </button>
                </div>

                {Array.isArray(formData) && formData.map((plugin: any, index: number) => (
                  <div key={plugin.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">Plugin {index + 1}</h4>
                      <button
                        onClick={() => handleRemoveArrayItem(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Plugin Name
                      </label>
                      <input
                        type="text"
                        value={plugin.name || ""}
                        onChange={(e) => handleArrayItemChange(index, "name", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Logo URL
                      </label>
                      <input
                        type="url"
                        value={plugin.imageUrl || ""}
                        onChange={(e) => handleArrayItemChange(index, "imageUrl", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={plugin.showBadge || false}
                        onChange={(e) => handleArrayItemChange(index, "showBadge", e.target.checked.toString())}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label className="text-sm font-medium text-gray-700">
                        Show Badge
                      </label>
                    </div>

                    {plugin.showBadge && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Badge Text
                          </label>
                          <input
                            type="text"
                            value={plugin.badgeText || ""}
                            onChange={(e) => handleArrayItemChange(index, "badgeText", e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Badge Style
                          </label>
                          <select
                            value={plugin.badgeVariant || "bg-stone-500"}
                            onChange={(e) => handleArrayItemChange(index, "badgeVariant", e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="bg-stone-500">Dark</option>
                            <option value="bg-rose-100">Light Pink</option>
                            <option value="bg-blue-500">Blue</option>
                            <option value="bg-green-500">Green</option>
                          </select>
                        </div>
                      </>
                    )}
                  </div>
                ))}
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
