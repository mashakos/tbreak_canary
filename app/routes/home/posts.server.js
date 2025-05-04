import { formatTimecode, readingTime, timePhrase } from '~/utils/timecode';
import client from '../../../tina/__generated__/client.js';

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
