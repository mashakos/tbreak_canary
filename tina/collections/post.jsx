
/**
 * @type {import('tinacms').Collection}
 */

import React from 'react';


export default {
  name: "post",
  label: "Posts",
  path: "app/routes",
  match: {
    include: 'articles.*',
  },
  format: 'mdx',
  ui: {
    /*
    * reading time
    * */
    beforeSubmit: async ({
                           values,
                         }) => {

      let bodydata = "";
      /*
      *
      *  body object parser
      *  parses body object, extracts text from HTML elements
      *  supported elements:
      *  H1,H2,H3,P,BLOCKQUOTE,UL,LI
      *
      */
      Object.entries(values.body.children).forEach(([k, v]) => {
        Object.entries(v).forEach(([k, v]) => {
          if(k === "children")
          {
            // Check for unordered list
            if(v[0].type === "li")
            {
              Object.entries(v).forEach(([k, v]) => {
                Object.entries(v.children).forEach(([k, v]) => {
                  // if list item has sublist, loop through it
                  if(v.type === "ul" || v.type === "ol")
                  {
                    Object.entries(v.children).forEach(([k, v]) => {
                      bodydata = bodydata + '  - ' + v.children[0].children[0].text+ '\n';
                    });
                  }
                  else
                    bodydata = bodydata + ' * ' + v.children[0].text+ '\n';
                });
              });
            }
            else
              // Regular text
            if(v[0].text !== undefined)
            {
              bodydata = bodydata + v[0].text + '\n';
            }
          }
        });
      });

      const wpm = 225;
      const words = bodydata.trim().split(/\s+/).length;
      const time = words / wpm;
      const rawtime = time * 1000 * 60;
      const hours = rawtime / 1000 / 60 / 60;
      const h = Math.floor(hours);
      const minutes = Math.floor((hours - h) * 60);

      values.time_to_read_raw = rawtime;
      values.time_to_read_in_minutes = minutes;
      console.log(rawtime);
      console.log(minutes);
      console.log(values.time_to_read_in_minutes);

      return {
        ...values
      };
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
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "reference",
      name: "author",
      label: "Author",
      collections: ['author'],
      required: true,
      ui: {
        optionComponent: (props, _internalSys) => {
          return (
            <div>
              <b>{props.name}</b>
              {/*description={_internalSys.path}*/}
            </div>
          );
        }
      },
    },
    {
      type: "reference",
      name: "category",
      label: "Category",
      collections: ['category'],
      required: true,
      ui: {
        optionComponent: (props, _internalSys) => {
          return (
            <div>
              <b>{props.name}</b>
              {/*description={_internalSys.path}*/}
            </div>
          );
        }
      },
    },
    {
      label: "Tags",
      name: "tags",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.title };
        },
      },
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          type: "reference",
          label: "Tag",
          name: "tag",
          collections: ["tag"],
          ui: {
            optionComponent: (props, _internalSys) => {
              return (
                <div>
                  <b>{props.name}</b>
                  {/*description={_internalSys.path}*/}
                </div>
              );
            }
          },
        },
      ],
    },
    {
      label: "Reading Timecode",
      name: "time_to_read_raw",
      type: "number",
      ui: {
        component: "hidden",
      },
    },
    {
      label: "Reading Time",
      name: "time_to_read_in_minutes",
      type: "number",
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