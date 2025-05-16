import { baseMeta } from '~/utils/meta';
import { getPosts, getReservedPosts } from './posts.server';
import { json } from '@remix-run/cloudflare';
import client from 'tina/__generated__/client.js';

export async function loader() {

  // Custom Tina query, for featured post & homepage page.
  // Home: page, route is app/routes/pages/homepage.mdx, baked in graphql query.
  // Featured: Blank reference page. Route is app/routes/featured
  const { data, query, variables } = await client.queries.homeWithPosts({
    relativePath: 'home.mdx',
  });
  const { reservedPosts, featuredPostRef, heroStoryRef, } = await getReservedPosts(data);

  const build = await import('virtual:remix/server-build');
  const recentArticlePostCnt = 5;
  const featuredArticlePostCnt = 5;
  const mostReadArticlePostCnt = 5;
  let recentArticlePosts = [];
  let featuredArticlePosts = [];
  let mostReadArticlePosts = [];
  let feedPosts = [];
  let lowerFeedPosts = [];
  let frontmatter = {};
  let postFactory = data.postConnection.edges;

  let posts = await getPosts();


  reservedPosts.map((reservedPost) => {
    posts = posts.filter(post => reservedPost?.slug !== post.slug);

  });


  // // reserved articles
  // postFactory.map((postData, index) => {
  //   const post = postData.node;
  //
  //   reservedPosts.map((reservedPost) => {
  //     if(reservedPost.id === post.id)
  //     {
  //       postFactory.splice(index, 1);
  //     }
  //   });
  // });


  // replace author, category referenced fields
  postFactory.map((postData, index) => {
    const factorypost = postData.node;

    posts.map((post) => {
      if(post.frontmatter.id === factorypost.id)
      {
        frontmatter = {
          title: factorypost.title,
          abstract: factorypost.abstract,
          banner: factorypost.banner,
          date: factorypost.date,
          category: factorypost.category?.name,
          author: {
            name: factorypost.author?.name || 'Anonymous',
            avatar: factorypost.author?.avatar,
          },
          tags: factorypost.tags?.map((tag) => tag?.tag?.name) || [],
        };
        post.frontmatter.featured = false;
        post.frontmatter = frontmatter;
        // console.log(post.frontmatter);
      }
    });
  });


  // recent articles
  for (const post of posts) {
    recentArticlePosts.push(post);

    if(recentArticlePosts.length >= recentArticlePostCnt)
    {
      break;
    }
  }
  posts.map((post, index) => {

    recentArticlePosts.map((recentArticlePost) => {
      posts = posts.filter(post => recentArticlePost?.slug !== post.slug);
    });
  });


  // // recent articles
  // for (const postData of postFactory) {
  //   const post = postData.node;
  //   frontmatter = {
  //     title: post.title,
  //     abstract: post.abstract,
  //     banner: post.banner,
  //     date: post.date,
  //     category: post.category?.name,
  //     author: {
  //       name: post.author?.name || 'Anonymous',
  //       avatar: post.author?.avatar,
  //     },
  //     tags: post.tags?.map((tag) => tag?.tag?.name) || [],
  //   };
  //   post.slug = build.routes[post.id.replace('app/', '').replace(/\.mdx$/, '')].path;
  //   post.frontmatter = frontmatter;
  //   post.frontmatter.featured = false;
  //   recentArticlePosts.push(post);
  //
  //   if(recentArticlePosts.length >= recentArticlePostCnt)
  //   {
  //     break;
  //   }
  // }
  // postFactory.map((postData, index) => {
  //   const post = postData.node;
  //
  //   recentArticlePosts.map((recentArticlePost) => {
  //     if(recentArticlePost.id === post.id)
  //     {
  //       postFactory.splice(index, 1);
  //     }
  //   });
  // });


  // featured articles
  for (const post of posts) {
    featuredArticlePosts.push(post);

    if(featuredArticlePosts.length >= featuredArticlePostCnt)
      break;
  }
  posts.map((post, index) => {

    featuredArticlePosts.map((featuredArticlePost) => {
      posts = posts.filter(post => featuredArticlePost?.slug !== post.slug);
    });
  });


  // // featured articles
  // for (const postData of postFactory) {
  //   const post = postData.node;
  //   frontmatter = {
  //     title: post.title,
  //     abstract: post.abstract,
  //     banner: post.banner,
  //     date: post.date,
  //     category: post.category?.name,
  //     author: {
  //       name: post.author?.name || 'Anonymous',
  //       avatar: post.author?.avatar,
  //     },
  //     tags: post.tags?.map((tag) => tag?.tag?.name) || [],
  //   };
  //   post.slug = build.routes[post.id.replace('app/', '').replace(/\.mdx$/, '')].path;
  //   post.frontmatter = frontmatter;
  //   post.frontmatter.featured = false;
  //   featuredArticlePosts.push(post);
  //
  //   if(featuredArticlePosts.length >= featuredArticlePostCnt)
  //     break;
  // }
  // postFactory.map((postData, index) => {
  //   const post = postData.node;
  //
  //   featuredArticlePosts.map((featuredArticlePost) => {
  //     if(featuredArticlePost.id === post.id)
  //     {
  //       postFactory.splice(index, 1);
  //     }
  //   });
  // });


  // most read articles
  for (const post of posts) {
    mostReadArticlePosts.push(post);

    if(mostReadArticlePosts.length >= mostReadArticlePostCnt)
      break;
  }
  posts.map((post, index) => {

    mostReadArticlePosts.map((mostReadArticlePost) => {
      posts = posts.filter(post => mostReadArticlePost?.slug !== post.slug);
    });
  });



  // // most read articles
  // for (const postData of postFactory) {
  //   const post = postData.node;
  //   frontmatter = {
  //     title: post.title,
  //     abstract: post.abstract,
  //     banner: post.banner,
  //     date: post.date,
  //     category: post.category?.name,
  //     author: {
  //       name: post.author?.name || 'Anonymous',
  //       avatar: post.author?.avatar,
  //     },
  //     tags: post.tags?.map((tag) => tag?.tag?.name) || [],
  //   };
  //   post.slug = build.routes[post.id.replace('app/', '').replace(/\.mdx$/, '')].path;
  //   post.frontmatter = frontmatter;
  //   post.frontmatter.featured = false;
  //   mostReadArticlePosts.push(post);
  //
  //   if(mostReadArticlePosts.length >= mostReadArticlePostCnt)
  //     break;
  // }
  // postFactory.map((postData, index) => {
  //   const post = postData.node;
  //
  //   mostReadArticlePosts.map((mostReadArticlePost) => {
  //     if(mostReadArticlePost.id === post.id)
  //     {
  //       postFactory.splice(index, 1);
  //     }
  //   });
  // });


  posts.map((post) => {

    if(feedPosts.length >= 6)
    {
      if(lowerFeedPosts.length < 6)
      {
        lowerFeedPosts.push(post);
      }
    }
    else
    {
      feedPosts.push(post);
    }
  });





  // postFactory.map((postData) => {
  //   const post = postData.node;
  //   frontmatter = {
  //     title: post.title,
  //     abstract: post.abstract,
  //     banner: post.banner,
  //     date: post.date,
  //     category: post.category?.name,
  //     author: {
  //       name: post.author?.name || 'Anonymous',
  //       avatar: post.author?.avatar,
  //     },
  //     tags: post.tags?.map((tag) => tag?.tag?.name) || [],
  //   };
  //   post.slug = build.routes[post.id.replace('app/', '').replace(/\.mdx$/, '')].path;
  //   post.frontmatter = frontmatter;
  //   post.frontmatter.featured = false;
  //
  //
  //   if(feedPosts.length >= 6)
  //   {
  //     if(lowerFeedPosts.length < 6)
  //     {
  //       lowerFeedPosts.push(post);
  //     }
  //   }
  //   else
  //   {
  //     feedPosts.push(post);
  //   }
  // });


  return json({
    props: {
      data,
      query,
      variables,
    },
    // reservedPosts,
    feedPosts,
    lowerFeedPosts,
    homePosts: {
      featuredPostRef,
      recentArticlePosts,
      featuredArticlePosts,
      heroStoryRef,
      mostReadArticlePosts,
    },
  },
  {
    headers: {
    "Cache-Control": "public, max-age=3600, stable-while-revalidate=240", // 1 hour age, 4 minutes stale while refreshing
    },
  });
}



// keep the home page data in memory so back clicks are instant and the data
// doesn't change
let cache;
export async function clientLoader({ serverLoader }) {
  if (cache) return { ...cache };

  let loaderData = await serverLoader();
  let query = await loaderData;
  cache = query;
  return { ...query };
}

// So that the client loader is called on initial load
clientLoader.hydrate = true;

export function meta() {
  return baseMeta({
    title: "Tech, Video Games, Movies, Series, Food, Cars",
    description:
      "The best guides for Tech, Video Games, Food, Cars, Entertainment and more. Homegrown in the UAE.",
  });
}

export { Home as default } from './home';
