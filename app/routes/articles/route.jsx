import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';
import client from 'tina/__generated__/client.js';

export async function loader({ request }) {
  const slug = request.url.split('/').at(-1);
  const module = await import(`../articles.${slug}.mdx`);
  const text = await import(`../articles.${slug}.mdx?raw`);
  const readTime = readingTime(text.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;

  // Tina query, read using useLoaderData in app/layouts/post/post.jsx template
  const { data, query, variables } = await client.queries.post({
    relativePath: "articles." + slug + ".mdx",
  });

  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
    props: {
      data,
      query,
      variables,
    },
  });
}

export function meta({ data }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
