"use client";

import React, { useState, useEffect } from "react";
import { useTina } from "@/contexts/TinaContext";
import Link from "next/link";
import { useGit } from "@/hooks/useGit";
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
  const { gitStatus, isCommitting, lastCommitResult, commitAndPush, checkGitStatus, clearLastResult } = useGit();
  const [activeTab, setActiveTab] = useState("hero");
  const [formData, setFormData] = useState<any>({});
  const [commitMessage, setCommitMessage] = useState("");
  const [showCommitDialog, setShowCommitDialog] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    if (content[activeTab as keyof typeof content]) {
      setFormData(content[activeTab as keyof typeof content]);
      setHasUnsavedChanges(false); // Reset unsaved changes when switching tabs
    }
  }, [activeTab, content]);

  const handleInputChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    setHasUnsavedChanges(true);
    // Auto-save disabled - changes only save when you click Save button
  };

  const handleManualSave = async () => {
    setIsSaving(true);
    try {
      // Save current section data
      updateContent(activeTab, formData);
      setHasUnsavedChanges(false);
      setLastSaved(new Date());
      
      // Optional: Show success feedback
      setTimeout(() => {
        setIsSaving(false);
      }, 500);
    } catch (error) {
      console.error('Save failed:', error);
      setIsSaving(false);
    }
  };

  // Keyboard shortcut for save (Ctrl+S)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        if (hasUnsavedChanges) {
          handleManualSave();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasUnsavedChanges, formData, activeTab]);

  const handleCommitAndPush = async () => {
    if (!commitMessage.trim()) {
      alert("Please enter a commit message");
      return;
    }

    const result = await commitAndPush(commitMessage, gitStatus?.currentBranch || 'main');
    
    if (result.success) {
      setCommitMessage("");
      setShowCommitDialog(false);
      // Refresh git status
      setTimeout(() => {
        checkGitStatus();
      }, 1000);
    }
  };

  const generateCommitMessage = () => {
    const timestamp = new Date().toLocaleString();
    return `Update content via admin panel - ${timestamp}`;
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
    
    // Show preview for settings (special case)
    if (activeTab === "settings") {
      return (
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-6">
                {formData.logo && (
                  <img src={formData.logo} alt="Logo" className="h-12" />
                )}
                <div className="flex items-center gap-4">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Purchase Now
                  </button>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-2">{formData.siteName || "Your Site Name"}</h1>
              <p className="text-xl text-blue-100">{formData.siteDescription || "Your site description"}</p>
            </div>
            <div className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Global Settings Preview</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Site Name:</span>
                  <span className="font-medium text-gray-900">{formData.siteName || "Not set"}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Description:</span>
                  <span className="font-medium text-gray-900">{formData.siteDescription || "Not set"}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Logo URL:</span>
                  <span className="font-medium text-gray-900 truncate max-w-xs">{formData.logo || "Not set"}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Purchase Link:</span>
                  <span className="font-medium text-gray-900 truncate max-w-xs">{formData.purchaseLink || "Not set"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // If no component exists, show a generic preview
    if (!currentTab?.component) {
      return (
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{currentTab?.icon || "📄"}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {formData.title || "Section Title"}
                </h2>
                {formData.subtitle && (
                  <p className="text-xl text-gray-600 mb-4">{formData.subtitle}</p>
                )}
                {formData.description && (
                  <p className="text-gray-700 max-w-2xl mx-auto">{formData.description}</p>
                )}
                {formData.buttonText && (
                  <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    {formData.buttonText}
                  </button>
                )}
              </div>
            </div>
            <div className="mt-6 p-6 bg-white rounded-lg shadow">
              <p className="text-sm text-gray-600 text-center">
                💡 This is a preview of your content. The actual component will render with these values.
              </p>
            </div>
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
              <div className="flex items-center gap-4 mt-2">
                {gitStatus && (
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${gitStatus.hasChanges ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                    <span className="text-sm text-gray-500">
                      {gitStatus.currentBranch && `Branch: ${gitStatus.currentBranch} • `}
                      {gitStatus.hasChanges ? `${gitStatus.changedFiles?.length || 0} file(s) changed` : 'No changes'}
                    </span>
                  </div>
                )}
                
                {/* Save Status */}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${hasUnsavedChanges ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                  <span className="text-sm text-gray-500">
                    {hasUnsavedChanges ? 'Unsaved changes' : lastSaved ? `Saved ${lastSaved.toLocaleTimeString()}` : 'All saved'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Manual Save Button */}
              <button
                onClick={handleManualSave}
                disabled={isSaving || !hasUnsavedChanges}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                title={hasUnsavedChanges ? "Save changes (Ctrl+S)" : "No changes to save"}
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <span>💾</span>
                    Save
                  </>
                )}
              </button>

              {gitStatus?.isGitRepo && gitStatus.hasChanges && (
                <button
                  onClick={() => setShowCommitDialog(true)}
                  disabled={isCommitting}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isCommitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Committing...
                    </>
                  ) : (
                    <>
                      <span>📤</span>
                      Commit & Push
                    </>
                  )}
                </button>
              )}
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                ← Back to Site
              </Link>
            </div>
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

              {/* Trust Badges Section */}
              {activeTab === "trustBadges" && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">🛡️ Trust Badges</h3>
                    <p className="text-sm text-blue-700">Edit trust indicators and badges</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Trusted by Thousands"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Describe your trust indicators..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      💡 Individual badges are managed through the content files.
                    </p>
                  </div>
                </div>
              )}

              {/* Demo Showcase Section */}
              {activeTab === "demoShowcase" && (
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-900 mb-2">🖥️ Demo Showcase</h3>
                    <p className="text-sm text-purple-700">Edit demo presentation section</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Explore Demo Variations"
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
                      placeholder="Brief description..."
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
                      placeholder="e.g., View All Demos"
                    />
                  </div>
                </div>
              )}

              {/* Cross Compatibility Section */}
              {activeTab === "crossCompatibility" && (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">🔗 Cross Compatibility</h3>
                    <p className="text-sm text-green-700">Edit compatibility information</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Works With Everything"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Describe compatibility features..."
                    />
                  </div>
                </div>
              )}

              {/* Refund Policy Section */}
              {activeTab === "refundPolicy" && (
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-medium text-yellow-900 mb-2">💰 Refund Policy</h3>
                    <p className="text-sm text-yellow-700">Edit refund policy details</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., 30-Day Money Back Guarantee"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Policy Details
                    </label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Describe your refund policy..."
                    />
                  </div>
                </div>
              )}

              {/* Color Palettes Section */}
              {activeTab === "colorPalettes" && (
                <div className="space-y-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-medium text-pink-900 mb-2">🎨 Color Palettes</h3>
                    <p className="text-sm text-pink-700">Edit color scheme options</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Beautiful Color Schemes"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Describe color customization..."
                    />
                  </div>
                </div>
              )}

              {/* Performance Section */}
              {activeTab === "performanceSection" && (
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-orange-900 mb-2">⚡ Performance</h3>
                    <p className="text-sm text-orange-700">Edit performance metrics</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Lightning Fast Performance"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Describe performance features..."
                    />
                  </div>
                </div>
              )}

              {/* Plugins Section */}
              {activeTab === "pluginsSection" && (
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-medium text-indigo-900 mb-2">🔌 Plugins</h3>
                    <p className="text-sm text-indigo-700">Edit plugins information</p>
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
                      placeholder="e.g., Included Premium Plugins"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Describe included plugins..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      💡 Individual plugins are managed through the content files.
                    </p>
                  </div>
                </div>
              )}

              {/* Remaining sections with generic forms */}
              {["blocksGallery", "beforeAfterSection", "customizationSection", "postTypesSection", 
                "detailsSection", "technicalSection", "elementorExtension", "layoutsGallery",
                "installationWizard", "templateBuilder", "headerVariations", "mobileFirstSection"].includes(activeTab) && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">
                      {tabs.find(t => t.id === activeTab)?.icon} {tabs.find(t => t.id === activeTab)?.label}
                    </h3>
                    <p className="text-sm text-gray-700">Edit this section content</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Title
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter section title..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      value={formData.subtitle || ""}
                      onChange={(e) => handleInputChange("subtitle", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter subtitle..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter detailed description..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Button Text (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.buttonText || ""}
                      onChange={(e) => handleInputChange("buttonText", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="e.g., Learn More"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Button Link (optional)
                    </label>
                    <input
                      type="url"
                      value={formData.buttonLink || ""}
                      onChange={(e) => handleInputChange("buttonLink", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="https://..."
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700">
                      💡 These are the basic fields. Additional customization options can be added through the content JSON files.
                    </p>
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
                <div className={`w-2 h-2 rounded-full ${hasUnsavedChanges ? 'bg-yellow-400' : 'bg-blue-400'}`}></div>
                <span>{hasUnsavedChanges ? 'Unsaved changes' : 'Manual save mode'}</span>
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

      {/* Commit Dialog Modal */}
      {showCommitDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Commit & Push Changes
            </h3>
            
            {gitStatus && gitStatus.changedFiles && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Files to be committed ({gitStatus.changedFiles.length}):
                </p>
                <div className="bg-gray-50 rounded p-2 max-h-32 overflow-y-auto">
                  {gitStatus.changedFiles.map((file, index) => (
                    <div key={index} className="text-xs text-gray-700 font-mono">
                      {file}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Commit Message
              </label>
              <textarea
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                rows={3}
                placeholder="Describe your changes..."
              />
              <button
                type="button"
                onClick={() => setCommitMessage(generateCommitMessage())}
                className="mt-2 text-xs text-blue-600 hover:text-blue-800"
              >
                Generate automatic message
              </button>
            </div>

            {lastCommitResult && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                lastCommitResult.success 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                <div className="font-medium">{lastCommitResult.message}</div>
                {lastCommitResult.details && (
                  <div className="mt-1 text-xs opacity-75">{lastCommitResult.details}</div>
                )}
                {lastCommitResult.error && (
                  <div className="mt-1 text-xs opacity-75">{lastCommitResult.error}</div>
                )}
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowCommitDialog(false);
                  setCommitMessage("");
                  clearLastResult();
                }}
                disabled={isCommitting}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCommitAndPush}
                disabled={isCommitting || !commitMessage.trim()}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isCommitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Committing...
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    Commit & Push
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
