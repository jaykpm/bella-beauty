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
            label: "Title",
            required: true,
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
            label: "Button Text",
          },
          {
            type: "string",
            name: "buttonLink",
            label: "Button Link",
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
        name: "features",
        label: "Key Features",
        path: "content/features",
        format: "json",
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
        ],
      },
      {
        name: "plugins",
        label: "Plugins",
        path: "content/plugins",
        format: "json",
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
