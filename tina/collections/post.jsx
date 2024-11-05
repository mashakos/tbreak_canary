
/**
 * @type {import('tinacms').Collection}
 */

import Typesense from 'typesense';

export default {
  name: "post",
  label: "Posts",
  path: "app/routes",
  format: 'mdx',
  ui: {
    // Example of beforeSubmit
    beforeSubmit: async ({
                           values,
                         }) => {
      console.log("before submit triggered");
      //typesense test

      let typesenseClient = new Typesense.Client({
        'nodes': [{
          'host': process.env.TYPESENSE_HOST, // For Typesense Cloud use xxx.a1.typesense.net
          'port': process.env.TYPESENSE_PORT,      // For Typesense Cloud use 443
          'protocol': process.env.PUBLIC_TYPESENSE_PROTOCOL  // For Typesense Cloud use https
        }],
        'apiKey': process.env.TYPESENSE_API_KEY,
        'connectionTimeoutSeconds': 2
      });

      {
        let document = {
          'title': values.title,
          'abstract': values.abstract,
          'banner': values.banner,
          'date': values.date,
          'body': values.body,
          'slug': values.slug,
        };
        typesenseClient.collections('post').documents().upsert(
          document,
          {
            "filter_by": `slug:=${values.slug}`
          }
        ).then(function (data) {
            console.log(data);
          });
      }


      return {
        ...values,
        lastUpdated: new Date().toISOString()
      };
    },
    router: ({ document }) => {
      // must remove file extension and prepeneded article.
      return `/articles/${document._sys.basename.replace('articles.', '').replace('.mdx', '')}`;
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `articles.${values?.title
          ?.toLowerCase()
          .replace(/[|&;$%@"<>()+,:]/g, "")
          .replace(/ /g, '-')}`;
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "abstract",
      label: "Abstract",
      required: true,
      ui: {
        component: "textarea"
      },
    },
    {
      type: "image",
      name: "banner",
      label: "Banner",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
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
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};