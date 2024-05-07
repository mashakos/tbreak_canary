
export async function getProjects() {
  const modules = import.meta.glob('../projects.*/route.js', { eager: true });
  const build = await import('virtual:remix/server-build');

  // for (const path in modules) {
  //   const funcmod = modules[path].default();
  //   console.log(path, JSON.stringify(Object.entries(funcmod)));
  // }

  //console.log(JSON.stringify(modules['../projects.masdar/route.js'].default()));

  //const projectDefault = JSON.stringify(project.default());
  // const bodyroot = Object.entries(modules['../projects.slice/route.js'].default());
  // for (let [key, children] of Object.entries(bodyroot))
  // {
  //   if( children[0] === 'props')
  //   {
  //     // title
  //     bodyarray.push(JSON.stringify(children[1].children[0].props.children[1].props.title));
  //     // description
  //     bodyarray.push(JSON.stringify(children[1].children[0].props.children[1].props.description));
  //     // roles
  //     bodyarray.push(JSON.stringify(children[1].children[0].props.children[1].props.roles.join(", ")));
  //   }
  // }
  // const bodyStrContent = bodyarray.join("\n");


  const projects = await Promise.all(
    Object.entries(modules).map(async ([file, project]) => {
      let id = file.replace('../', 'routes/').replace(/\/route.js$/, '');
      let slug = build.routes[id].path.replace("projects/", '');
      let bodyarray = [];
      let title = "";
      let description = "";
      let bodytext = "";
      let abstract = "";
      let textureLarge = "";
      let texturePlaceholder = "";
      let texture = "";
      let texture2 = "";
      let texture2Large = "";
      let texture2Placeholder = "";
      let roles = "";

      // Object.entries(project.default()).map(async ([props]) => {
      //   if(props)
      //   console.log(JSON.stringify(Object.entries(project.default())));
      // });
      const bodyroot = Object.entries(project.default());
      for (let [key, children] of Object.entries(bodyroot))
      {
        if( children[0] === 'props')
        {
          // title
          title = (JSON.stringify(children[1].children[0].props.children[1].props.title)).replace(/^"(.*)"$/, '$1');
          // description
          description = (JSON.stringify(children[1].children[0].props.children[1].props.description)).replace(/^"(.*)"$/, '$1');
          // body text
          bodytext = (JSON.stringify(children[1].children[0].props.children[1].props.bodytext)).replace(/^"(.*)"$/, '$1');
          // abstract
          abstract = (JSON.stringify(children[1].children[0].props.children[1].props.abstract)).replace(/^"(.*)"$/, '$1');
          // large res
          textureLarge = (JSON.stringify(children[1].children[0].props.children[1].props.textureLarge)).replace(/^"(.*)"$/, '$1');
          // placeholder
          texturePlaceholder = (JSON.stringify(children[1].children[0].props.children[1].props.texturePlaceholder)).replace(/^"(.*)"$/, '$1');
          // regular res
          texture = (JSON.stringify(children[1].children[0].props.children[1].props.texture)).replace(/^"(.*)"$/, '$1');
          // 2nd texture for smartphone
          texture2 = (JSON.stringify(children[1].children[0].props.children[1].props.texture2)).replace(/^"(.*)"$/, '$1');
          // roles
          // large res
          texture2Large = (JSON.stringify(children[1].children[0].props.children[1].props.texture2Large)).replace(/^"(.*)"$/, '$1');
          // placeholder
          texture2Placeholder = (JSON.stringify(children[1].children[0].props.children[1].props.texture2Placeholder)).replace(/^"(.*)"$/, '$1');
          roles = (JSON.stringify(children[1].children[0].props.children[1].props.roles.join(", ")));
        }
      }
      //const bodyStrContent = bodyarray.join("\n");
      //console.log(bodyStrContent);

      if (slug === undefined) throw new Error(`No route for ${id}`);

      return {
        title: title,
        description: description,
        bodytext: bodytext,
        abstract: abstract,
        textureLarge: textureLarge,
        texturePlaceholder: texturePlaceholder,
        texture: texture,
        texture2: texture2,
        texture2Large: texture2Large,
        texture2Placeholder: texture2Placeholder,
        roles: roles,
        slug: slug,
      };
    })
  );

  return projects;
}
