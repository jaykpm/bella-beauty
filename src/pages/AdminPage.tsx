"use client";

import React, { useState, useEffect } from "react";
import { useTina } from "@/contexts/TinaContext";
import Link from "next/link";
import { Hero } from "@/sections/Hero";
import { CTASection } from "@/sections/CTASection";
import { KeyFeatures } from "@/sections/KeyFeatures";
import { TrustBadges } from "@/sections/TrustBadges";
import { PluginsSection } from "@/sections/PluginsSection";
import { DemoShowcase } from "@/sections/DemoShowcase";
import { CrossCompatibilitySection } from "@/sections/CrossCompatibilitySection";
import { RefundPolicy } from "@/sections/RefundPolicy";
import { ColorPalettes } from "@/sections/ColorPalettes";
import { PerformanceSection } from "@/sections/PerformanceSection";
import { BlocksGallery } from "@/sections/BlocksGallery";
import { BeforeAfterSection } from "@/sections/BeforeAfterSection";
import { CustomizationSection } from "@/sections/CustomizationSection";
import { PostTypesSection } from "@/sections/PostTypesSection";
import { DetailsSection } from "@/sections/DetailsSection";
import { TechnicalSection } from "@/sections/TechnicalSection";
import { ElementorExtension } from "@/sections/ElementorExtension";
import { LayoutsGallery } from "@/sections/LayoutsGallery";
import { InstallationWizard } from "@/sections/InstallationWizard";
import { TemplateBuilder } from "@/sections/TemplateBuilder";
import { HeaderVariations } from "@/sections/HeaderVariations";
import { MobileFirstSection } from "@/sections/MobileFirstSection";

