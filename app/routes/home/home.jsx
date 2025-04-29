import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from '~/hooks';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { formatDate } from '~/utils/date';
import { classes, cssProps } from '~/utils/style';
import styles from './home.module.css';

function RecentStoriesPost({ slug, frontmatter, timecode, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner } = frontmatter;

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {/*{featured && (*/}
      {/*  <Text className={styles.postLabel} size="s">*/}
      {/*    Featured*/}
      {/*  </Text>*/}
      {/*)}*/}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={banner}
            /*
            * Cloudflare image transform
            * make sure allow from other origins is checked!
            * for details see: https://developers.cloudflare.com/images/transform-images/transform-via-url/
            */
            placeholder = {`/cdn-cgi/image/width=25,quality=75/${banner}`}
            // placeholder={`${banner.split('.')[0]}-placeholder.jpg`}
            alt=""
            role="presentation"
          />
        </div>
      )}
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={`/articles/${slug}`}
        className={styles.postLink}
        rel="canonical"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!featured && (
          <div className={styles.sideArticleImage}>
            <Image
              noPauseButton
              play={!reduceMotion ? hovered : undefined}
              src={banner}
              /*
              * Cloudflare image transform
              * make sure allow from other origins is checked!
              * for details see: https://developers.cloudflare.com/images/transform-images/transform-via-url/
              */
              placeholder = {`/cdn-cgi/image/width=25,quality=75/${banner}`}
              // placeholder={`${banner.split('.')[0]}-placeholder.jpg`}
              alt=""
              role="presentation"
            />
          </div>
          )}
        <div className={styles.postDetails}>
          <a className={styles.postCategory} href={`/articles/${slug}`}>
            Category
          </a>
          <Heading as="h3" level={featured ? 2 : 6}>
            {title}
          </Heading>
          <div aria-hidden className={styles.postAuthor}>
            {/*<Divider notchWidth="64px" notchHeight="8px" />*/}
            <span>By</span> <a href={`/articles/${slug}`} rel='author'>Veronica Mars</a><span> · {dateTime}</span><span> · {timecode}</span>
          </div>
          {featured && (
            <Text size={featured ? 'l' : 's'} as="p">
            {abstract}
          </Text>
          )}
          {/*{featured && (*/}
          {/*<div className={styles.postFooter}>*/}
          {/*  <Button secondary iconHoverShift icon="chevron-right" as="div">*/}
          {/*    Read article*/}
          {/*  </Button>*/}
          {/*  <Text className={styles.timecode} size="s">*/}
          {/*    {timecode}*/}
          {/*  </Text>*/}
          {/*</div>*/}
          {/*  )}*/}
        </div>
      </RouterLink>
      {/*{featured && (*/}
      {/*  <Text aria-hidden className={styles.postTag} size="s">*/}
      {/*    477*/}
      {/*  </Text>*/}
      {/*)}*/}
    </article>
  );
}

function FeedStoriesPost({ slug, frontmatter, timecode, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner } = frontmatter;

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.feedpost}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={`/articles/${slug}`}
        className={styles.feedpostlink}
        rel="canonical"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <div className={styles.feedpostimage}>
            <Image
              noPauseButton
              play={!reduceMotion ? hovered : undefined}
              src={banner}
              /*
              * Cloudflare image transform
              * make sure allow from other origins is checked!
              * for details see: https://developers.cloudflare.com/images/transform-images/transform-via-url/
              */
              placeholder = {`/cdn-cgi/image/width=25,quality=75/${banner}`}
              // placeholder={`${banner.split('.')[0]}-placeholder.jpg`}
              alt=""
              role="presentation"
            />
          </div>
        <div className={styles.feedpostdetails}>
          <div>
            <a className={styles.postCategory} href={`/articles/${slug}`}>
              Category
            </a>
            <Heading as="h3" level={featured ? 2 : 6} className={styles.feedpostheading}>
              {title}
            </Heading>
            <Text size={featured ? 'l' : 's'} as="p" className={styles.feedposttext}>
              {abstract}
            </Text>
          </div>
          <div aria-hidden className={styles.feedpostauthor}>
            <span>By</span> <a href={`/articles/${slug}`} rel='author'>Veronica Mars</a><span> · {dateTime}</span><span> · {timecode}</span>
          </div>
        </div>
      </RouterLink>
    </article>
  );
}

function PostsHeader()
{
  return (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        Recent Stories
      </Heading>
    </header>
  );
}
function CoverStoryPost(featured){
  return (
    <RecentStoriesPost {...featured} />
  );
}
function RecentStoriesList({posts, isSingleColumn})
{
  return (
    <div className={styles.list}>
      {!isSingleColumn && (
        <PostsHeader />
      )}
      {posts.slice(0, 6).map(({ slug, ...post }, index) => (
        <RecentStoriesPost key={slug} slug={slug} index={index} {...post} />
      ))}
      {/*{Array(2)*/}
      {/*  .fill()*/}
      {/*  .map((skeleton, index) => (*/}
      {/*    <SkeletonPost key={index} index={index} />*/}
      {/*  ))}*/}
    </div>

  );

}

function FeedStoriesList({posts, isSingleColumn})
{
  return (
    <div className={styles.feedlist}>
      {posts.slice(6, 12).map(({ slug, ...post }, index) => (
        <FeedStoriesPost key={slug} slug={slug} index={index} {...post} />
      ))}
    </div>

  );

}

function HeroStoriesBlock({posts, isSingleColumn, featured})
{
  return (
  <>
    <Section className={styles.content}>
      {!isSingleColumn && (
        <div className={styles.grid}>
          <CoverStoryPost {...featured} />
          <RecentStoriesList posts={posts} isSingleColumn={isSingleColumn} />
        </div>
      )}
      {isSingleColumn && (
        <div className={styles.grid}>
          <CoverStoryPost {...featured} />
          <PostsHeader />
          <RecentStoriesList posts={posts} isSingleColumn={isSingleColumn} />
        </div>
      )}
    </Section>
    <Section className={styles.content}>
    <div className={styles.feedgrid}>
      <div className={styles.feedleftpane}>
        <div className={styles.feedleftpanegrid}>
          <FeedStoriesList posts={posts} isSingleColumn={isSingleColumn} />
        </div>
      </div>
      <div className={styles.feedrightpane}>
        <div className={styles.feedsidebar}>
        test
        </div>
      </div>
    </div>
    </Section>
  </>
  );
}

export function Home() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;


  return (
    <article className={styles.articles}>
      <HeroStoriesBlock posts={posts} isSingleColumn={isSingleColumn} featured={featured} />
      <Footer />
    </article>
  );
}
