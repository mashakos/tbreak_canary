
export async function getProjects() {
  const modules = import.meta.glob('../projects.*/route.js', { eager: true });
  const build = await import('virtual:remix/server-build');

  for (const path in modules) {
    console.log(path, modules[path].default);
    //console.log((modules[path].default));
  }

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, project]) => {
      let id = file.replace('../', 'routes/').replace(/\/route.js$/, '');
      let slug = build.routes[id].path;

      const testfunc = name => project;
      const testdata = testfunc();

      console.log(testdata);


      if (slug === undefined) throw new Error(`No route for ${id}`);

      return {
        title: project.title,
        description: project.description,
        slug,
      };
    })
  );

  return posts;
}
