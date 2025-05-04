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
            {
              name: "recentArticleOne",
              label: "Recent Article 1",
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
            {
              name: "recentArticleTwo",
              label: "Recent Article 2",
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
            {
              name: "recentArticleThree",
              label: "Recent Article 3",
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
            {
              name: "recentArticleFour",
              label: "Recent Article 4",
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
            {
              name: "recentArticleFive",
              label: "Recent Article 5",
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
            {
              name: "recentArticleSix",
              label: "Recent Article 6",
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
        }
      ],
    },
  ],
};