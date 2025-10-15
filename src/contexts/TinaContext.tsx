import React, { createContext, useContext, useState, useEffect } from "react";

interface ContentData {
  hero?: any;
  settings?: any;
  demos?: any[];
  features?: any[];
  plugins?: any[];
}

interface TinaContextType {
  content: ContentData;
  updateContent: (section: string, data: any) => void;
  isLoading: boolean;
}

const TinaContext = createContext<TinaContextType | undefined>(undefined);

export const TinaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState<ContentData>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load content from localStorage or default values
    const loadContent = () => {
      try {
        const savedContent = localStorage.getItem("tinaContent");
        if (savedContent) {
          setContent(JSON.parse(savedContent));
        } else {
          // Set default content
          const defaultContent = {
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
              logo: "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/logo.svg",
              purchaseLink: "https://1.envato.market/cmsmasters-bella-beauty",
            },
          };
          setContent(defaultContent);
          localStorage.setItem("tinaContent", JSON.stringify(defaultContent));
        }
      } catch (error) {
        console.error("Error loading content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  const updateContent = (section: string, data: any) => {
    setContent((prev) => {
      const updated = { ...prev, [section]: data };
      localStorage.setItem("tinaContent", JSON.stringify(updated));
      return updated;
    });
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
