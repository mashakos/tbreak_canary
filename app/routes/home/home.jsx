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
import { tinaField, useTina } from 'tinacms/dist/react';

import styles from './home.module.css';

function RecentStoriesPost({ slug, post, timecode, index, block }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = post.frontmatter;

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
      data-tina-field={tinaField(block, "featuredArticle")}
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
            {category}
          </a>
          <Heading as="h3" level={featured ? 2 : 6}>
            {title}
          </Heading>
          <div aria-hidden className={styles.postAuthor}>
            {/*<Divider notchWidth="64px" notchHeight="8px" />*/}
            <span>By</span> <a href={`/articles/${slug}`} rel='author'>{author.name}</a><span> · {dateTime}</span><span> · {timecode}</span>
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

function FeedStoriesPost({ slug, post, timecode, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = post.frontmatter;

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
              {category}
            </a>
            <Heading as="h3" level={featured ? 2 : 6} className={styles.feedpostheading}>
              {title}
            </Heading>
            <Text size={featured ? 'l' : 's'} as="p" className={styles.feedposttext}>
              {abstract}
            </Text>
          </div>
          <div aria-hidden className={styles.feedpostauthor}>
            <span>By</span> <a href={`/articles/${slug}`} rel='author'>{author.name}</a><span> · {dateTime}</span><span> · {timecode}</span>
          </div>
        </div>
      </RouterLink>
    </article>
  );
}

function FeaturedStoriesPost({ slug, post, block, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = post.frontmatter;

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
      data-tina-field={tinaField(block, post.frontmatter.tinafield)}
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
            <span>By</span> <a href={`/articles/${slug}`} rel='author'>{author.name}</a>
          </div>
        </div>
      </RouterLink>
    </article>
  );
}

function LowerFeedStoriesPost({ slug, post, timecode, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = post.frontmatter;

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
      className={styles.lowerfeedpost}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={`/articles/${slug}`}
        className={styles.lowerfeedpostLink}
        rel="canonical"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!featured && (
          <div className={styles.lowerfeedsideArticleImage}>
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
        <div className={styles.lowerfeedpostLinkWrap}>
          <div className={styles.lowerfeedpostDetails}>
            <a className={styles.lowerfeedpostCategory} href={`/articles/${slug}`}>
              {category}
            </a>
            <Heading as="h3" level={featured ? 2 : 6}>
              {title}
            </Heading>
            <div aria-hidden className={styles.lowerfeedpostAbstract}>
              <Text size={featured ? 'l' : 's'} as="p">
                {abstract}
              </Text>
            </div>
            <div aria-hidden className={styles.lowerfeedpostAuthor}>
              <span>By</span> <a href={`/articles/${slug}`} rel='author'>{author.name}</a><span> · {dateTime}</span><span> · {timecode}</span>
            </div>
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
    <RecentStoriesPost post={featured} />
  );
}
function RecentStoriesList({posts, isSingleColumn, block})
{
  return (
    <div className={styles.list}>
      {!isSingleColumn && (
        <SideBarHeader>
          Recent Stories
        </SideBarHeader>
      )}
      {
        posts?.map((post, index) => {
          return (
            <RecentStoriesPost
              key={post.slug}
              slug={post.slug}
              index={index}
              block={block}
              post={post}
            />
          );
        })
      }
    </div>

  );

}

function FeaturedStoriesList({posts, block})
{

  return (
    <div className={styles.featuredfeedlist}>
      {
        posts?.map((post, index) => {
          return (
            <FeaturedStoriesPost
              key={post.slug}
              slug={post.slug}
              index={index}
              block={block}
              post={post}
            />
          );
        })
      }
    </div>

  );

}


function MostReadStoriesList({posts, block})
{
  return (
    <div className={styles.featuredfeedlist}>
      {
        posts?.map((post, index) => {
          return (
            <FeaturedStoriesPost
              key={post.slug}
              slug={post.slug}
              index={index}
              block={block}
              post={post}
            />
          );
        })
      }
    </div>

  );

}

function FeedStoriesList({posts})
{
  return (
    <div className={styles.feedlist}>
      {posts.map((post, index) => (
        <FeedStoriesPost key={post.slug} slug={post.slug} index={index} post={post} />
      ))}
    </div>

  );

}

function LowerFeedStoriesList({posts})
{
  return (
    <div className={styles.lowerfeedlist}>
      {posts.map((post, index) => (
        <LowerFeedStoriesPost key={post.slug} slug={post.slug} index={index} post={post} />
      ))}
    </div>

  );

}


function HeroStoriesBlock({posts, isSingleColumn, block, featured})
{
  return (
    <>
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            <CoverStoryPost {...featured} />
            <RecentStoriesList posts={posts} isSingleColumn={isSingleColumn} block={block} />
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            <CoverStoryPost {...featured} />
            <SideBarHeader>
              Recent Stories
            </SideBarHeader>
            <RecentStoriesList posts={posts} isSingleColumn={isSingleColumn} block={block} />
          </div>
        )}
      </Section>
    </>
  );
}

