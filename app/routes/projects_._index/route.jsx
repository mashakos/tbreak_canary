import { baseMeta } from '~/utils/meta';
import { getProjects } from './projects.server.js';
import { json } from '@remix-run/cloudflare';
import config from '~/config.json';
import { useFetcher } from '@remix-run/react';

export async function loader() {



  const projects = await getProjects();


  return json({
    projects,
  });
}

export function meta() {
  return baseMeta({
    title: 'Projects',
    description: `The official website of ${config.name} ${config.role}. We weave digital dreams into reality.`,
  });
}

export { Projects as default } from './projects.jsx';
