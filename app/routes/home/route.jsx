import { baseMeta } from '~/utils/meta';
import { getPosts } from './posts.server';
import { json } from '@remix-run/cloudflare';
import client from 'tina/__generated__/client.js';

export async function loader() {

  // Custom Tina query, for featured post & homepage page.
  // Home: page, route is app/routes/pages/homepage.mdx, baked in graphql query.
  // Featured: Blank reference page. Route is app/routes/featured
  const homeQuery = await client.queries.homeWithFeatured({
    relativePath: 'Featured.md',
  });

  // console.log(homeQuery.data.home.title);
  // console.log(homeQuery.data.featured.post.title);


  // const allPosts = await client.queries.postConnection({
  //   sort: 'date',
  //   last: 1
  // });


  const allPosts = await getPosts();
  // console.log(allPosts[0].frontmatter.title);

  const homePost = homeQuery.data.home;
  const featuredPost = homePost.blocks[0].featuredArticle;
  const bannerPost = allPosts[19];
  const featured = allPosts.filter(post => post.frontmatter.title === featuredPost.title)[0];
  const posts = allPosts.filter(post => featured?.slug !== post.slug).filter(post => bannerPost.slug !== post.slug);
  featured.frontmatter.featured = true;
  posts.map( post => post.frontmatter.featured = false);

  return json({ posts, bannerPost, homePost, featured });
}
export function meta() {
  return baseMeta({
    title: "Tech, Video Games, Movies, Series, Food, Cars",
    description:
      "The best guides for Tech, Video Games, Food, Cars, Entertainment and more. Homegrown in the UAE.",
  });
}

export { Home as default } from './home';