function DualColFeedBlock({posts, featuredPosts, block, isSingleColumn})
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
                <FeaturedStoriesList posts={featuredPosts} isSingleColumn={isSingleColumn} block={block} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function LowerFeedBlock({posts, mostReadPosts, block, isSingleColumn})
{
  return (
    <>
      <Section className={styles.content}>
        <div className={styles.feedgrid}>
          <div className={styles.feedleftpane}>
            <div className={styles.feedleftpanegrid}>
              <LowerFeedStoriesList posts={posts} isSingleColumn={isSingleColumn} />
            </div>
          </div>
          <div className={styles.feedrightpane}>
            <div className={styles.feedsidebar}>
              <div className={styles.sidebarwidget}>
                <SideBarHeader>
                  Most Read
                </SideBarHeader>
                <MostReadStoriesList posts={mostReadPosts}  block={block} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


function HeroStoryBlock({slug, timecode, post, block})
{
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = post.frontmatter;

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
    <>
      <Section className={styles.herobannercontent} data-tina-field={tinaField(block, "heroStoryArticle")}>
        <RouterLink
          unstable_viewTransition
          prefetch="intent"
          to={`/articles/${slug}`}
          className=""
          rel="canonical"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.herobannerimage}>
            <img alt="banner" src={banner} />
          </div>
        </RouterLink>
        <div className={styles.herobannermodal}>
          <div className={styles.covercontainer}>
            <div className={styles.coverblock}>
              <a className={styles.postCategory} href={`/articles/${slug}`}>
                {category}
              </a>
              <a className={styles.headerblock} href={`/articles/${slug}`}>
                <Heading as="h3" level={3} className={styles.heading}>
                  {title}
                </Heading>
              </a>
              <div className={styles.herobannerfooter}>
                <div className={styles.authorcontainer}>
                  <a className={styles.avatar} href="/authors/karina-bell">
                    <img alt={author.name} loading="lazy" decoding="async" data-nimg="fill" src={author.avatar} />
                  </a>
                  <div className={styles.postAuthor}>
                    <span>By&nbsp;</span>
                    <a href={author.avatar}>{author.name}</a>
                    <time> · Mar 27, 2022</time>
                    <span className={styles.herobannerreadtime}>
                      <span> · {timecode}</span>
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
  const { props, reservedPosts, feedPosts, lowerFeedPosts, homePosts } = useLoaderData();
  const { data } = useTina(props);
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const { featuredPostRef, recentArticlePosts, featuredArticlePosts, heroStoryRef, lowerFeedArticlePosts, } = homePosts;


  return (
    <article className={styles.articles}>
      {data.home.blocks?.map((block) => {
          switch (block?.__typename) {
            case "HomeBlocksHeroStories" : {

              return <HeroStoriesBlock posts={recentArticlePosts} isSingleColumn={isSingleColumn} featured={featuredPostRef} block={block} />;
            }
            case "HomeBlocksDualColFeed" : {
              return <DualColFeedBlock posts={feedPosts} featuredPosts={featuredArticlePosts} isSingleColumn={isSingleColumn} block={block} />;
            }
            case "HomeBlocksHeroStory" : {
              return <HeroStoryBlock isSingleColumn={isSingleColumn} slug={heroStoryRef.slug} block={block} post={heroStoryRef} />;
            }
            case "HomeBlocksLowerFeed" : {
              return <LowerFeedBlock posts={lowerFeedPosts} mostReadPosts={lowerFeedArticlePosts} isSingleColumn={isSingleColumn} block={block} />;
            }
          }
        }

      )

      }


      <Footer />
    </article>
  );
}
