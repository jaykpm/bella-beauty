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

  // Auto-commit changes to Git after file save
  const autoCommitToGit = async (section: string) => {
    try {
      const response = await fetch('/api/git/commit-and-push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commitMessage: `Auto-update ${section} content - ${new Date().toLocaleString()}`,
          branch: 'main',
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log('✅ Changes automatically committed to Git:', result.message);
      } else {
        console.log('ℹ️ Auto-commit skipped:', result.message);
      }
    } catch (error) {
      console.error('⚠️ Auto-commit failed:', error);
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

    // Try to save to local file (development only)
    try {
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
        console.log('✅ Content saved to file successfully');
        // Note: Git commit happens separately via Deploy button
        return; // Local save successful
      }

      // If local save API doesn't exist (production), just save to localStorage
      console.log('💾 Content saved to localStorage (production mode)');
      console.log('ℹ️ Use Deploy button to push changes to production');
    } catch (error) {
      // In production, file save API won't exist - that's expected
      console.log('💾 Content saved to localStorage');
      console.log('ℹ️ Use Deploy button to commit and push to Git');
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
