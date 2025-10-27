"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ContentData {
  hero?: any;
  settings?: any;
  demos?: any[];
  trustBadges?: any;
  keyFeatures?: any;
  ctaSection?: any;
  pluginsSection?: any;
  demoShowcase?: any;
  crossCompatibility?: any;
  refundPolicy?: any;
  colorPalettes?: any;
  performanceSection?: any;
  blocksGallery?: any;
  beforeAfterSection?: any;
  customizationSection?: any;
  postTypesSection?: any;
  detailsSection?: any;
  technicalSection?: any;
  elementorExtension?: any;
  layoutsGallery?: any;
  installationWizard?: any;
  templateBuilder?: any;
  headerVariations?: any;
  // mobileFirstSection?: any;
  customizationFeaturesSection?: any;
}

interface TinaContextType {
  content: ContentData;
  updateContent: (section: string, data: any) => Promise<void>;
  isLoading: boolean;
}

const TinaContext = createContext<TinaContextType | undefined>(undefined);

export const TinaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState<ContentData>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load content from localStorage or fetch from JSON files
    const loadContent = async () => {
      try {
        // Clear localStorage on every reload to fetch fresh data
        localStorage.removeItem("tinaContent");

        // Always fetch fresh content from JSON files
        const [
          heroRes,
          settingsRes,
          trustBadgesRes,
          keyFeaturesRes,
          ctaSectionRes,
          pluginsSectionRes,
          crossCompatibilityRes,
          refundPolicyRes,
          performanceSectionRes,
          blocksGalleryRes,
          beforeAfterSectionRes,
          customizationSectionRes,
          postTypesSectionRes,
          detailsSectionRes,
          technicalSectionRes,
          elementorExtensionRes,
          layoutsGalleryRes,
          installationWizardRes,
          templateBuilderRes,
          headerVariationsRes,
          customizationFeaturesSectionRes,
          colorPalettesRes,
        ] = await Promise.all([
          fetch("/content/hero/index.json").catch(() => null),
          fetch("/content/settings/index.json").catch(() => null),
          fetch("/content/trust-badges/index.json").catch(() => null),
          fetch("/content/key-features/index.json").catch(() => null),
          fetch("/content/cta-section/index.json").catch(() => null),
          fetch("/content/plugins-section/index.json").catch(() => null),
          fetch("/content/cross-compatibility/index.json").catch(() => null),
          fetch("/content/refund-policy/index.json").catch(() => null),
          fetch("/content/performance/index.json").catch(() => null),
          fetch("/content/blocks-gallery/index.json").catch(() => null),
          fetch("/content/before-after/index.json").catch(() => null),
          fetch("/content/customization/index.json").catch(() => null),
          fetch("/content/post-types/index.json").catch(() => null),
          fetch("/content/details/index.json").catch(() => null),
          fetch("/content/technical/index.json").catch(() => null),
          fetch("/content/elementor/index.json").catch(() => null),
          fetch("/content/layouts-gallery/index.json").catch(() => null),
          fetch("/content/installation-wizard/index.json").catch(() => null),
          fetch("/content/template-builder/index.json").catch(() => null),
          fetch("/content/header-variations/index.json").catch(() => null),
          fetch("/content/customization-features-section/index.json").catch(
            () => null
          ),
          fetch("/content/color-palettes/index.json").catch(() => null),
        ]);

        const defaultContent: ContentData = {
          hero: heroRes
            ? await heroRes.json()
            : {
                title:
                  "Create your Aesthetic Medical Clinic website with Bella Beauty",
                subtitle: "Elementor Based Beauty Clinic WordPress Theme",
                buttonText: "Purchase Now",
                buttonLink: "https://1.envato.market/cmsmasters-bella-beauty",
                secondaryText: "Take your website to the next level.",
                secondaryButtonText: "View Demos",
                secondaryButtonLink: "#demos",
                backgroundImage:
                  "https://bella-beauty.cmsmasters.studio/wp-content/uploads/2024/03/landing-1.webp",
              },
          settings: settingsRes
            ? await settingsRes.json()
            : {
                siteName: "Bella Beauty",
                siteDescription:
                  "Elementor Based Beauty Clinic WordPress Theme",
                logo: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/logo.svg",
                purchaseLink: "https://1.envato.market/cmsmasters-bella-beauty",
              },
          trustBadges: trustBadgesRes
            ? await trustBadgesRes.json()
            : { badges: [] },
          keyFeatures: keyFeaturesRes
            ? await keyFeaturesRes.json()
            : { title: "Key Features", features: [] },
          ctaSection: ctaSectionRes
            ? await ctaSectionRes.json()
            : {
                sectionId: "ctaSection",
                backgroundImage:
                  "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/landing-bg.webp",
                overlayColor: "rgba(38, 38, 38, 0.5)",
                title: "Get started with Bella Beauty",
                buttonLabel: "Purchase Now",
                buttonLink: "https://1.envato.market/cmsmasters-bella-beauty",
                features: [
                  {
                    icon: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-15.svg",
                    text: "Super friendly support",
                  },
                  {
                    icon: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-15.svg",
                    text: "Lifetime updates",
                  },
                  {
                    icon: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-15.svg",
                    text: "Online documentation",
                  },
                ],
                mainImage:
                  "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/landing-33.webp",
                overlayImage:
                  "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/landing-34.webp",
              },
          pluginsSection: pluginsSectionRes
            ? await pluginsSectionRes.json()
            : {
                sectionTitle: "Save money with already included plugins",
                sectionSubtitle:
                  "Get premium plugins worth $200+ included for free with your theme purchase",
                description:
                  "Not just a theme, but a full pack of premium plugins inside!",
                plugins: [
                  {
                    name: "Elementor Pro",
                    imageUrl:
                      "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/plugin-elementor.png",
                    showBadge: true,
                    badgeText: "Premium",
                    badgeVariant: "bg-stone-500",
                  },
                ],
              },
          crossCompatibility: crossCompatibilityRes
            ? await crossCompatibilityRes.json()
            : {
                title: "Cross-Compatibility",
                description: "Cross-Compatibility",
                buttonText: "Purchase Now",
                buttonLink: "https://1.envato.market/cmsmasters-bella-beauty",
              },
          refundPolicy: refundPolicyRes
            ? await refundPolicyRes.json()
            : {
                line1: "",
                heading: "",
                description: "",
              },
          performanceSection: performanceSectionRes
            ? await performanceSectionRes.json()
            : {
                title: "Google PageSpeed Insights Performance Score 80+",
                description: "Get an impressive performance score with:",
                features: [
                  {
                    title: "Pre-optimised widgets;",
                  },
                  {
                    title: "Lazy loading widgets;",
                  },
                  {
                    title: "Local fonts included;",
                  },
                ],
                line1:
                  "Improve your page load time even further by using WordPress caching plugins and optimising your images.",
              },
          blocksGallery: blocksGalleryRes
            ? await blocksGalleryRes.json()
            : {
                title: "Blocks Gallery",
                subtitle: "subtitle",
                images: [],
              },
          beforeAfterSection: beforeAfterSectionRes
            ? await beforeAfterSectionRes.json()
            : {
                title: "Before After",
                subtitle: "Image Comparison Widget",
                description:
                  "Showcase your expertise by comparing two images using the before after widget. See the transformation in a glance, whether it’s beauty procedures, photos, designs and more.",
                image1: "",
                image2: "",
                image3: "",
                image4: "",
              },
          customizationSection: customizationSectionRes
            ? await customizationSectionRes.json()
            : {
                title:
                  "Customize the whole website in few clicks with global settings",
                description:
                  "Enjoy intuitive interface and flexibility of one of the most user-friendly page builders for WordPress.",
              },
          postTypesSection: postTypesSectionRes
            ? await postTypesSectionRes.json()
            : {
                title: "Dynamic &amp; fully customizable post types",
                description:
                  "Services &amp; Doctor Profiles, along with Blog Posts templates - all set up for you!",
                posts: [],
              },
          detailsSection: detailsSectionRes
            ? await detailsSectionRes.json()
            : {
                title: "Details, not only in home pages",
                description:
                  "Powerful theme, thoroughly designed to the finest details",
                description2:
                  "Not just some dummy templates, but fully functional ready-to-go websites!",
              },
          technicalSection: technicalSectionRes
            ? await technicalSectionRes.json()
            : {
                title: "Technically speaking",
                description: "We’ve made Elementor even better",
                description2: "World’s most popular builder used as a core",
                description3: "+ Premium custom extention",
                description4: "Included for FREE",
                image1: "",
                image2: "",
                image3: "",
              },
          elementorExtension: elementorExtensionRes
            ? await elementorExtensionRes.json()
            : {
                titleSmall: "Custom elementor extension",
                titleLarge: "CmsMasters addon bundled for FREE",
                list: [
                  "Header and Footer builder with unlimited layout options.",
                  "Archives builder - any imaginable design is possible.",
                  "Endless layouts and design options for any Post Types.",
                  "Blog Entry template builder.",
                ],
                image: "/images/addon-free.webp",
              },
          layoutsGallery: layoutsGalleryRes
            ? await layoutsGalleryRes.json()
            : {
                title: "Layouts Gallery",
                description:
                  "Ready variety of layouts for products pages, lookbook, blog posts and other pages.",
                images: [],
              },
          installationWizard: installationWizardRes
            ? await installationWizardRes.json()
            : {
                sectionId: "installationWizard",
                smallTitle: "easy & one-click install",
                mainTitle:
                  "Install demos in just a single click with Installation Wizard",
                description:
                  "Installation Wizard will walk you through theme and demo content installation, just click “install”.",
                image: {
                  src: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/landing-28.webp",
                  alt: "Installation Wizard screenshot",
                },
              },
          templateBuilder: templateBuilderRes
            ? await templateBuilderRes.json()
            : {
                title: "Template Builder",
                description:
                  "Ready variety of layouts for products pages, lookbook, blog posts and other pages.",
                posts: [],
              },
          headerVariations: headerVariationsRes
            ? await headerVariationsRes.json()
            : {
                sectionId: "headerVariations",
                backgroundColor: "bg-stone-500",
                smallTitle: "HEADER CUSTOMIZATION",
                mainTitle: "Unlimited Header Variations",
                description:
                  "The vast array of Header options makes this cutting-edge responsive WordPress theme perfect for websites of all kinds.",
                images: [
                  {
                    src: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/header-variation-1.webp",
                    alt: "Header variation 1",
                  },
                  {
                    src: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/header-variation-2.webp",
                    alt: "Header variation 2",
                  },
                  {
                    src: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/header-variation-3.webp",
                    alt: "Header variation 3",
                  },
                ],
                footerNote: "and probably any other layout you can imagine...",
              },
          // mobileFirstSection: mobileFirstSectionRes
          //   ? await mobileFirstSectionRes.json()
          //   : {
          //       title: "Mobile First",
          //       description:
          //         "Ready variety of layouts for products pages, lookbook, blog posts and other pages.",
          //       posts: [],
          //     },
          customizationFeaturesSection: customizationFeaturesSectionRes
            ? await customizationFeaturesSectionRes.json()
            : {
                sectionTitle: "Customize everything",
                sectionSubtitle: "WHEN EDITING AN ELEMENT",
                description:
                  "Rich editing and customization options let set your imagination free - edit or create new... anything!",
                features: [
                  {
                    name: "Family",
                    value: "Default",
                  },
                  {
                    name: "Size",
                    value: "16",
                  },
                  {
                    name: "Style",
                    value: "Normal",
                  },
                ],
              },
          colorPalettes: colorPalettesRes
            ? await colorPalettesRes.json()
            : {
                title: "Color Palettes",
                image1: "",
                image2: "",
              },
        };

        setContent(defaultContent);

        // Don't save to localStorage so we always fetch fresh data on reload
      } catch (error) {
        console.error("Error loading content:", error);
        // Fallback to minimal content
        setContent({
          hero: {
            title:
              "Create your Aesthetic Medical Clinic website with Bella Beauty",
            subtitle: "Elementor Based Beauty Clinic WordPress Theme",
            buttonText: "Purchase Now",
            buttonLink: "https://1.envato.market/cmsmasters-bella-beauty",
          },
          settings: {
            siteName: "Bella Beauty",
            siteDescription: "Elementor Based Beauty Clinic WordPress Theme",
          },
        });
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  // Auto-commit changes to Git after file save
  const autoCommitToGit = async (section: string) => {
    try {
      const response = await fetch("/api/git/commit-and-push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commitMessage: `Auto-update ${section} content - ${new Date().toLocaleString()}`,
          branch: "main",
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log(
          "✅ Changes automatically committed to Git:",
          result.message
        );
      } else {
        console.log("ℹ️ Auto-commit skipped:", result.message);
      }
    } catch (error) {
      console.error("⚠️ Auto-commit failed:", error);
      // Don't throw - let the save succeed even if commit fails
    }
  };

  const updateContent = async (section: string, data: any) => {
    // Update local state immediately for UI responsiveness
    setContent((prev) => {
      const updated = { ...prev, [section]: data };
      localStorage.setItem("tinaContent", JSON.stringify(updated));
      return updated;
    });

    // Try different save methods based on environment
    try {
      // First try local file save (development)
      const localResponse = await fetch("/api/content/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          section,
          data,
        }),
      });

      if (localResponse.ok) {
        console.log("✅ Content saved to file successfully");

        // Automatically commit changes to Git (development)
        // await autoCommitToGit(section);

        return; // Local save successful
      }

      // If local save fails, try GitHub API (production)
      const githubResponse = await fetch("/api/github/save-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          section,
          data,
          commitMessage: `Update ${section} content via admin panel - ${new Date().toLocaleString()}`,
        }),
      });

      const result = await githubResponse.json();
      if (!result.success) {
        console.error("❌ Failed to save content:", result.error);
      } else {
        console.log(
          "✅ Content saved to GitHub successfully - auto-deploy triggered"
        );
      }
    } catch (error) {
      console.error("❌ Error saving content:", error);
    }
  };

  return (
    <TinaContext.Provider value={{ content, updateContent, isLoading }}>
      {children}
    </TinaContext.Provider>
  );
};

export const useTina = () => {
  const context = useContext(TinaContext);
  if (context === undefined) {
    throw new Error("useTina must be used within a TinaProvider");
  }
  return context;
};
