import React, { createContext, useContext, useState, useEffect } from "react";

interface ContentData {
  hero?: any;
  settings?: any;
  demos?: any[];
  features?: any[];
  plugins?: any[];
  showcases?: any[];
  testimonials?: any[];
  footer?: any;
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
              title: "Create your Aesthetic Medical Clinic website with Bella Beauty",
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
            demos: [
              {
                id: "1",
                title: "Main Demo",
                href: "https://bella-beauty.cmsmasters.studio/",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/image-1@2x.png",
                qrCodeUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/qr-code-1.svg",
              },
              {
                id: "2",
                title: "Dermatology",
                href: "https://bella-beauty.cmsmasters.studio/dermatology/",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/image-2@2x.png",
                qrCodeUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/qr-code-2.svg",
              },
              {
                id: "3",
                title: "Plastic Surgery",
                href: "https://bella-beauty.cmsmasters.studio/plastic-surgery/",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/image-3@2x.png",
                qrCodeUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/qr-code-3.svg",
              },
              {
                id: "4",
                title: "Cosmetology",
                href: "https://bella-beauty.cmsmasters.studio/cosmetology/",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/image-4@2x.png",
                qrCodeUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/qr-code-4.svg",
              },
            ],
            features: [
              {
                id: "1",
                title: "Elementor Page Builder",
                description: "Bella Beauty is fully compatible with Elementor, the leading WordPress website builder.",
                icon: "Layers",
              },
              {
                id: "2",
                title: "One Click Demo Import",
                description: "You can import the demo content with just one click and start customizing your website.",
                icon: "Download",
              },
              {
                id: "3",
                title: "Header & Footer Builder",
                description: "Create unique headers and footers with Elementor Header & Footer Builder.",
                icon: "Layout",
              },
              {
                id: "4",
                title: "WooCommerce Ready",
                description: "Bella Beauty is fully compatible with WooCommerce, the most popular eCommerce plugin.",
                icon: "ShoppingCart",
              },
              {
                id: "5",
                title: "Responsive Design",
                description: "Bella Beauty is fully responsive and looks great on all devices.",
                icon: "Smartphone",
              },
              {
                id: "6",
                title: "SEO Optimized",
                description: "Bella Beauty is optimized for search engines and follows the best SEO practices.",
                icon: "Search",
              },
            ],
            plugins: [
              {
                id: "1",
                name: "Elementor",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/elementor-1.svg",
                showBadge: false,
              },
              {
                id: "2",
                name: "WooCommerce",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/woocommerce-1.svg",
                showBadge: false,
              },
              {
                id: "3",
                name: "Contact Form 7",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/contact-form-7-1.svg",
                showBadge: false,
              },
              {
                id: "4",
                name: "Slider Revolution",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/slider-revolution-1.svg",
                showBadge: true,
                badgeText: "Premium",
                badgeVariant: "bg-stone-500",
              },
              {
                id: "5",
                name: "ThemeREX Addons",
                imageUrl: "https://c.animaapp.com/mgrzhz36mRAJyZ/img/themerex-addons-1.svg",
                showBadge: true,
                badgeText: "Included",
                badgeVariant: "bg-rose-100",
              },
            ],
            showcases: [
              {
                id: "1",
                title: "Homepage Variations",
                count: "4+",
                description: "Pre-built homepage designs",
              },
              {
                id: "2",
                title: "Inner Pages",
                count: "20+",
                description: "Ready-to-use page templates",
              },
              {
                id: "3",
                title: "Custom Widgets",
                count: "30+",
                description: "Elementor custom widgets",
              },
            ],
            footer: {
              copyrightText: "© 2024 Bella Beauty. All rights reserved.",
              links: [
                { text: "Privacy Policy", href: "#" },
                { text: "Terms of Service", href: "#" },
                { text: "Support", href: "#" },
              ],
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
