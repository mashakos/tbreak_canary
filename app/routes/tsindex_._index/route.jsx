import { baseMeta } from '~/utils/meta';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

import Typesense from 'typesense';


export async function action({request}) {

  let returnedData;
  const requestData = await request.formData();
  const title = requestData.get("title");
  const date = new Date(requestData.get("date")).getTime();
  const banner = requestData.get("banner");
  const abstract = requestData.get("abstract");
  const bodydata = requestData.get("body");
  const postSlug = requestData.get("slug");
  var postId = 0;

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
    let searchParameters = {
      'q'         : '*',
      "filter_by": `slug:=${postSlug}`,
    };
    await typesenseClient.collections('post').documents().search(searchParameters).then(function (data) {
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
        'title': title,
        'abstract': abstract,
        'banner': banner,
        'date': date,
        'body': bodydata,
        'slug': postSlug,
      };
      await typesenseClient.collections('post').documents().upsert(
        postDocument,
        {"filter_by": `slug:=${postSlug}`}
      ).then(function (data) {
        // console.log(data);
        returnedData = data;
      });
    }
    else
    {
      let postDocument = {
        'title': title,
        'abstract': abstract,
        'banner': banner,
        'date': date,
        'body': bodydata,
        'slug': postSlug,
      };
      await typesenseClient.collections('post').documents().create(
        postDocument
      ).then(function (data) {
        // get id after indexed post is created
        postId = data.id;
        // console.log(postId + ' - ' + JSON.stringify(data, null, 2));
        returnedData = data;
      });
    }
  }

  // return json({ text : 'Post:' + postId + ' Indexed.', data: returnedData });
  return json({ text : 'Post:' + postId + ' Indexed.' });
}