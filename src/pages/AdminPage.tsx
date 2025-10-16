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

type Field = {
  name: string;
  label: string;
  type: "text" | "url" | "textarea" | "list" | "object";
  placeholder?: string;
  rows?: number;
  item?: {
    type: "object";
    fields: Field[];
  };
};

type Schema = {
  title: string;
  description?: string;
  fields: Field[];
};

type DynamicFormProps = {
  schema: Schema;
  formData: any;
  onChange: (fieldName: string, value: any) => void;
};

export const DynamicForm: React.FC<DynamicFormProps> = ({
  schema,
  formData,
  onChange,
}) => {
  const renderField = (
    field: Field,
    value: any,
    onValueChange: (val: any) => void
  ) => {
    switch (field.type) {
      case "textarea":
        return (
          <textarea
            value={value || ""}
            onChange={(e) => onValueChange(e.target.value)}
            rows={field.rows || 3}
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        );
      case "text":
      case "url":
        return (
          <input
            type={field.type}
            value={value || ""}
            onChange={(e) => onValueChange(e.target.value)}
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        );
      case "list":
        return (
          <div className="space-y-3">
            {(value || []).map((item: any, idx: number) => (
              <div
                key={idx}
                className="border p-3 rounded-lg bg-gray-50 space-y-2"
              >
                {field.item?.fields.map((subField) => (
                  <div key={subField.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {subField.label}
                    </label>
                    {renderField(subField, item[subField.name], (val) => {
                      const updatedList = [...value];
                      updatedList[idx][subField.name] = val;
                      onValueChange(updatedList);
                    })}
                  </div>
                ))}
                <button
                  type="button"
                  className="text-red-600 text-sm mt-2"
                  onClick={() => {
                    const updatedList = value.filter(
                      (_: any, i: number) => i !== idx
                    );
                    onValueChange(updatedList);
                  }}
                >
                  ✕ Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm mt-2"
              onClick={() => {
                const newItem: any = {};
                field.item?.fields.forEach((f) => (newItem[f.name] = ""));
                onValueChange([...(value || []), newItem]);
              }}
            >
              ➕ Add {field.label.slice(0, -1)}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">{schema.title}</h3>
        {schema.description && (
          <p className="text-sm text-blue-700">{schema.description}</p>
        )}
      </div>

      {schema.fields?.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {field.label}
          </label>
          {renderField(field, formData[field.name], (val) =>
            onChange(field.name, val)
          )}
        </div>
      ))}
    </div>
  );
};
const schemas: any = {
  hero: {
    title: "Hero Section",
    description: "Edit the main banner content",
    fields: [
      {
        name: "title",
        label: "Main Title",
        type: "textarea",
        placeholder: "Enter headline...",
      },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      { name: "buttonText", label: "Primary Button Text", type: "text" },
      { name: "buttonLink", label: "Primary Button Link", type: "url" },
      { name: "backgroundImage", label: "Background Image", type: "url" },
    ],
  },
  trustBadges: {
    title: "Trust Badges",
    description: "Edit trust indicators and badges",
    fields: [
      {
        name: "badges",
        label: "Badges",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "id", label: "ID", type: "text" },
            { name: "title", label: "Title", type: "text" },
            { name: "subtitle", label: "Subtitle", type: "text" },
            { name: "text", label: "Text", type: "text" },
            { name: "icon", label: "Icon", type: "text" },
            { name: "imageUrl", label: "Image URL", type: "url" },
            { name: "altText", label: "Alt Text", type: "text" },
          ],
        },
      },
    ],
  },
  demoShowcase: {
    title: "Hero Section",
    subtitle: "Hero Section",
    image: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/home-1.webp",
    fields: [
      {
        name: "image",
        label: "Image",
        type: "url",
      },
      {
        name: "text1",
        label: "text1",
        type: "text",
      },

      {
        name: "text2",
        label: "text2",
        type: "text",
      },

      {
        name: "text3",
        label: "text3",
        type: "text",
      },
      {
        name: "text4",
        label: "text4",
        type: "text",
      },
      {
        name: "text5",
        label: "text5",
        type: "text",
      },
      {
        name: "demos",
        label: "demos",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "id", label: "ID", type: "text" },
            { name: "title", label: "Title", type: "text" },
            { name: "href", label: "Subtitle", type: "text" },
            { name: "imageUrl", label: "Text", type: "text" },
            { name: "qrCodeUrl", label: "Icon", type: "text" },
          ],
        },
      },
    ],
  },
  crossCompatibility: {
    title: "Cross-Compatibility",

    fields: [
      {
        name: "line1",
        label: "Line 1",
        type: "url",
      },
      {
        name: "heading",
        label: "Heading",
        type: "text",
      },
      {
        name: "description",
        label: "Description",
        type: "text",
      },
      {
        name: "buttonText",
        label: "Button Text",
        type: "text",
      },
      {
        name: "buttonLink",
        label: "Button Link",
        type: "url",
      },
    ],
  },
  refundPolicy: {
    title: "Refund Policy",
    fields: [
      {
        name: "line1",
        label: "Line 1",
        type: "url",
      },
      {
        name: "heading",
        label: "Heading",
        type: "text",
      },
      {
        name: "description",
        label: "Description",
        type: "text",
      },
    ],
  },
  performanceSection: {
    title: "Performance Section",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "text",
      },
      {
        name: "description",
        label: "Description",
        type: "text",
      },
      {
        name: "features",
        label: "Features",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "id", label: "ID", type: "text" },
            { name: "title", label: "Title", type: "text" },
          ],
        },
      },
      {
        name: "line1",
        label: "Line 1",
        type: "url",
      },
    ],
  },

  keyFeatures: {
    title: "Key Features",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "text",
      },
      {
        name: "subtitle",
        label: "subtitle",
        type: "text",
      },
      {
        name: "keyFeatures1",
        label: "Key Features 1",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "id", label: "ID", type: "text" },
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "text" },
          ],
        },
      },
      {
        name: "keyFeatures2",
        label: "Key Features 2",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "id", label: "ID", type: "text" },
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "text" },
          ],
        },
      },
    ],
  },
  blocksGallery: {
    title: "Blocks Gallery",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "text",
      },
      {
        name: "subtitle",
        label: "subtitle",
        type: "text",
      },
      {
        name: "images",
        label: "Images",
        type: "list",
        item: {
          type: "object",
          fields: [{ name: "url", label: "URL", type: "url" }],
        },
      },
    ],
  },
  beforeAfterSection: {
    title: "Before After",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "description", label: "Description", type: "text" },
      { name: "image1", label: "Image 1", type: "url" },
      { name: "image2", label: "Image 2", type: "url" },
      { name: "image3", label: "Image 3", type: "url" },
      { name: "image4", label: "Image 4", type: "url" },
    ],
  },
};
export const AdminPage = () => {
  const { content, updateContent } = useTina();
  const {
    gitStatus,
    isCommitting,
    lastCommitResult,
    commitAndPush,
    checkGitStatus,
    clearLastResult,
  } = useGit();
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
      console.error("Save failed:", error);
      setIsSaving(false);
    }
  };

  // Keyboard shortcut for save (Ctrl+S)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        if (hasUnsavedChanges) {
          handleManualSave();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasUnsavedChanges, formData, activeTab]);

  const handleCommitAndPush = async () => {
    if (!commitMessage.trim()) {
      alert("Please enter a commit message");
      return;
    }

    const result = await commitAndPush(
      commitMessage,
      gitStatus?.currentBranch || "main"
    );

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
    {
      id: "trustBadges",
      label: "Trust Badges",
      component: TrustBadges,
      icon: "🛡️",
    },
    {
      id: "demoShowcase",
      label: "Demo Showcase",
      component: DemoShowcase,
      icon: "🖥️",
    },
    {
      id: "crossCompatibility",
      label: "Cross Compatibility",
      component: CrossCompatibilitySection,
      icon: "🔗",
    },
    {
      id: "refundPolicy",
      label: "Refund Policy",
      component: RefundPolicy,
      icon: "💰",
    },
    {
      id: "colorPalettes",
      label: "Color Palettes",
      component: ColorPalettes,
      icon: "🎨",
    },
    {
      id: "performanceSection",
      label: "Performance",
      component: PerformanceSection,
      icon: "⚡",
    },
    {
      id: "keyFeatures",
      label: "Key Features",
      component: KeyFeatures,
      icon: "⭐",
    },
    {
      id: "blocksGallery",
      label: "Blocks Gallery",
      component: BlocksGallery,
      icon: "🧱",
    },
    {
      id: "beforeAfterSection",
      label: "Before/After",
      component: BeforeAfterSection,
      icon: "🔄",
    },
    {
      id: "customizationSection",
      label: "Customization",
      component: CustomizationSection,
      icon: "🛠️",
    },
    {
      id: "postTypesSection",
      label: "Post Types",
      component: PostTypesSection,
      icon: "📝",
    },
    {
      id: "detailsSection",
      label: "Details",
      component: DetailsSection,
      icon: "📋",
    },
    {
      id: "technicalSection",
      label: "Technical",
      component: TechnicalSection,
      icon: "⚙️",
    },
    {
      id: "elementorExtension",
      label: "Elementor",
      component: ElementorExtension,
      icon: "🔧",
    },
    {
      id: "layoutsGallery",
      label: "Layouts",
      component: LayoutsGallery,
      icon: "📐",
    },
    {
      id: "installationWizard",
      label: "Installation",
      component: InstallationWizard,
      icon: "🧙",
    },
    {
      id: "templateBuilder",
      label: "Templates",
      component: TemplateBuilder,
      icon: "🏗️",
    },
    {
      id: "headerVariations",
      label: "Headers",
      component: HeaderVariations,
      icon: "📄",
    },
    {
      id: "mobileFirstSection",
      label: "Mobile First",
      component: MobileFirstSection,
      icon: "📱",
    },
    {
      id: "pluginsSection",
      label: "Plugins",
      component: PluginsSection,
      icon: "🔌",
    },
    {
      id: "ctaSection",
      label: "Call to Action",
      component: CTASection,
      icon: "📢",
    },
    { id: "settings", label: "Site Settings", component: null, icon: "⚙️" },
  ];

  const renderPreview = () => {
    const currentTab = tabs.find((tab) => tab.id === activeTab);

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
              <h1 className="text-4xl font-bold mb-2">
                {formData.siteName || "Your Site Name"}
              </h1>
              <p className="text-xl text-blue-100">
                {formData.siteDescription || "Your site description"}
              </p>
            </div>
            <div className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Global Settings Preview
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Site Name:</span>
                  <span className="font-medium text-gray-900">
                    {formData.siteName || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Description:</span>
                  <span className="font-medium text-gray-900">
                    {formData.siteDescription || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Logo URL:</span>
                  <span className="font-medium text-gray-900 truncate max-w-xs">
                    {formData.logo || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Purchase Link:</span>
                  <span className="font-medium text-gray-900 truncate max-w-xs">
                    {formData.purchaseLink || "Not set"}
                  </span>
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
                  <p className="text-xl text-gray-600 mb-4">
                    {formData.subtitle}
                  </p>
                )}
                {formData.description && (
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    {formData.description}
                  </p>
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
                💡 This is a preview of your content. The actual component will
                render with these values.
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
  console.log({ activeTab });

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
                    <div
                      className={`w-2 h-2 rounded-full ${
                        gitStatus.hasChanges ? "bg-orange-500" : "bg-green-500"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-500">
                      {gitStatus.currentBranch &&
                        `Branch: ${gitStatus.currentBranch} • `}
                      {gitStatus.hasChanges
                        ? `${
                            gitStatus.changedFiles?.length || 0
                          } file(s) changed`
                        : "No changes"}
                    </span>
                  </div>
                )}

                {/* Save Status */}
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      hasUnsavedChanges ? "bg-yellow-500" : "bg-blue-500"
                    }`}
                  ></div>
                  <span className="text-sm text-gray-500">
                    {hasUnsavedChanges
                      ? "Unsaved changes"
                      : lastSaved
                      ? `Saved ${lastSaved.toLocaleTimeString()}`
                      : "All saved"}
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
                title={
                  hasUnsavedChanges
                    ? "Save changes (Ctrl+S)"
                    : "No changes to save"
                }
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
            {schemas[activeTab] ? (
              <DynamicForm
                schema={schemas[activeTab]}
                formData={formData}
                onChange={handleInputChange}
              />
            ) : (
              <div className="p-6 text-gray-500 text-center">
                No schema defined.
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div className="flex-1 bg-gray-100 flex flex-col">
          <div className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Live Preview - {tabs.find((t) => t.id === activeTab)?.label}
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div
                  className={`w-2 h-2 rounded-full ${
                    hasUnsavedChanges ? "bg-yellow-400" : "bg-blue-400"
                  }`}
                ></div>
                <span>
                  {hasUnsavedChanges ? "Unsaved changes" : "Manual save mode"}
                </span>
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
                    <div
                      key={index}
                      className="text-xs text-gray-700 font-mono"
                    >
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
              <div
                className={`mb-4 p-3 rounded-lg text-sm ${
                  lastCommitResult.success
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <div className="font-medium">{lastCommitResult.message}</div>
                {lastCommitResult.details && (
                  <div className="mt-1 text-xs opacity-75">
                    {lastCommitResult.details}
                  </div>
                )}
                {lastCommitResult.error && (
                  <div className="mt-1 text-xs opacity-75">
                    {lastCommitResult.error}
                  </div>
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
