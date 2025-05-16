import { timePhrase } from '~/utils/timecode';
import client from '../../../tina/__generated__/client.js';


export async function getReservedPosts(data) {

  const build = await import('virtual:remix/server-build');
  let frontmatter = {};
  let reservedPosts = [];
  let featuredPostRef = {};

  let heroStoryRef = {};

    data.home.blocks?.map((block) => {
      switch (block?.__typename) {
        case "HomeBlocksHeroStories" : {

          for(const [key, articleBlock] of Object.entries(block)) {
            {
              switch (key) {
                case "featuredArticle" : {
                  Object.assign(featuredPostRef, articleBlock);
                  frontmatter = {
                    title: featuredPostRef.title,
                    abstract: featuredPostRef.abstract,
                    banner: featuredPostRef.banner,
                    date: featuredPostRef.date,
                    category: featuredPostRef.category?.name,
                    author: {
                      name: featuredPostRef.author?.name || 'Anonymous',
                      avatar: featuredPostRef.author?.avatar,
                    },
                    tags: featuredPostRef.tags?.map((tag) => tag?.tag?.name) || [],
                  };
                  featuredPostRef.slug = build.routes[featuredPostRef.id.replace('app/', '').replace(/\.mdx$/, '')].path;
                  featuredPostRef.frontmatter = frontmatter;
                  featuredPostRef.frontmatter = frontmatter;
                  featuredPostRef.frontmatter.featured = true;
                  featuredPostRef.frontmatter.tinafield = key;
                  if(typeof featuredPostRef.frontmatter !== 'undefined')
                  {
                    reservedPosts.push(featuredPostRef);
                  }
                }
              }

            }

          }
        }
        break;
        case "HomeBlocksHeroStory" : {
          heroStoryRef = block.heroStoryArticle;
          frontmatter = {
            title: heroStoryRef.title,
            abstract: heroStoryRef.abstract,
            banner: heroStoryRef.banner,
            date: heroStoryRef.date,
            category: heroStoryRef.category?.name,
            author: {
              name: heroStoryRef.author?.name || 'Anonymous',
              avatar: heroStoryRef.author?.avatar,
            },
            tags: heroStoryRef.tags?.map((tag) => tag?.tag?.name) || [],
          };
          heroStoryRef.slug = build.routes[heroStoryRef.id.replace('app/', '').replace(/\.mdx$/, '')].path;
          heroStoryRef.frontmatter = frontmatter;
          heroStoryRef.frontmatter.featured = false;
          heroStoryRef.frontmatter.tinafield = "heroStoryArticle";
          if(typeof heroStoryRef.frontmatter !== 'undefined')
          {
            reservedPosts.push(heroStoryRef);
          }
        }
      }
    }

  );

    return {
      reservedPosts,
      featuredPostRef,
      heroStoryRef,
    };

}


export async function getPosts() {
  const modules = import.meta.glob('../articles.*.mdx', { eager: true });
  const build = await import('virtual:remix/server-build');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);

      let timecode = timePhrase(post.time_to_read_in_minutes);

      post.frontmatter.id = file.replace('../', 'app/routes/');

      return {
        slug,
        timecode,
        frontmatter: post.frontmatter,
      };
    })
  );

  return sortBy(posts, post => post.frontmatter.date, 'desc');
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
