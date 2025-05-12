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
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
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
      data-tina-field={tinaField(block, post.frontmatter.tinafield)}
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
  const { title, date, featured, banner, author } = post.frontmatter;

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
function CoverStoryPost(featured, block){
  const slug = featured.featured.slug;
  return (
    <RecentStoriesPost slug={slug} post={featured.featured} block={block} />
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


function HeroStoriesBlock({featured, posts, isSingleColumn, block})
{

  return (
    <>
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            <CoverStoryPost featured={featured} block={block} />
            <RecentStoriesList posts={posts} isSingleColumn={isSingleColumn} block={block} />
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            <CoverStoryPost featured={featured} block={block} />
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

function DualColFeedBlock({featured, block, isSingleColumn})
{
  const {feedPostsContext} = useHome();
  const posts = feedPostsContext;
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
                <FeaturedStoriesList posts={featured} isSingleColumn={isSingleColumn} block={block} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function LowerFeedBlock({mostReadPosts, block, isSingleColumn})
{
  const {lowerFeedPostsContext} = useHome();
  const posts = lowerFeedPostsContext;


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


function HeroStoryBlock({timecode, post, block})
{
  // const {heroStoryRef} = useHome();
  // const post = heroStoryRef;
  const slug = post.slug;

  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, date, banner, category, author } = post.frontmatter;


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
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={`/articles/${slug}`}
                className={styles.postCategory}
                rel="canonical"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {category}
              </RouterLink>
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={`/articles/${slug}`}
                className={styles.headerblock}
                rel="canonical"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Heading as="h3" level={3} className={styles.heading}>
                  {title}
                </Heading>
              </RouterLink>
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

const HomeContext = createContext({});

export const useHome = () => useContext(HomeContext);

export function Home() {
  const { props, reservedPosts, feedPosts, lowerFeedPosts, homePosts } = useLoaderData();
  const { data } = useTina(props);
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const [featuredPostRef, setFeaturedPostRef] = useState(homePosts.featuredPostRef);
  const [recentArticlePosts, setRecentArticlePosts] = useState(homePosts.recentArticlePosts);
  const [featuredArticlePosts, setFeaturedArticlePosts] = useState(homePosts.featuredArticlePosts);
  const [mostReadArticlePosts, setmostReadArticlePosts] = useState(homePosts.mostReadArticlePosts);

  let featuredPostRefPlaceholder = {};
  let mostReadArticlePostsPlaceholder = [];
  let heroStoryPlaceholder = {};
  let frontmatter = {};


  // const [heroStoryRef, setHeroStoryRef] = useState(heroStoryPlaceholder);

  const [feedPostsContext, setFeedPostsContext] = useState(feedPosts);
  const [lowerFeedPostsContext, setLowerFeedPostsContext] = useState(lowerFeedPosts);

  return (
    <HomeContext.Provider
      value={{ featuredPostRef, recentArticlePosts, featuredArticlePosts, feedPostsContext, lowerFeedPostsContext, mostReadArticlePosts }}
    >
      <article className={styles.articles}>
        {data.home.blocks?.map((block) => {
            switch (block?.__typename) {
              case "HomeBlocksHeroStories" : {
                featuredPostRefPlaceholder = block.featuredArticle;
                frontmatter = {
                  title: featuredPostRefPlaceholder.title,
                  abstract: featuredPostRefPlaceholder.abstract,
                  banner: featuredPostRefPlaceholder.banner,
                  date: featuredPostRefPlaceholder.date,
                  category: featuredPostRefPlaceholder.category?.name,
                  author: {
                    name: featuredPostRefPlaceholder.author?.name || 'Anonymous',
                    avatar: featuredPostRefPlaceholder.author?.avatar,
                  },
                  tags: featuredPostRefPlaceholder.tags?.map((tag) => tag?.tag?.name) || [],
                };
                featuredPostRefPlaceholder.slug = homePosts.heroStoryRef.slug;
                featuredPostRefPlaceholder.frontmatter = frontmatter;
                featuredPostRefPlaceholder.frontmatter.featured = true;
                featuredPostRefPlaceholder.frontmatter.tinafield = "featuredArticle";

                return (
                  <>
                    <HeroStoriesBlock isSingleColumn={isSingleColumn} featured={featuredPostRefPlaceholder} posts={recentArticlePosts} block={block} />
                    <DualColFeedBlock isSingleColumn={isSingleColumn} featured={featuredArticlePosts} block={block} />
                  </>
                );
              }
              // case "HomeBlocksDualColFeed" : {
              //   console.log(featuredArticlePosts);
              //   return <DualColFeedBlock isSingleColumn={isSingleColumn} featured={featuredArticlePosts} block={block} />;
              // }
              case "HomeBlocksHeroStory" : {
                heroStoryPlaceholder = block.heroStoryArticle;
                frontmatter = {
                  title: heroStoryPlaceholder.title,
                  abstract: heroStoryPlaceholder.abstract,
                  banner: heroStoryPlaceholder.banner,
                  date: heroStoryPlaceholder.date,
                  category: heroStoryPlaceholder.category?.name,
                  author: {
                    name: heroStoryPlaceholder.author?.name || 'Anonymous',
                    avatar: heroStoryPlaceholder.author?.avatar,
                  },
                  tags: heroStoryPlaceholder.tags?.map((tag) => tag?.tag?.name) || [],
                };
                heroStoryPlaceholder.slug = homePosts.heroStoryRef.slug;
                heroStoryPlaceholder.frontmatter = frontmatter;
                heroStoryPlaceholder.frontmatter.featured = false;
                heroStoryPlaceholder.frontmatter.tinafield = "heroStoryArticle";
                return (
                  <>
                    <HeroStoryBlock isSingleColumn={isSingleColumn} post={heroStoryPlaceholder} block={block} />
                    <LowerFeedBlock isSingleColumn={isSingleColumn} mostReadPosts={mostReadArticlePosts} block={block} />
                  </>
                );
              }
              // case "HomeBlocksLowerFeed" : {
              //   return <LowerFeedBlock isSingleColumn={isSingleColumn} mostReadPosts={mostReadArticlePosts} block={block} />;
              // }
            }
          }

        )

        }


        <Footer />
      </article>
    </HomeContext.Provider>
  );
}
