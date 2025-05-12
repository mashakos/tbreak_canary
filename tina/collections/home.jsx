/**
 * @type {import('tinacms').Collection}
 */
import React from 'react';


export default {
  name: "home",
  label: "Homepage",
  path: "app/routes/homepage",
  format: 'mdx',
  match: {
    include: 'home'
  },
  ui: {
    router: (props) => {
      return "/";
    },
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
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      name: "blocks",
      label: "Blocks",
      list: true,
      templates: [
        {
          name: "heroStories",
          label: "Hero Stories",
          fields: [
            {
              name: "featuredArticle",
              label: "Featured Article",
              type: "reference",
              collections: ['post'],
              required: true,
              ui: {
                optionComponent: (props, _internalSys) => {
                  return (
                    <div>
                      <b>{props.title}</b>
                    </div>
                  );
                }
              },
            },
          ],
        },
        {
          name: "heroStory",
          label: "Hero Story",
          fields: [
            {
              name: "heroStoryArticle",
              label: "Hero Story Article",
              type: "reference",
              collections: ['post'],
              required: true,
              ui: {
                optionComponent: (props, _internalSys) => {
                  return (
                    <div>
                      <b>{props.title}</b>
                    </div>
                  );
                }
              },
            },
          ]
        },
      ],
    },
  ],
};