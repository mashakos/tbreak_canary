// tina/config.js
import { defineConfig } from "tinacms";

// tina/collections/post.js
var post_default = {
  name: "post",
  label: "Posts",
  path: "app/routes",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/articles/${document._sys.basename.replace("articles.", "").replace(".mdx", "")}`;
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        return `articles.${values?.title?.toLowerCase().replace(/ /g, "-")}`;
      }
    }
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "abstract",
      label: "Abstract",
      required: true,
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "banner",
      label: "Banner"
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ]
};

// tina/collections/featured.js
var featured_default = {
  name: "featured",
  label: "Featured Posts",
  path: "app/routes/featured",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    },
    global: true
    // itemProps: (item) => {
    //   return { label: item.collections.label}
    // },
  },
  fields: [
    {
      type: "reference",
      name: "post",
      label: "Featured Post",
      collections: ["post"],
      required: true
    }
  ]
};

// tina/config.js
var branch = process.env.TINA_GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "master";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "static",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [post_default, featured_default]
  }
});
export {
  config_default as default
};
