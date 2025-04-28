
/**
 * @type {import('tinacms').Collection}
 */

export default {
  name: "category",
  label: "Categories",
  path: "app/routes/categories",
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      // must remove file extension and prepeneded article.
      return `/categories/${document._sys.basename.replace('.mdx', '')}`;
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
      name: "image",
      label: "Image",
      required: true,
    },
  ],
};