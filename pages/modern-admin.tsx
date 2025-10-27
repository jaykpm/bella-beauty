import React, { useState, useEffect } from "react";
import { useTina } from "@/contexts/TinaContext";
import Link from "next/link";
import { useGit } from "@/hooks/useGit";
import {
  Search,
  Save,
  Moon,
  Sun,
  Menu,
  X,
  Eye,
  Edit3,
  Columns,
  Maximize2,
  Minimize2,
  Layout,
  Star,
  Grid,
  Box,
  FileText,
  Palette,
  Zap,
  Type,
  Sparkles,
  ImageIcon,
  List,
  Settings,
} from "lucide-react";

// Import components
import { CommandPalette } from "@/components/admin/CommandPalette";
import { ModernSidebar } from "@/components/admin/ModernSidebar";
import { ToastNotification } from "@/components/admin/ToastNotification";
import { StatusBar } from "@/components/admin/StatusBar";
import { CommitDialog } from "@/components/admin/CommitDialog";
import { ModernDynamicForm } from "@/components/admin/ModernDynamicForm";

// Import sections
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

// Schemas (simplified for this example - add your full schemas)
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
      { name: "title", label: "Title", type: "text" },
      { name: "image1", label: "Image 1", type: "url" },
      { name: "image2", label: "Image 2", type: "url" },
    ],
  },
};

