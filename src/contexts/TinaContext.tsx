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
  mobileFirstSection?: any;
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
        const savedContent = localStorage.getItem("tinaContent");
        if (savedContent) {
          setContent(JSON.parse(savedContent));
        } else {
          // Load default content from JSON files
          const [heroRes, settingsRes, trustBadgesRes, keyFeaturesRes, ctaSectionRes, pluginsSectionRes] = await Promise.all([
            fetch('/content/hero/index.json').catch(() => null),
            fetch('/content/settings/index.json').catch(() => null),
            fetch('/content/trust-badges/index.json').catch(() => null),
            fetch('/content/key-features/index.json').catch(() => null),
            fetch('/content/cta-section/index.json').catch(() => null),
            fetch('/content/plugins-section/index.json').catch(() => null),
          ]);

          const defaultContent: ContentData = {
            hero: heroRes ? await heroRes.json() : {
              title: "Create your Aesthetic Medical Clinic website with Bella Beauty",
              subtitle: "Elementor Based Beauty Clinic WordPress Theme",
              buttonText: "Purchase Now",
              buttonLink: "https://1.envato.market/cmsmasters-bella-beauty",
              secondaryText: "Take your website to the next level.",
              secondaryButtonText: "View Demos",
              secondaryButtonLink: "#demos",
              backgroundImage: "https://bella-beauty.cmsmasters.studio/wp-content/uploads/2024/03/landing-1.webp"
            },
            settings: settingsRes ? await settingsRes.json() : {
              siteName: "Bella Beauty",
              siteDescription: "Elementor Based Beauty Clinic WordPress Theme",
              logo: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/logo.svg",
              purchaseLink: "https://1.envato.market/cmsmasters-bella-beauty",
            },
            trustBadges: trustBadgesRes ? await trustBadgesRes.json() : { badges: [] },
            keyFeatures: keyFeaturesRes ? await keyFeaturesRes.json() : { sectionTitle: "Key Features", features: [] },
            ctaSection: ctaSectionRes ? await ctaSectionRes.json() : {
              title: "Ready to Transform Your Beauty Clinic?",
              subtitle: "Get started today with Bella Beauty theme",
              buttonText: "Purchase Now",
              buttonLink: "https://1.envato.market/cmsmasters-bella-beauty"
            },
            pluginsSection: pluginsSectionRes ? await pluginsSectionRes.json() : { sectionTitle: "Included Plugins", plugins: [] },
          };
          
          setContent(defaultContent);
          localStorage.setItem("tinaContent", JSON.stringify(defaultContent));
        }
      } catch (error) {
        console.error("Error loading content:", error);
        // Fallback to minimal content
        setContent({
          hero: {
            title: "Create your Aesthetic Medical Clinic website with Bella Beauty",
            subtitle: "Elementor Based Beauty Clinic WordPress Theme",
            buttonText: "Purchase Now",
            buttonLink: "https://1.envato.market/cmsmasters-bella-beauty",
          },
          settings: {
            siteName: "Bella Beauty",
            siteDescription: "Elementor Based Beauty Clinic WordPress Theme",
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

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
      const localResponse = await fetch('/api/content/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section,
          data,
        }),
      });

      if (localResponse.ok) {
        return; // Local save successful
      }

      // If local save fails, try GitHub API (production)
      const githubResponse = await fetch('/api/github/save-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section,
          data,
          commitMessage: `Update ${section} content via admin panel`,
        }),
      });

      const result = await githubResponse.json();
      if (!result.success) {
        console.error('Failed to save content:', result.error);
      }
    } catch (error) {
      console.error('Error saving content:', error);
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
