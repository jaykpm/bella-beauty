import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Main Title",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "buttonText",
            label: "Primary Button Text",
          },
          {
            type: "string",
            name: "buttonLink",
            label: "Primary Button Link",
          },
          {
            type: "string",
            name: "secondaryText",
            label: "Secondary Text",
          },
          {
            type: "string",
            name: "secondaryButtonText",
            label: "Secondary Button Text",
          },
          {
            type: "string",
            name: "secondaryButtonLink",
            label: "Secondary Button Link",
          },
          {
            type: "image",
            name: "backgroundImage",
            label: "Background Image",
          },
        ],
      },
      {
        name: "trustBadges",
        label: "Trust Badges",
        path: "content/trust-badges",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "badges",
            label: "Trust Badges",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "Badge Image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
              },
            ],
          },
        ],
      },
      {
        name: "demos",
        label: "Demo Showcases",
        path: "content/demos",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "href",
            label: "Link URL",
            required: true,
          },
          {
            type: "image",
            name: "imageUrl",
            label: "Screenshot",
          },
          {
            type: "image",
            name: "qrCodeUrl",
            label: "QR Code",
          },
        ],
      },
      {
        name: "keyFeatures",
        label: "Key Features Section",
        path: "content/key-features",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
            required: true,
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Feature Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Name",
              },
              {
                type: "image",
                name: "image",
                label: "Feature Image",
              },
            ],
          },
        ],
      },
      {
        name: "ctaSection",
        label: "Call to Action Section",
        path: "content/cta-section",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "CTA Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "CTA Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text",
          },
          {
            type: "string",
            name: "buttonLink",
            label: "Button Link",
          },
          {
            type: "image",
            name: "backgroundImage",
            label: "Background Image",
          },
        ],
      },
      {
        name: "pluginsSection",
        label: "Plugins Section",
        path: "content/plugins-section",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
            required: true,
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "plugins",
            label: "Plugins",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Plugin Name",
                required: true,
              },
              {
                type: "image",
                name: "imageUrl",
                label: "Plugin Logo",
              },
              {
                type: "boolean",
                name: "showBadge",
                label: "Show Badge",
              },
              {
                type: "string",
                name: "badgeText",
                label: "Badge Text",
              },
              {
                type: "string",
                name: "badgeVariant",
                label: "Badge Style",
                options: ["bg-stone-500", "bg-rose-100"],
              },
            ],
          },
        ],
      },
      {
        name: "demoShowcase",
        label: "Demo Showcase",
        path: "content/demo-showcase",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "demos",
            label: "Demo Pages",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Demo Title",
                required: true,
              },
              {
                type: "string",
                name: "href",
                label: "Demo URL",
                required: true,
              },
              {
                type: "image",
                name: "imageUrl",
                label: "Demo Screenshot",
              },
              {
                type: "image",
                name: "qrCodeUrl",
                label: "QR Code",
              },
            ],
          },
        ],
      },
      {
        name: "crossCompatibility",
        label: "Cross Compatibility",
        path: "content/cross-compatibility",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "compatibilityItems",
            label: "Compatibility Items",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Item Title",
              },
              {
                type: "image",
                name: "icon",
                label: "Icon",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
            ],
          },
        ],
      },
      {
        name: "refundPolicy",
        label: "Refund Policy",
        path: "content/refund-policy",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "guaranteeText",
            label: "Guarantee Text",
          },
          {
            type: "string",
            name: "policyDetails",
            label: "Policy Details",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "colorPalettes",
        label: "Color Palettes",
        path: "content/color-palettes",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "palettes",
            label: "Color Palettes",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Palette Name",
              },
              {
                type: "object",
                name: "colors",
                label: "Colors",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "hex",
                    label: "Hex Color",
                  },
                  {
                    type: "string",
                    name: "name",
                    label: "Color Name",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "performanceSection",
        label: "Performance Section",
        path: "content/performance",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "metrics",
            label: "Performance Metrics",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Metric Label",
              },
              {
                type: "string",
                name: "value",
                label: "Metric Value",
              },
              {
                type: "string",
                name: "unit",
                label: "Unit",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
            ],
          },
        ],
      },
      {
        name: "blocksGallery",
        label: "Blocks Gallery",
        path: "content/blocks-gallery",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "blocks",
            label: "Content Blocks",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Block Title",
              },
              {
                type: "string",
                name: "category",
                label: "Block Category",
              },
              {
                type: "image",
                name: "image",
                label: "Block Image",
              },
            ],
          },
        ],
      },
      {
        name: "beforeAfterSection",
        label: "Before/After Section",
        path: "content/before-after",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "comparisons",
            label: "Before/After Comparisons",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Comparison Title",
              },
              {
                type: "image",
                name: "beforeImage",
                label: "Before Image",
              },
              {
                type: "image",
                name: "afterImage",
                label: "After Image",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
            ],
          },
        ],
      },
      {
        name: "customizationSection",
        label: "Customization Section",
        path: "content/customization",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "customizationOptions",
            label: "Customization Options",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Option Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "icon",
                label: "Icon",
              },
            ],
          },
        ],
      },
      {
        name: "postTypesSection",
        label: "Post Types Section",
        path: "content/post-types",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "postTypes",
            label: "Post Types",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Post Type Name",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "icon",
                label: "Icon",
              },
            ],
          },
        ],
      },
      {
        name: "detailsSection",
        label: "Details Section",
        path: "content/details-section",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "details",
            label: "Detail Items",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Detail Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Detail Image",
              },
            ],
          },
        ],
      },
      {
        name: "technicalSection",
        label: "Technical Section",
        path: "content/technical-section",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "technicalSpecs",
            label: "Technical Specifications",
            list: true,
            fields: [
              {
                type: "string",
                name: "feature",
                label: "Feature",
              },
              {
                type: "string",
                name: "specification",
                label: "Specification",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
            ],
          },
        ],
      },
      {
        name: "elementorExtension",
        label: "Elementor Extension",
        path: "content/elementor",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "extensions",
            label: "Elementor Extensions",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Extension Name",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "icon",
                label: "Icon",
              },
            ],
          },
        ],
      },
      {
        name: "layoutsGallery",
        label: "Layouts Gallery",
        path: "content/layouts-gallery",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "layouts",
            label: "Layout Options",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Layout Name",
              },
              {
                type: "string",
                name: "category",
                label: "Category",
              },
              {
                type: "image",
                name: "preview",
                label: "Preview Image",
              },
            ],
          },
        ],
      },
      {
        name: "installationWizard",
        label: "Installation Wizard",
        path: "content/installation-wizard",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "steps",
            label: "Installation Steps",
            list: true,
            fields: [
              {
                type: "string",
                name: "stepNumber",
                label: "Step Number",
              },
              {
                type: "string",
                name: "title",
                label: "Step Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "icon",
                label: "Step Icon",
              },
            ],
          },
        ],
      },
      {
        name: "templateBuilder",
        label: "Template Builder",
        path: "content/template-builder",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "templates",
            label: "Template Options",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Template Name",
              },
              {
                type: "string",
                name: "type",
                label: "Template Type",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "preview",
                label: "Preview Image",
              },
            ],
          },
        ],
      },
      {
        name: "headerVariations",
        label: "Header Variations",
        path: "content/header-variations",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "string",
            name: "sectionSubtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "variations",
            label: "Header Variations",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Variation Name",
              },
              {
                type: "string",
                name: "style",
                label: "Style Type",
              },
              {
                type: "image",
                name: "preview",
                label: "Preview Image",
              },
            ],
          },
        ],
      },
      // {
      //   name: "mobileFirstSection",
      //   label: "Mobile First Section",
      //   path: "content/mobile-first-section",
      //   format: "json",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   fields: [
      //     {
      //       type: "string",
      //       name: "sectionTitle",
      //       label: "Section Title",
      //     },
      //     {
      //       type: "string",
      //       name: "sectionSubtitle",
      //       label: "Section Subtitle",
      //     },
      //     {
      //       type: "object",
      //       name: "features",
      //       label: "Mobile Features",
      //       list: true,
      //       fields: [
      //         {
      //           type: "string",
      //           name: "title",
      //           label: "Feature Title",
      //         },
      //         {
      //           type: "string",
      //           name: "description",
      //           label: "Description",
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "string",
            name: "purchaseLink",
            label: "Purchase Link",
          },
        ],
      },
    ],
  },
});