const ModernAdminPage = () => {
  const { content, updateContent } = useTina();
  const {
    gitStatus,
    isCommitting,
    lastCommitResult,
    commitAndPush,
    checkGitStatus,
    clearLastResult,
  } = useGit();

  // State Management
  const [activeTab, setActiveTab] = useState("hero");
  const [formData, setFormData] = useState<any>({});
  const [commitMessage, setCommitMessage] = useState("");
  const [showCommitDialog, setShowCommitDialog] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [favoriteSections, setFavoriteSections] = useState<string[]>([]);
  const [collapsedGroups, setCollapsedGroups] = useState<
    Record<string, boolean>
  >({});
  const [viewMode, setViewMode] = useState<"split" | "preview" | "edit">(
    "split"
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error" | "info" | "warning";
  }>({ show: false, message: "", type: "success" });

  // All tabs configuration
  const tabs = [
    {
      id: "hero",
      label: "Hero Section",
      component: Hero,
      icon: Layout,
      //   category: "Layout",
    },
    {
      id: "trustBadges",
      label: "Trust Badges",
      component: TrustBadges,
      icon: Star,
      //   category: "Content",
    },
    {
      id: "demoShowcase",
      label: "Demo Showcase",
      component: DemoShowcase,
      icon: Grid,
      //   category: "Content",
    },
    {
      id: "crossCompatibility",
      label: "Cross Compatibility",
      component: CrossCompatibilitySection,
      icon: Box,
      //   category: "Features",
    },
    {
      id: "refundPolicy",
      label: "Refund Policy",
      component: RefundPolicy,
      icon: FileText,
      //   category: "Other",
    },
    {
      id: "colorPalettes",
      label: "Color Palettes",
      component: ColorPalettes,
      icon: Palette,
      //   category: "Gallery",
    },
    {
      id: "performanceSection",
      label: "Performance",
      component: PerformanceSection,
      icon: Zap,
      //   category: "Features",
    },
    {
      id: "keyFeatures",
      label: "Key Features",
      component: KeyFeatures,
      icon: Star,
      //   category: "Content",
    },
    {
      id: "blocksGallery",
      label: "Blocks Gallery",
      component: BlocksGallery,
      icon: Grid,
      //   category: "Gallery",
    },
    {
      id: "beforeAfterSection",
      label: "Before/After",
      component: BeforeAfterSection,
      icon: ImageIcon,
      //   category: "Other",
    },
    {
      id: "customizationSection",
      label: "Customization",
      component: CustomizationSection,
      icon: Settings,
      //   category: "Features",
    },
    {
      id: "postTypesSection",
      label: "Post Types",
      component: PostTypesSection,
      icon: FileText,
      //   category: "Other",
    },
    {
      id: "detailsSection",
      label: "Details",
      component: DetailsSection,
      icon: List,
      //   category: "Other",
    },
    {
      id: "technicalSection",
      label: "Technical",
      component: TechnicalSection,
      icon: Settings,
      //   category: "Other",
    },
    {
      id: "elementorExtension",
      label: "Elementor",
      component: ElementorExtension,
      icon: Box,
      //   category: "Plugins",
    },
    {
      id: "layoutsGallery",
      label: "Layouts",
      component: LayoutsGallery,
      icon: Layout,
      //   category: "Gallery",
    },
    {
      id: "installationWizard",
      label: "Installation",
      component: InstallationWizard,
      icon: Sparkles,
      //   category: "Other",
    },
    {
      id: "templateBuilder",
      label: "Templates",
      component: TemplateBuilder,
      icon: Box,
      //   category: "Other",
    },
    {
      id: "headerVariations",
      label: "Headers",
      component: HeaderVariations,
      icon: Type,
      //   category: "Layout",
    },
    {
      id: "mobileFirstSection",
      label: "Mobile First",
      component: MobileFirstSection,
      icon: Grid,
      //   category: "Features",
    },
    {
      id: "pluginsSection",
      label: "Plugins",
      component: PluginsSection,
      icon: Box,
      //   category: "Plugins",
    },
    {
      id: "ctaSection",
      label: "Call to Action",
      component: CTASection,
      icon: Sparkles,
      //   category: "Layout",
    },
    {
      id: "customizationFeaturesSection",
      label: "Customization Features",
      component: CustomizationFeaturesSection,
      icon: Settings,
      //   category: "Features",
    },
  ];

  // Load form data when tab changes
  useEffect(() => {
    if (content[activeTab as keyof typeof content]) {
      setFormData(content[activeTab as keyof typeof content]);
      setHasUnsavedChanges(false);
    }
  }, [activeTab, content]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowCommandPalette(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        if (hasUnsavedChanges) handleManualSave();
      }
      if (e.key === "Escape") {
        setShowCommandPalette(false);
        if (isFullscreen) setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasUnsavedChanges, formData, activeTab, isFullscreen]);

  const handleInputChange = (field: string, value: any) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    setHasUnsavedChanges(true);
  };

  const showNotification = (
    message: string,
    type: "success" | "error" | "info" | "warning" = "success"
  ) => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  const handleManualSave = async () => {
    setIsSaving(true);
    try {
      updateContent(activeTab, formData);
      setHasUnsavedChanges(false);
      setLastSaved(new Date());
      showNotification("Changes saved successfully! ✓", "success");
      setTimeout(() => setIsSaving(false), 500);
    } catch (error) {
      console.error("Save failed:", error);
      showNotification("Failed to save changes", "error");
      setIsSaving(false);
    }
  };

  const handleCommitAndPush = async () => {
    if (!commitMessage.trim()) {
      showNotification("Please enter a commit message", "error");
      return;
    }

    const result = await commitAndPush(
      commitMessage,
      gitStatus?.currentBranch || "main"
    );

    if (result.success) {
      setCommitMessage("");
      setShowCommitDialog(false);
      showNotification("Changes committed successfully!", "success");
      setTimeout(() => checkGitStatus(), 1000);
    } else {
      showNotification(result.message || "Commit failed", "error");
    }
  };

  const generateCommitMessage = () => {
    const timestamp = new Date().toLocaleString();
    return `Update ${activeTab} section via admin panel - ${timestamp}`;
  };

  const toggleFavorite = (sectionId: string) => {
    setFavoriteSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleGroup = (group: string) => {
    setCollapsedGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const renderPreview = () => {
    const currentTab = tabs.find((tab) => tab.id === activeTab);
    if (!currentTab?.component) {
      return (
        <div className="p-8 flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-6xl mb-4">📄</div>
            <h2
              className={`text-2xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              No Preview Available
            </h2>
            <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
              This section doesn't have a preview component
            </p>
          </div>
        </div>
      );
    }

    const Component = currentTab.component;
    return <Component />;
  };

  const filteredTabs = tabs.filter((tab: any) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      tab?.label.toLowerCase().includes(query) ||
      tab?.id.toLowerCase().includes(query) ||
      tab?.category.toLowerCase().includes(query)
    );
  });

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "dark bg-gray-900"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
      } ${isFullscreen ? "fixed inset-0 z-50" : ""}`}
    >
      {/* Modern Header */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl ${
          isDarkMode
            ? "bg-gray-900/95 border-gray-800"
            : "bg-white/95 border-gray-200"
        } shadow-lg`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? "hover:bg-gray-800 text-gray-300"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>

              <div>
                <h1
                  className={`text-2xl font-bold bg-gradient-to-r ${
                    isDarkMode
                      ? "from-blue-400 to-indigo-400"
                      : "from-blue-600 to-indigo-600"
                  } bg-clip-text text-transparent`}
                >
                  Bella Beauty CMS
                </h1>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  Professional Content Management
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* View Mode Switcher */}
              <div
                className={`hidden md:flex items-center gap-1 p-1 rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <button
                  onClick={() => setViewMode("edit")}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === "edit"
                      ? isDarkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-600 text-white"
                      : isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                  title="Edit Only"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("split")}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === "split"
                      ? isDarkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-600 text-white"
                      : isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                  title="Split View"
                >
                  <Columns className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("preview")}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === "preview"
                      ? isDarkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-600 text-white"
                      : isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                  title="Preview Only"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5" />
                ) : (
                  <Maximize2 className="w-5 h-5" />
                )}
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Save Button */}
              <button
                onClick={handleManualSave}
                disabled={isSaving || !hasUnsavedChanges}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="hidden sm:inline">Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span className="hidden sm:inline">Save</span>
                  </>
                )}
              </button>

              {!isFullscreen && (
                <Link
                  href="/"
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <X className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Status Bar */}
          <div className="mt-3">
            <StatusBar
              gitStatus={gitStatus}
              hasUnsavedChanges={hasUnsavedChanges}
              lastSaved={lastSaved}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-140px)] overflow-hidden">
        {/* Sidebar - Fixed Width */}
        {(viewMode === "split" || viewMode === "edit") && !sidebarCollapsed && (
          <div className="flex-shrink-0">
            <ModernSidebar
              tabs={filteredTabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              isDarkMode={isDarkMode}
              collapsed={sidebarCollapsed}
              collapsedGroups={collapsedGroups}
              onToggleGroup={toggleGroup}
              favoriteSections={favoriteSections}
              onToggleFavorite={toggleFavorite}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {/* Collapsed Sidebar */}
        {(viewMode === "split" || viewMode === "edit") && sidebarCollapsed && (
          <div className="flex-shrink-0">
            <ModernSidebar
              tabs={filteredTabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              isDarkMode={isDarkMode}
              collapsed={sidebarCollapsed}
              collapsedGroups={collapsedGroups}
              onToggleGroup={toggleGroup}
              favoriteSections={favoriteSections}
              onToggleFavorite={toggleFavorite}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {/* Editor Panel - Fixed Width in Split Mode */}
        {(viewMode === "split" || viewMode === "edit") && (
          <div
            className={`${
              viewMode === "split" ? "w-[600px] flex-shrink-0" : "flex-1"
            } border-r ${
              isDarkMode
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-gray-200"
            } flex flex-col`}
          >
            {/* Search Bar */}
            <div
              className={`p-4 border-b ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-800"
                  : "bg-gradient-to-r from-blue-50 to-indigo-50 border-gray-200"
              }`}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sections..."
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200 shadow-sm ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto scrollbar-thin">
              {schemas[activeTab] ? (
                <ModernDynamicForm
                  schema={schemas[activeTab]}
                  formData={formData}
                  onChange={handleInputChange}
                  isDarkMode={isDarkMode}
                />
              ) : (
                <div className="p-6 text-center">
                  <div className="text-4xl mb-3">📝</div>
                  <p
                    className={`font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    No schema defined for this section
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Preview Panel - Takes Remaining Space */}
        {(viewMode === "split" || viewMode === "preview") && (
          <div
            className="flex-1 flex flex-col overflow-hidden"
            style={{
              backgroundColor: isDarkMode ? "#1f2937" : "transparent",
              backgroundImage: isDarkMode
                ? "none"
                : "linear-gradient(135deg, #f3f4f6 0%, #dbeafe 100%)",
            }}
          >
            <div
              className={`px-6 py-3 border-b ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Live Preview
              </h2>
            </div>
            <div className="flex-1 overflow-auto p-6">
              <div
                className={`rounded-2xl shadow-lg border min-h-full ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                {renderPreview()}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Command Palette */}
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        isDarkMode={isDarkMode}
        tabs={tabs}
        onNavigate={setActiveTab}
        onSave={handleManualSave}
        onCommit={() => setShowCommitDialog(true)}
      />

      {/* Commit Dialog */}
      <CommitDialog
        isOpen={showCommitDialog}
        onClose={() => setShowCommitDialog(false)}
        commitMessage={commitMessage}
        setCommitMessage={setCommitMessage}
        onCommit={handleCommitAndPush}
        isCommitting={isCommitting}
        gitStatus={gitStatus}
        lastCommitResult={lastCommitResult}
        isDarkMode={isDarkMode}
        onGenerateMessage={() => setCommitMessage(generateCommitMessage())}
      />

      {/* Toast Notification */}
      <ToastNotification
        show={toast.show}
        message={toast.message}
        type={toast.type}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default ModernAdminPage;
