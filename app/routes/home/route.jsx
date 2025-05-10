import { baseMeta } from '~/utils/meta';
import { getReservedPosts } from './posts.server';
import { json } from '@remix-run/cloudflare';
import client from 'tina/__generated__/client.js';

export async function loader() {

  // Custom Tina query, for featured post & homepage page.
  // Home: page, route is app/routes/pages/homepage.mdx, baked in graphql query.
  // Featured: Blank reference page. Route is app/routes/featured
  const { data, query, variables } = await client.queries.homeWithPosts({
    relativePath: 'home.mdx',
  });
  const { reservedPosts, featuredPostRef, recentArticlePosts, featuredArticlePosts, heroStoryRef, lowerFeedArticlePosts, } = await getReservedPosts(data);

  const build = await import('virtual:remix/server-build');
  let feedPosts = [];
  let lowerFeedPosts = [];
  let frontmatter = {};
  let postFactory = data.postConnection.edges;
  postFactory.map((postData, index) => {
    const post = postData.node;

    reservedPosts.map((reservedPost) => {
      if(reservedPost.id === post.id)
      {
        delete postFactory[index];
      }
    });
  });


  postFactory.map((postData) => {
    const post = postData.node;
    frontmatter = {
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
    post.slug = build.routes[post.id.replace('app/', '').replace(/\.mdx$/, '')].path;
    post.frontmatter = frontmatter;
    post.frontmatter.featured = false;
    if(feedPosts.length >= 6)
      lowerFeedPosts.push(post);
      else
    feedPosts.push(post);
  });


  return json({
    props: {
      data,
      query,
      variables,
    },
    reservedPosts,
    feedPosts,
    lowerFeedPosts,
    homePosts: {
      featuredPostRef,
      recentArticlePosts,
      featuredArticlePosts,
      heroStoryRef,
      lowerFeedArticlePosts,
    }
  }, {
    headers: {
      "Cache-Control": "public, max-age=604800", // 7 days
    },
  });
}
export function meta() {
  return baseMeta({
    title: "Tech, Video Games, Movies, Series, Food, Cars",
    description:
      "The best guides for Tech, Video Games, Food, Cars, Entertainment and more. Homegrown in the UAE.",
  });
}

export { Home as default } from './home';
