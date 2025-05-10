import { defineConfig } from "tinacms";
import Home from "./collections/home.jsx";
import Page from "./collections/page.jsx";
import Category from "./collections/category.jsx";
import Author from "./collections/author.jsx";
import Tag from "./collections/tag.jsx";
import Post from "./collections/post.jsx";


// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.TINA_GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

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
      mediaRoot: "static",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [Home, Page, Category, Author, Tag, Post],
  },
  search: {
    tina: {
      indexerToken: '115bbce839ad15cd20da77b140f47bd456528b63',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
