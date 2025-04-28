
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