import { baseMeta } from '~/utils/meta';
import { indexPosts } from './typesense.server.js';
import { json } from '@remix-run/cloudflare';
import Typesense from 'typesense';

export async function loader() {


  //typesense test

  let typesenseClient = new Typesense.Client({
    'nodes': [{
      'host': process.env['TYPESENSE-HOST'], // For Typesense Cloud use xxx.a1.typesense.net
      'port': process.env['TYPESENSE-PORT'],      // For Typesense Cloud use 443
      'protocol': 'http'   // For Typesense Cloud use https
    }],
    'apiKey': process.env['TYPESENSE-API-KEY'],
    'connectionTimeoutSeconds': 2
  });


  // post schema
  try {
    await typesenseClient.collections('post').retrieve();
    console.log('Found existing collection of post');

    console.log('Deleting collection');
    await typesenseClient.collections('post').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let postSchema = {
      'name': 'post',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'abstract', 'type': 'string' },
        {'name': 'banner', 'type': 'image' },
        {'name': 'date', 'type': 'int64' },
        {'name': 'body', 'type': 'string' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(postSchema)
      .then(function (data) {
        console.log(data);
      });
  }


  const indexedPosts = await indexPosts();
  let postData = [];

  indexedPosts.map(function(indexedPost){

    const bodyStrContent = indexedPost.body;

    let unixdate = new Date(indexedPost.date).getTime();
    postData.push({
      title: indexedPost.title,
      abstract: indexedPost.abstract,
      banner: indexedPost.banner,
      date: unixdate,
      body: bodyStrContent,
      slug: indexedPost.slug,
    });

  });

  try {
    const returnData = await typesenseClient
      .collections("post")
      .documents()
      .import(postData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }

  // projects schema

  try {
    await typesenseClient.collections('project').retrieve();
    console.log('Found existing collection of project');

    console.log('Deleting collection');
    await typesenseClient.collections('project').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let projectSchema = {
      'name': 'project',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'description', 'type': 'string' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(projectSchema)
      .then(function (data) {
        console.log(data);
      });
  }

  let projectData = [
    {
      'title': 'Reebok #GymIsEverywhere Microsite',
      'description': 'How do you make fitness advocates feel more human in a digital world? Reebok looked to engage with its audience, breaking through the clutter with a meaningful brand purpose and mission.',
      'slug': '/projects/rbk-giew',
    },
    {
      'title': 'Mercedes-Benz Messenger Bot',
      'description': 'To enhance brand experience with a younger audience, Mercedes-Benz needed an innovative solution to handle custom queries and requests in real-time.',
      'slug': '/projects/merc-ai-msg',
    },
    {
      'title': 'Masdar Corporate Website',
      'description': 'Developing a fully responsive, cross-browser, mobile friendly website.',
      'slug': '/projects/masdar',
    },
  ];

  try {
    const returnData = await typesenseClient
      .collections("project")
      .documents()
      .import(projectData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }


  // end of typesense test

  return json({ text : 'Projs Indexed.' });
}

export function meta() {
  return baseMeta({
    title: 'Search Index',
    description:
      'Typesense index.',
  });
}
