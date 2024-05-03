import { baseMeta } from '~/utils/meta';
import { getProjects } from './projs.server.js';
import { json } from '@remix-run/cloudflare';

export async function loader() {



  const posts = await getProjects();


  return json({
    posts,
  });
}

export function meta() {
  return baseMeta({
    title: 'Projects',
    description:
      'Projects',
  });
}

export { Projs as default } from './projs.jsx';
