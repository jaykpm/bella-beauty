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
import { CustomizationFeaturesSection } from "@/sections/CustomizationFeaturesSection";

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
    const charCount = value ? value.length : 0;
    const isImageUrl =
      field.type === "url" && field.name.toLowerCase().includes("image");

    switch (field.type) {
      case "textarea":
        return (
          <div className="relative">
            <textarea
              value={value || ""}
              onChange={(e) => onValueChange(e.target.value)}
              rows={field.rows || 3}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            />
            {charCount > 0 && (
              <span className="absolute bottom-2 right-3 text-xs text-gray-400 bg-white px-2 rounded">
                {charCount} chars
              </span>
            )}
          </div>
        );
      case "text":
        return (
          <div className="relative">
            <input
              type={field.type}
              value={value || ""}
              onChange={(e) => onValueChange(e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            />
            {charCount > 0 && (
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-white px-2 rounded">
                {charCount}
              </span>
            )}
          </div>
        );
      case "url":
        return (
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type={field.type}
                value={value || ""}
                onChange={(e) => onValueChange(e.target.value)}
                placeholder={field.placeholder}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              />
              {isImageUrl && (
                <label className="relative cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          onValueChange(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />
                  <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium text-sm whitespace-nowrap flex items-center gap-2">
                    📤 Upload
                  </div>
                </label>
              )}
            </div>
            {isImageUrl && value && (
              <div className="mt-2 p-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <img
                    src={value}
                    alt="Preview"
                    className="max-h-32 rounded-lg object-cover shadow-md"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => onValueChange("")}
                    className="ml-auto text-red-500 hover:text-red-700 text-sm font-medium transition-colors p-2 hover:bg-red-50 rounded-lg"
                    title="Remove image"
                  >
                    🗑️
                  </button>
                </div>
                <p
                  className="text-xs text-gray-500 mt-2 truncate"
                  title={value}
                >
                  {value.startsWith("data:")
                    ? "📎 Uploaded image (Base64)"
                    : `🔗 ${value}`}
                </p>
              </div>
            )}
          </div>
        );
      case "list":
        return (
          <div className="space-y-4">
            {(value || []).map((item: any, idx: number) => (
              <div
                key={idx}
                className="border border-gray-200 p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 space-y-3 shadow-sm hover:shadow-md transition-all duration-200"
              >
                {field.item?.fields.map((subField) => (
                  <div key={subField.name}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                  className="text-red-600 hover:text-red-700 text-sm mt-2 font-medium flex items-center gap-1 transition-colors"
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
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm mt-2 font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2"
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
    <div className="space-y-6 p-6">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-sm">
        <h3 className="font-semibold text-blue-900 mb-2 text-lg">
          {schema.title}
        </h3>
        {schema.description && (
          <p className="text-sm text-blue-700">{schema.description}</p>
        )}
      </div>

      {schema.fields?.map((field) => (
        <div key={field.name} className="animate-fadeIn">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
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
            { name: "imageUrl", label: "Image", type: "text" },
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
  customizationSection: {
    title: "Customization",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "text" },
    ],
  },
  postTypesSection: {
    title: "Post Types",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "text" },
      {
        name: "posts",
        label: "Posts",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "text" },
            { name: "image", label: "Image", type: "url" },
          ],
        },
      },
    ],
  },
  detailsSection: {
    title: "Details",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "text" },
      { name: "description2", label: "Description 2", type: "text" },
    ],
  },
  technicalSection: {
    title: "Technical Section",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "text" },
      { name: "description2", label: "Description 2", type: "text" },
      { name: "description3", label: "Description 3", type: "text" },
      { name: "description4", label: "Description 4", type: "text" },
      { name: "image1", label: "Image 1", type: "url" },
      { name: "image2", label: "Image 2", type: "url" },
      { name: "image3", label: "Image 3", type: "url" },
    ],
  },
  elementorExtension: {
    title: "Elementor Extension",
    fields: [
      {
        name: "elementors",
        label: "Elementor",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "titleSmall", label: "Title Small", type: "text" },
            { name: "titleLarge", label: "Title Large", type: "text" },
            {
              name: "list",
              label: "List",
              type: "list",
              item: {
                type: "object",
                fields: [{ name: "text", label: "Text", type: "text" }],
              },
            },
            { name: "image", label: "Image", type: "url" },
          ],
        },
      },
    ],
  },
  layoutsGallery: {
    title: "Layouts Gallery",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "text" },
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
  installationWizard: {
    title: "Installation Wizard",
    fields: [
      { name: "sectionId", label: "Section ID", type: "text" },
      { name: "smallTitle", label: "Small Title", type: "text" },
      { name: "mainTitle", label: "Main Title", type: "text" },
      { name: "description", label: "Description", type: "text" },
      { name: "image", label: "Image", type: "url" },
    ],
  },
  templateBuilder: {
    title: "Template Builder",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "text" },
      {
        name: "posts",
        label: "Posts",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "text" },
            { name: "image", label: "Image", type: "url" },
          ],
        },
      },
    ],
  },
  headerVariations: {
    title: "Header Variations",
    fields: [
      { name: "sectionId", label: "Section ID", type: "text" },
      { name: "backgroundColor", label: "Background Color", type: "text" },
      { name: "smallTitle", label: "Small Title", type: "text" },
      { name: "mainTitle", label: "Main Title", type: "text" },
      { name: "description", label: "Description", type: "text" },
      {
        name: "images",
        label: "Images",
        type: "list",
        item: {
          type: "object",
          fields: [{ name: "url", label: "URL", type: "url" }],
        },
      },
      { name: "footerNote", label: "Footer Note", type: "text" },
    ],
  },
  ctaSection: {
    title: "CTA Section",
    fields: [
      { name: "sectionId", label: "Section ID", type: "text" },
      { name: "backgroundImage", label: "Background Image", type: "url" },
      { name: "overlayColor", label: "Overlay Color", type: "text" },
      { name: "title", label: "Title", type: "text" },
      { name: "buttonLabel", label: "Button Label", type: "text" },
      { name: "buttonLink", label: "Button Link", type: "url" },
      {
        name: "features",
        label: "Features",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "icon", label: "Icon", type: "url" },
            { name: "text", label: "Text", type: "text" },
          ],
        },
      },
      { name: "mainImage", label: "Main Image", type: "url" },
      { name: "overlayImage", label: "Overlay Image", type: "url" },
    ],
  },

  pluginsSection: {
    title: "Plugins Section",
    fields: [
      { name: "sectionTitle", label: "Section Title", type: "text" },
      { name: "sectionSubtitle", label: "Section Subtitle", type: "text" },
      { name: "description", label: "Description", type: "text" },
      {
        name: "plugins",
        label: "Plugins",
        type: "list",
        item: {
          type: "object",
          fields: [
            { name: "name", label: "Name", type: "text" },
            { name: "imageUrl", label: "Image URL", type: "url" },
            { name: "showBadge", label: "Show Badge", type: "boolean" },
            { name: "badgeText", label: "Badge Text", type: "text" },
            { name: "badgeVariant", label: "Badge Variant", type: "text" },
          ],
        },
      },
    ],
  },
  customizationFeaturesSection: {
    title: "Customization Features Section",
    fields: [
      { name: "sectionId", label: "Section ID", type: "text" },
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "description", label: "Description", type: "text" },
      { name: "image", label: "Image", type: "url" },
      { name: "title2", label: "Title 2", type: "text" },
      { name: "subtitle2", label: "Subtitle 2", type: "text" },
      { name: "description2", label: "Description 2", type: "text" },
      { name: "image2", label: "Image 2", type: "url" },
      { name: "title3", label: "Title 3", type: "text" },
      { name: "subtitle3", label: "Subtitle 3", type: "text" },
      { name: "description3", label: "Description 3", type: "text" },
      { name: "image3", label: "Image 3", type: "url" },
    ],
  },
  colorPalettes: {
    title: "Color Palettes",
    fields: [
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "text", label: "Text", type: "text" },
      { name: "image1", label: "Image 1", type: "url" },
      { name: "image2", label: "Image 2", type: "url" },
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
  const [searchQuery, setSearchQuery] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error" | "info">(
    "success"
  );
  const [isCompactMode, setIsCompactMode] = useState(false);
  const [sectionVisibility, setSectionVisibility] = useState<
    Record<string, boolean>
  >({});
  const [favoriteSections, setFavoriteSections] = useState<string[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState<string | null>(null);
  const [editHistory, setEditHistory] = useState<
    Array<{ section: string; time: Date }>
  >([]);
  const [collapsedGroups, setCollapsedGroups] = useState<
    Record<string, boolean>
  >({});
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

  const showNotification = (
    message: string,
    type: "success" | "error" | "info" = "success"
  ) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleManualSave = async () => {
    setIsSaving(true);
    try {
      // Save current section data
      updateContent(activeTab, formData);
      setHasUnsavedChanges(false);
      setLastSaved(new Date());

      // Add to edit history
      setEditHistory((prev) => [
        { section: activeTab, time: new Date() },
        ...prev.slice(0, 9), // Keep last 10 edits
      ]);

      showNotification("Changes saved successfully! ✓", "success");

      // Optional: Show success feedback
      setTimeout(() => {
        setIsSaving(false);
      }, 500);
    } catch (error) {
      console.error("Save failed:", error);
      showNotification("Failed to save changes", "error");
      setIsSaving(false);
    }
  };

  const toggleSectionVisibility = (sectionId: string) => {
    setSectionVisibility((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
    showNotification(
      sectionVisibility[sectionId]
        ? "Section published"
        : "Section set to draft",
      "info"
    );
  };

  const toggleFavorite = (sectionId: string) => {
    setFavoriteSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const duplicateSection = () => {
    const newData = { ...formData };
    updateContent(`${activeTab}_copy`, newData);
    showNotification("Section duplicated! Switch tabs to see it.", "success");
  };

  const exportSection = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${activeTab}-export.json`;
    link.click();
    showNotification("Section exported!", "success");
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
    {
      id: "hero",
      label: "Hero Section",
      component: Hero,
      icon: "🏠",
      keywords: ["banner", "header", "main"],
    },
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
    // {
    //   id: "mobileFirstSection",
    //   label: "Mobile First",
    //   component: MobileFirstSection,
    //   icon: "📱",
    // },
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
    {
      id: "customizationFeaturesSection",
      label: "Customization Features",
      component: CustomizationFeaturesSection,
      icon: "🛠️",
    },
  ];

  // Filter tabs based on search query
  const filteredTabs = tabs.filter((tab) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      tab.label.toLowerCase().includes(query) ||
      tab.id.toLowerCase().includes(query) ||
      (tab.keywords &&
        tab.keywords.some((kw: string) => kw.toLowerCase().includes(query)))
    );
  });

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 backdrop-blur-sm bg-white/95 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Content Management
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-xs sm:text-sm text-gray-600">
                  Edit content on the left, see live preview on the right
                </p>
                <div className="hidden lg:flex items-center gap-1 text-xs text-gray-500 bg-white px-2 py-1 rounded-lg border border-gray-200">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">
                    Ctrl
                  </kbd>
                  <span>+</span>
                  <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">
                    S
                  </kbd>
                  <span className="ml-1">to save</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3">
                {gitStatus && (
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        gitStatus.hasChanges ? "bg-orange-500" : "bg-green-500"
                      }`}
                    ></div>
                    <span className="text-xs sm:text-sm text-gray-600 font-medium">
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
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1.5 rounded-full">
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      hasUnsavedChanges ? "bg-yellow-500" : "bg-blue-500"
                    }`}
                  ></div>
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">
                    {hasUnsavedChanges
                      ? "Unsaved changes"
                      : lastSaved
                      ? `Saved ${lastSaved.toLocaleTimeString()}`
                      : "All saved"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Manual Save Button */}
              <button
                onClick={handleManualSave}
                disabled={isSaving || !hasUnsavedChanges}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg font-medium text-sm"
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
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg font-medium text-sm"
                >
                  {isCommitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="hidden sm:inline">Committing...</span>
                    </>
                  ) : (
                    <>
                      <span>📤</span>
                      <span className="hidden sm:inline">Commit & Push</span>
                    </>
                  )}
                </button>
              )}
              <Link
                href="/"
                className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="hidden sm:inline">← Back to Site</span>
                <span className="sm:hidden">← Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-140px)] sm:h-[calc(100vh-120px)]">
        {/* Left Sidebar - Content Editor */}
        <div className="w-full lg:w-1/3 bg-white border-r border-gray-200 flex flex-col shadow-lg">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔍 Search sections..."
                className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200 shadow-sm bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-gray-600 mt-2">
                {filteredTabs.length} section
                {filteredTabs.length !== 1 ? "s" : ""} found
              </p>
            )}
          </div>

          {/* Section Tabs */}
          <div className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
            <nav className="flex flex-wrap -mb-px px-2 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {filteredTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2.5 px-3 text-xs font-semibold border-b-2 whitespace-nowrap flex items-center gap-1.5 transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-700 bg-white shadow-sm"
                      : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300 hover:bg-white/50"
                  }`}
                  title={tab.label}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span className="hidden xl:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Editor Forms */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
            {schemas[activeTab] ? (
              <DynamicForm
                schema={schemas[activeTab]}
                formData={formData}
                onChange={handleInputChange}
              />
            ) : (
              <div className="p-6 text-gray-500 text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl m-6">
                <div className="text-4xl mb-3">📝</div>
                <p className="font-medium">
                  No schema defined for this section.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div className="flex-1 bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col">
          <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                <span className="hidden sm:inline">Live Preview - </span>
                {tabs.find((t) => t.id === activeTab)?.label}
              </h2>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    hasUnsavedChanges ? "bg-yellow-400" : "bg-blue-400"
                  }`}
                ></div>
                <span className="font-medium">
                  {hasUnsavedChanges ? "Unsaved changes" : "Manual save mode"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4 sm:p-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 min-h-full">
              {renderPreview()}
            </div>
          </div>
        </div>
      </div>

      {/* Commit Dialog Modal */}
      {showCommitDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md mx-4 shadow-2xl transform transition-all duration-200 scale-100">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Commit & Push Changes
            </h3>

            {gitStatus && gitStatus.changedFiles && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Files to be committed ({gitStatus.changedFiles.length}):
                </p>
                <div className="bg-gray-50 rounded-xl p-3 max-h-32 overflow-y-auto border border-gray-200 scrollbar-thin scrollbar-thumb-gray-300">
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

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Commit Message
              </label>
              <textarea
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-all duration-200 shadow-sm"
                rows={3}
                placeholder="Describe your changes..."
              />
              <button
                type="button"
                onClick={() => setCommitMessage(generateCommitMessage())}
                className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                ✨ Generate automatic message
              </button>
            </div>

            {lastCommitResult && (
              <div
                className={`mb-6 p-4 rounded-xl text-sm shadow-sm ${
                  lastCommitResult.success
                    ? "bg-gradient-to-br from-green-50 to-emerald-50 text-green-800 border border-green-200"
                    : "bg-gradient-to-br from-red-50 to-rose-50 text-red-800 border border-red-200"
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
                className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md"
              >
                Cancel
              </button>
              <button
                onClick={handleCommitAndPush}
                disabled={isCommitting || !commitMessage.trim()}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg"
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

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
          <div
            className={`px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[280px] backdrop-blur-sm border ${
              toastType === "success"
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400"
                : toastType === "error"
                ? "bg-gradient-to-r from-red-500 to-rose-500 text-white border-red-400"
                : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-400"
            }`}
          >
            <span className="text-2xl">
              {toastType === "success"
                ? "✓"
                : toastType === "error"
                ? "✕"
                : "ℹ"}
            </span>
            <span className="font-medium text-sm">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};
