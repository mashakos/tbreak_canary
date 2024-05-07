import { baseMeta } from '~/utils/meta';
import { indexPosts, indexProjects } from './typesense.server.js';
import { json } from '@remix-run/cloudflare';
import Typesense from 'typesense';

export async function loader() {


  //typesense test

  let typesenseClient = new Typesense.Client({
    'nodes': [{
      'host': process.env.TYPESENSE_HOST, // For Typesense Cloud use xxx.a1.typesense.net
      'port': process.env.TYPESENSE_PORT,      // For Typesense Cloud use 443
      'protocol': process.env.PUBLIC_TYPESENSE_PROTOCOL  // For Typesense Cloud use https
    }],
    'apiKey': process.env.TYPESENSE_API_KEY,
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
        {'name': 'body', 'type': 'string' },
        {'name': 'roles', 'type': 'string' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(projectSchema)
      .then(function (data) {
        console.log(data);
      });
  }


  const indexedProjects = await indexProjects();
  let projectData = [];

  indexedProjects.map(function(indexedProject){
    projectData.push({
      title: indexedProject.title,
      description: indexedProject.description,
      body: indexedProject.bodytext,
      roles: indexedProject.roles,
      slug: indexedProject.slug,
    });
  });

  //console.log(JSON.stringify(projectData));

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

  return json({ text : 'Projects Indexed.' });
}

export function meta() {
  return baseMeta({
    title: 'Search Index',
    description:
      'Typesense index.',
  });
}