export const AdminPage = () => {
  const { content, updateContent } = useTina();
  const [activeTab, setActiveTab] = useState("hero");
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (content[activeTab as keyof typeof content]) {
      setFormData(content[activeTab as keyof typeof content]);
    }
  }, [activeTab, content]);

  const handleInputChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    // Auto-save for live preview
    updateContent(activeTab, newData);
  };

  const tabs = [
    { id: "hero", label: "Hero Section", component: Hero, icon: "🏠" },
    { id: "trustBadges", label: "Trust Badges", component: TrustBadges, icon: "🛡️" },
    { id: "demoShowcase", label: "Demo Showcase", component: DemoShowcase, icon: "🖥️" },
    { id: "crossCompatibility", label: "Cross Compatibility", component: CrossCompatibilitySection, icon: "🔗" },
    { id: "refundPolicy", label: "Refund Policy", component: RefundPolicy, icon: "💰" },
    { id: "colorPalettes", label: "Color Palettes", component: ColorPalettes, icon: "🎨" },
    { id: "performanceSection", label: "Performance", component: PerformanceSection, icon: "⚡" },
    { id: "keyFeatures", label: "Key Features", component: KeyFeatures, icon: "⭐" },
    { id: "blocksGallery", label: "Blocks Gallery", component: BlocksGallery, icon: "🧱" },
    { id: "beforeAfterSection", label: "Before/After", component: BeforeAfterSection, icon: "🔄" },
    { id: "customizationSection", label: "Customization", component: CustomizationSection, icon: "🛠️" },
    { id: "postTypesSection", label: "Post Types", component: PostTypesSection, icon: "📝" },
    { id: "detailsSection", label: "Details", component: DetailsSection, icon: "📋" },
    { id: "technicalSection", label: "Technical", component: TechnicalSection, icon: "⚙️" },
    { id: "elementorExtension", label: "Elementor", component: ElementorExtension, icon: "🔧" },
    { id: "layoutsGallery", label: "Layouts", component: LayoutsGallery, icon: "📐" },
    { id: "installationWizard", label: "Installation", component: InstallationWizard, icon: "🧙" },
    { id: "templateBuilder", label: "Templates", component: TemplateBuilder, icon: "🏗️" },
    { id: "headerVariations", label: "Headers", component: HeaderVariations, icon: "📄" },
    { id: "mobileFirstSection", label: "Mobile First", component: MobileFirstSection, icon: "📱" },
    { id: "pluginsSection", label: "Plugins", component: PluginsSection, icon: "🔌" },
    { id: "ctaSection", label: "Call to Action", component: CTASection, icon: "📢" },
    { id: "settings", label: "Site Settings", component: null, icon: "⚙️" },
  ];

  const renderPreview = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    if (!currentTab?.component) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500">
          <div className="text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <p>Site Settings Preview</p>
            <p className="text-sm">Global settings don't have a preview</p>
          </div>
        </div>
      );
    }
    
    const Component = currentTab.component;
    return (
      <div className="w-full">
        <Component />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Content Management
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Edit content on the left, see live preview on the right
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              ← Back to Site
            </Link>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-120px)]">
        {/* Left Sidebar - Content Editor */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
          {/* Section Tabs */}
          <div className="border-b border-gray-200 bg-gray-50">
            <nav className="flex flex-wrap -mb-px px-2 max-h-32 overflow-y-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-2 text-xs font-medium border-b-2 whitespace-nowrap flex items-center gap-1 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600 bg-white"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  title={tab.label}
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span className="hidden lg:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Editor Forms */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6">
              {activeTab === "hero" && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">🏠 Hero Section</h3>
                    <p className="text-sm text-blue-700">Edit the main banner content that visitors see first</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Main Title
                    </label>
                    <textarea
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter the main headline..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subtitle
                    </label>
                    <textarea
                      value={formData.subtitle || ""}
                      onChange={(e) => handleInputChange("subtitle", e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter the subtitle..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Button Text
                    </label>
                    <input
                      type="text"
                      value={formData.buttonText || ""}
                      onChange={(e) => handleInputChange("buttonText", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Purchase Now"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Button Link
                    </label>
                    <input
                      type="url"
                      value={formData.buttonLink || ""}
                      onChange={(e) => handleInputChange("buttonLink", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Text
                    </label>
                    <input
                      type="text"
                      value={formData.secondaryText || ""}
                      onChange={(e) => handleInputChange("secondaryText", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Take your website to the next level"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Button Text
                    </label>
                    <input
                      type="text"
                      value={formData.secondaryButtonText || ""}
                      onChange={(e) => handleInputChange("secondaryButtonText", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., View Demos"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Background Image URL
                    </label>
                    <input
                      type="url"
                      value={formData.backgroundImage || ""}
                      onChange={(e) => handleInputChange("backgroundImage", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              )}

              {activeTab === "ctaSection" && (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">📢 Call to Action</h3>
                    <p className="text-sm text-green-700">Edit the final conversion section</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CTA Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Ready to Transform Your Business?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CTA Subtitle
                    </label>
                    <textarea
                      value={formData.subtitle || ""}
                      onChange={(e) => handleInputChange("subtitle", e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter compelling description..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={formData.buttonText || ""}
                      onChange={(e) => handleInputChange("buttonText", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Get Started Now"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Button Link
                    </label>
                    <input
                      type="url"
                      value={formData.buttonLink || ""}
                      onChange={(e) => handleInputChange("buttonLink", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              )}

              {activeTab === "keyFeatures" && (
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-900 mb-2">⭐ Key Features</h3>
                    <p className="text-sm text-purple-700">Edit the main features section</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={formData.sectionTitle || ""}
                      onChange={(e) => handleInputChange("sectionTitle", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Key Features"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Subtitle
                    </label>
                    <textarea
                      value={formData.sectionSubtitle || ""}
                      onChange={(e) => handleInputChange("sectionSubtitle", e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Brief description of the features..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      💡 Individual features are managed through the content files. This section controls the overall section title and subtitle.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">⚙️ Site Settings</h3>
                    <p className="text-sm text-gray-700">Global website settings</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      value={formData.siteName || ""}
                      onChange={(e) => handleInputChange("siteName", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your website name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Description
                    </label>
                    <textarea
                      value={formData.siteDescription || ""}
                      onChange={(e) => handleInputChange("siteDescription", e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Brief description for SEO..."
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Purchase Link
                    </label>
                    <input
                      type="url"
                      value={formData.purchaseLink || ""}
                      onChange={(e) => handleInputChange("purchaseLink", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div className="flex-1 bg-gray-100 flex flex-col">
          <div className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Live Preview - {tabs.find(t => t.id === activeTab)?.label}
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Auto-saving</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-auto p-6">
            <div className="bg-white rounded-lg shadow-sm border min-h-full">
              {renderPreview()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
