import { formatTimecode, readingTime } from '~/utils/timecode';
import { baseMeta } from '~/utils/meta.js';

export async function getEntries() {
  const modules = import.meta.glob('../projects.*/route.js');
  const build = await import('virtual:remix/server-build');


  const entries = await Promise.all(
    modules && Object.entries(modules).map(async ([file, project]) => {
      let id = file.replace('../', 'routes/').replace('/route.js', '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);
      console.log(id.replace('projects.', '').replace('routes/', ''));
      const projectData = {
        name: id.replace('projects.', '').replace('routes/', ''),
      };


      return {
        slug,
        data: project.name,
      };
    })
  );

  // for (const path in modules) {
  //   modules[path]().then((mod) => {
  //     const id = path.replace('../', 'routes/').replace('projects.', '').replace('/route.js', '');
  //     console.log(id, mod.meta);
  //   });
  // }

  return sortBy(entries, project => project.slug, 'desc');
}

function sortBy(arr, key, dir = 'asc') {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === 'asc' ? res : -res;
  });
}

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
