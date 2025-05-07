import { formatTimecode, readingTime, timePhrase } from '~/utils/timecode';
import client from '../../../tina/__generated__/client.js';


export async function getReservedPosts(data) {

  const build = await import('virtual:remix/server-build');
  let frontmatter = {};
  let reservedPosts = [];
  let featuredPostRef = {};

  let recentArticleRef = {};
  let recentArticlePosts = [];
  let featuredArticleRef = {};
  let featuredArticlePosts = [];

  let heroStoryRef = {};

  let lowerFeedArticleRef = {};
  let lowerFeedArticlePosts = [];

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
                  featuredPostRef.slug = build.routes[featuredPostRef._sys.path.replace('app/', '').replace(/\.mdx$/, '')].path;
                  featuredPostRef.frontmatter = frontmatter;
                  featuredPostRef.frontmatter = frontmatter;
                  featuredPostRef.frontmatter.featured = true;
                  featuredPostRef.frontmatter.tinafield = key;
                  if(typeof featuredPostRef.frontmatter !== 'undefined')
                  {
                    reservedPosts.push(featuredPostRef);
                  }
                }
                  break;
                default: {
                  if(articleBlock !== "HomeBlocksHeroStories")
                  {
                    recentArticleRef = articleBlock;
                    frontmatter = {
                      title: recentArticleRef.title,
                      abstract: recentArticleRef.abstract,
                      banner: recentArticleRef.banner,
                      date: recentArticleRef.date,
                      category: recentArticleRef.category?.name,
                      author: {
                        name: recentArticleRef.author?.name || 'Anonymous',
                        avatar: recentArticleRef.author?.avatar,
                      },
                      tags: recentArticleRef.tags?.map((tag) => tag?.tag?.name) || [],
                    };
                    recentArticleRef.slug = build.routes[recentArticleRef._sys.path.replace('app/', '').replace(/\.mdx$/, '')].path;
                    recentArticleRef.frontmatter = frontmatter;
                    recentArticleRef.frontmatter.featured = false;
                    recentArticleRef.frontmatter.tinafield = key;
                    recentArticlePosts.push(recentArticleRef);
                    if(typeof recentArticleRef.frontmatter !== 'undefined')
                    {
                      reservedPosts.push(recentArticleRef);
                    }
                  }

                }
              }

            }

          }
        }
        break;
        case "HomeBlocksDualColFeed" : {
          for(const [key, articleBlock] of Object.entries(block)) {
            if(articleBlock !== "HomeBlocksDualColFeed")
            {
              featuredArticleRef = articleBlock;
                frontmatter = {
                  title: featuredArticleRef.title,
                  abstract: featuredArticleRef.abstract,
                  banner: featuredArticleRef.banner,
                  date: featuredArticleRef.date,
                  category: featuredArticleRef.category?.name,
                  author: {
                    name: featuredArticleRef.author?.name || 'Anonymous',
                    avatar: featuredArticleRef.author?.avatar,
                  },
                  tags: featuredArticleRef.tags?.map((tag) => tag?.tag?.name) || [],
                };
              featuredArticleRef.slug = build.routes[featuredArticleRef._sys.path.replace('app/', '').replace(/\.mdx$/, '')].path;
              featuredArticleRef.frontmatter = frontmatter;
              featuredArticleRef.frontmatter.featured = false;
              featuredArticleRef.frontmatter.tinafield = key;
              featuredArticlePosts.push(featuredArticleRef);
              if(typeof featuredArticleRef.frontmatter !== 'undefined')
              {
                reservedPosts.push(featuredArticleRef);
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
          heroStoryRef.slug = build.routes[heroStoryRef._sys.path.replace('app/', '').replace(/\.mdx$/, '')].path;
          heroStoryRef.frontmatter = frontmatter;
          heroStoryRef.frontmatter.featured = false;
          heroStoryRef.frontmatter.tinafield = "heroStoryArticle";
          if(typeof heroStoryRef.frontmatter !== 'undefined')
          {
            reservedPosts.push(heroStoryRef);
          }
        }
        break;
        case "HomeBlocksLowerFeed" : {
          {
            for(const [key, articleBlock] of Object.entries(block)) {
              if(articleBlock !== "HomeBlocksLowerFeed")
              {
                lowerFeedArticleRef = articleBlock;
                frontmatter = {
                  title: lowerFeedArticleRef.title,
                  abstract: lowerFeedArticleRef.abstract,
                  banner: lowerFeedArticleRef.banner,
                  date: lowerFeedArticleRef.date,
                  category: lowerFeedArticleRef.category?.name,
                  author: {
                    name: lowerFeedArticleRef.author?.name || 'Anonymous',
                    avatar: lowerFeedArticleRef.author?.avatar,
                  },
                  tags: lowerFeedArticleRef.tags?.map((tag) => tag?.tag?.name) || [],
                };
                lowerFeedArticleRef.slug = build.routes[lowerFeedArticleRef._sys.path.replace('app/', '').replace(/\.mdx$/, '')].path;
                lowerFeedArticleRef.frontmatter = frontmatter;
                lowerFeedArticleRef.frontmatter.featured = false;
                lowerFeedArticleRef.frontmatter.tinafield = key;
                lowerFeedArticlePosts.push(lowerFeedArticleRef);
                if(typeof lowerFeedArticleRef.frontmatter !== 'undefined')
                {
                  reservedPosts.push(lowerFeedArticleRef);
                }
              }

            }


          }

        }
      }
    }

  );

    return {
      reservedPosts,
      featuredPostRef,
      recentArticlePosts,
      featuredArticlePosts,
      heroStoryRef,
      lowerFeedArticlePosts,
    };

}

export async function getPosts() {

  const build = await import('virtual:remix/server-build');

  const allPosts = await client.queries.postConnection({
    sort: 'date',
    last: 100
  });

  return allPosts.data?.postConnection.edges.map((postData) => {
    const post = postData.node;
    let id = post._sys.path.replace('app/', '').replace(/\.mdx$/, '');
    let slug = build.routes[id].path;
    let timecode = timePhrase(post.time_to_read_in_minutes);
    let frontmatter = {
      title: post.title,
      abstract: post.abstract,
      banner: post.banner,
      date: post.date,
      category: post.category?.name,
      author: {
        name: post.author?.name || 'Anonymous',
        avatar: post.author?.avatar,
      },
      tags: post.tags?.map((tag) => tag?.tag?.name) || [],
    };

    return {
      slug,
      timecode,
      frontmatter,
    };
  });



  // const modules = import.meta.glob('../articles.*.mdx', { eager: true });
  //
  // const posts = await Promise.all(
  //   Object.entries(modules).map(async ([file, post]) => {
  //     let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
  //     let slug = build.routes[id].path;
  //     if (slug === undefined) throw new Error(`No route for ${id}`);
  //
  //     const text = await import(`../articles.${slug}.mdx?raw`);
  //     const readTime = readingTime(text.default);
  //     const timecode = formatTimecode(readTime);
  //
  //     return {
  //       slug,
  //       timecode,
  //       frontmatter: post.frontmatter,
  //     };
  //   })
  // );
  //
  // return sortBy(posts, post => post.frontmatter.date, 'desc');

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
