
/**
 * @type {import('tinacms').Collection}
 */

export default {
  name: "author",
  label: "Authors",
  path: "app/routes/authors",
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      // must remove file extension and prepeneded article.
      return `/authors/${document._sys.basename.replace('.mdx', '')}`;
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `${values?.name
          ?.toLowerCase()
          .replace(/([^a-z0-9 -])/g, "")
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .replace(/ /g, '-')}`;
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "avatar",
      label: "Avatar",
      required: true,
    },
    {
      type: "string",
      name: "email",
      label: "Email",
      required: true,
    },
    {
      type: "string",
      name: "role",
      label: "Role",
      required: true,
      options: [
        {
          value: 'eic',
          label: 'Editor in Chief',
        },
        {
          value: 'staff_writer',
          label: 'Staff Writer',
        },
      ],
    },
    {
      type: "string",
      name: "about",
      label: "About",
      required: true,
      ui: {
        component: "textarea"
      },
    },
    {
      type: "string",
      name: "social_links_fb",
      label: "Facebook",
    },
    {
      type: "string",
      name: "social_links_instagram",
      label: "Instagram",
    },
    {
      type: "string",
      name: "social_links_twitter",
      label: "Twitter",
    },
    {
      type: "string",
      name: "social_links_linkedin",
      label: "Linkedin",
    },
  ],
};