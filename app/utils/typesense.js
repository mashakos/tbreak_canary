import Typesense from "typesense";
import { useRef } from 'react';
import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';

export const typesenseInstantsearchAdapter = () =>
  // @ts-expect-error: when import gives {__esModule: true, default: ƒ}, has something todo with TypesenseInstantsearchAdapter's UMD module target
  new TypesenseInstantsearchAdapter({
    server: {
      apiKey: process.env['PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY'],
      nodes: [
        {
          host: process.env['TYPESENSE-HOST'] || 'localhost',
          port: parseInt(process.env['TYPESENSE-PORT'] || '8108'),
          protocol: process.env['PUBLIC_TYPESENSE_PROTOCOL'] || 'http',
        },
      ],
    },
    collectionSpecificSearchParameters: {
      post: {
        query_by: 'title, abstract, body',
      },
      project: {
        query_by: 'title, description',
      },
    },

    //   additionalSearchParameters: {
    //   query_by: 'title, abstract, body',
    //   num_typos: 0,
    // },
  });