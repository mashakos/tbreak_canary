
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
                           form,
                           context,
                           values,
                         }) => {
      const replacer = (key, value) => {
        if (key === "type" || key === "id") return undefined;
        return value;
      };
      console.log(`before submit triggered. date is ${values.date}`);
      var bodydata = "";
      var postSlug = form.id.replace('app/routes/articles.', '/articles/').replace(/\.mdx$/, '');
      var postId = 0;
      Object.entries(values.body.children).forEach(([k, v]) => {
        // do something with key and val
        //for(var i = 0; i < values.body[k].length; i++)

          Object.entries(v).forEach(([k, v]) => {
            if(k === "children")
              if(v[0].text !== undefined)
              {
                bodydata = bodydata + v[0].text + '\n';
              }
          });
        //console.log(JSON.stringify(k, null, 2) + ' - ' + JSON.stringify(v[0]["children"].text, null, 2));
      });
      console.log(bodydata);

      // Object.keys(values.body).forEach(function([k, v]){
      //   for(var i = 0; i < values.body[k].length; i++)
      //   console.log(k + ' - ' + v);
      // });
      //console.log(JSON.stringify(values.body[k]));
      //typesense test

/*
* local vars test
*           'nodes': [{
            'host': 'search.delosian.pro', // For Typesense Cloud use xxx.a1.typesense.net
            'port': '443',      // For Typesense Cloud use 443
            'protocol': 'https'  // For Typesense Cloud use https
          }],
          'apiKey': 'xyz',
          'connectionTimeoutSeconds': 2,

* */
      try{
        let typesenseClient = new Typesense.Client({
          'nodes': [{
            'host': 'search.delosian.pro', // For Typesense Cloud use xxx.a1.typesense.net
            'port': '443',      // For Typesense Cloud use 443
            'protocol': 'https'  // For Typesense Cloud use https
          }],
          'apiKey': 'xyz',
          'connectionTimeoutSeconds': 2,
          // logLevel: "debug",
        });

        {
          let searchParameters = {
            'q'         : '*',
            "filter_by": `slug:=${postSlug}`,
          };
          await typesenseClient.collections('post').documents().search(searchParameters).then(function (data) {
            // console.log("search data - " + JSON.stringify(data, null, 2));
            console.log("search data - " + JSON.stringify(data, null, 2));
            if(data.found !== 0)
            {
              postId = data.hits[0].document.id;
              console.log(postId);
            }
          });

          if(postId !== 0)
          {
            let postDocument = {
              'id': postId,
              'title': values.title,
              'abstract': values.abstract,
              'banner': values.banner,
              'date': new Date(values.date).getTime(),
              'body': bodydata,
              'slug': postSlug,
            };
            await typesenseClient.collections('post').documents().upsert(
              postDocument,
              {"filter_by": `slug:=${postSlug}`}
            ).then(function (data) {
              console.log(data);
            });
          }
          else
          {
            let postDocument = {
              'title': values.title,
              'abstract': values.abstract,
              'banner': values.banner,
              'date': new Date(values.date).getTime(),
              'body': bodydata,
              'slug': postSlug,
            };
            await typesenseClient.collections('post').documents().create(
              postDocument
            ).then(function (data) {
              console.log(data);
            });
          }
        }

      }
      catch (err) {
        console.error(err);
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