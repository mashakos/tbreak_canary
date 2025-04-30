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

function FeaturedStoriesPost({ slug, frontmatter, timecode, index }) {
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
      className={styles.featuredfeedpost}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={`/articles/${slug}`}
        className={styles.featuredfeedpostlink}
        rel="canonical"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.featuredfeedpostimage}>
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
        <div className={styles.featuredfeedpostdetails}>
          <div>
            <Heading as="h3" level={featured ? 2 : 6} >
              {title}
            </Heading>
          </div>
          <div aria-hidden className={styles.feedpostauthor}>
            <span>By</span> <a href={`/articles/${slug}`} rel='author'>Veronica Mars</a>
          </div>
        </div>
      </RouterLink>
    </article>
  );
}

function SideBarHeader({children})
{
  return (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        {children}
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
        <SideBarHeader>
          Recent Stories
        </SideBarHeader>
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

function FeaturedStoriesList({posts})
{
  return (
    <div className={styles.featuredfeedlist}>
      {posts.slice(12, 18).map(({ slug, ...post }, index) => (
        <FeaturedStoriesPost key={slug} slug={slug} index={index} {...post} />
      ))}
    </div>

  );

}

function FeedStoriesList({posts})
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
            <SideBarHeader>
              Recent Stories
            </SideBarHeader>
            <RecentStoriesList posts={posts} isSingleColumn={isSingleColumn} />
          </div>
        )}
      </Section>
    </>
  );
}

function DualColFeedBlock({posts, isSingleColumn})
{
  return (
    <>
      <Section className={styles.content}>
        <div className={styles.feedgrid}>
          <div className={styles.feedleftpane}>
            <div className={styles.feedleftpanegrid}>
              <FeedStoriesList posts={posts} isSingleColumn={isSingleColumn} />
            </div>
          </div>
          <div className={styles.feedrightpane}>
            <div className={styles.feedsidebar}>
              <div className={styles.sidebarwidget}>
                <SideBarHeader>
                  Featured Stories
                </SideBarHeader>
                <FeaturedStoriesList posts={posts} isSingleColumn={isSingleColumn} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function HeroStoryBlock({posts, isSingleColumn})
{
  return (
    <>
      <Section className={styles.herobannercontent}>
        <a href="/articles/the-first-nuclear-power-plant">
          <div className={styles.herobannerimage}>
            <img alt="banner" src="/images/posts/featured-12.jpeg" />
          </div>
        </a>
        <div className={styles.herobannermodal}>
          <div className={styles.covercontainer}>
            <div className={styles.coverblock}>
              <a className={styles.postCategory} href="/categories/science">
                Science
              </a>
              <a className={styles.headerblock} href="/articles/the-first-nuclear-power-plant">
                <Heading as="h3" level={3} className={styles.heading}>
                  A Look Into the Construction of the World’s First Nuclear Power Station
                </Heading>
              </a>
              <div className={styles.herobannerfooter}>
                <div className={styles.authorcontainer}>
                  <a className={styles.avatar} href="/authors/karina-bell">
                    <img alt="Karina Bell" loading="lazy" decoding="async" data-nimg="fill" src="/images/authors/karina-bell.jpg" />
                  </a>
                  <div className={styles.postAuthor}>
                    <span>By&nbsp;</span>
                    <a href="/authors/karina-bell">Karina Bell</a>
                    <time> · Mar 27, 2022</time>
                    <span className={styles.herobannerreadtime}>
                      <span> · 17 min read</span>
                    </span>
                  </div>
                </div>
              </div>
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
      <DualColFeedBlock posts={posts} isSingleColumn={isSingleColumn} />
      <HeroStoryBlock posts={posts} isSingleColumn={isSingleColumn} />
      <Footer />
    </article>
  );
}
