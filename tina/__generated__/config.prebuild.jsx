// tina/config.js
import { defineConfig } from "tinacms";

// tina/collections/post.jsx
import Typesense from "typesense";
var post_default = {
  name: "post",
  label: "Posts",
  path: "app/routes",
  format: "mdx",
  ui: {
    // Example of beforeSubmit
    beforeSubmit: async ({
      form,
      values
    }) => {
      console.log(`before submit triggered. date is ${values.date}`);
      var bodydata = "";
      var postSlug = form.id.replace("app/routes/articles.", "/articles/").replace(/\.mdx$/, "");
      var postId = 0;
      Object.entries(values.body.children).forEach(([k, v]) => {
        Object.entries(v).forEach(([k2, v2]) => {
          if (k2 === "children") {
            if (v2[0].text !== void 0) {
              bodydata = bodydata + v2[0].text + "\n";
            }
          }
        });
      });
      console.log(bodydata);
      try {
        let typesenseClient = new Typesense.Client({
          "nodes": [{
            "host": "search.delosian.pro",
            // For Typesense Cloud use xxx.a1.typesense.net
            "port": 443,
            // For Typesense Cloud use 443
            "protocol": "https"
            // For Typesense Cloud use https
          }],
          "apiKey": "xyz",
          "connectionTimeoutSeconds": 2
          // logLevel: "debug",
        });
        {
          let searchParameters = {
            "q": "*",
            "filter_by": `slug:=${postSlug}`
          };
          await typesenseClient.collections("post").documents().search(searchParameters).then(function(data) {
            if (data.found !== 0) {
              postId = data.hits[0].document.id;
              console.log(postId);
            }
          });
          if (postId !== 0) {
            let postDocument = {
              "id": postId,
              "title": values.title,
              "abstract": values.abstract,
              "banner": values.banner,
              "date": new Date(values.date).getTime(),
              "body": bodydata,
              "slug": postSlug
            };
            await typesenseClient.collections("post").documents().upsert(
              postDocument,
              { "filter_by": `slug:=${postSlug}` }
            ).then(function(data) {
              console.log(data);
            });
          } else {
            let postDocument = {
              "title": values.title,
              "abstract": values.abstract,
              "banner": values.banner,
              "date": new Date(values.date).getTime(),
              "body": bodydata,
              "slug": postSlug
            };
            await typesenseClient.collections("post").documents().create(
              postDocument
            ).then(function(data) {
              console.log(data);
            });
          }
        }
      } catch (err) {
        console.error(err);
      }
      return {
        ...values,
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      };
    },
    router: ({ document }) => {
      return `/articles/${document._sys.basename.replace("articles.", "").replace(".mdx", "")}`;
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        return `articles.${values?.title?.toLowerCase().replace(/[|&;$%@"<>()+,:]/g, "").replace(/ /g, "-")}`;
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
      isBody: true,
      templates: [
        {
          name: "YoutubeEmbed",
          label: "Embed Youtube",
          fields: [
            {
              name: "url",
              label: "Link URL",
              type: "string"
            }
          ]
        }
      ]
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
