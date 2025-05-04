import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useParallax } from '~/hooks';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { classes, cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './home.module.css';
import { useReducedMotion } from 'framer-motion';
import { formatDate } from '~/utils/date.js';
import { Link as RouterLink } from '@remix-run/react/dist/components.js';


export function RecentStoriesPost({ slug, frontmatter, timecode, index }) {
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

export function FeedStoriesPost({ slug, frontmatter, timecode, index }) {
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

export function FeaturedStoriesPost({ slug, frontmatter, timecode, index }) {
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

export function LowerFeedStoriesPost({ slug, frontmatter, timecode, index }) {
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
              Category
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
              <span>By</span> <a href={`/articles/${slug}`} rel='author'>Veronica Mars</a><span> · {dateTime}</span><span> · {timecode}</span>
            </div>
          </div>
        </div>
      </RouterLink>
    </article>
  );
}

export function SideBarHeader({children})
{
  return (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        {children}
      </Heading>
    </header>
  );
}
export function CoverStoryPost(featured){
  return (
    <RecentStoriesPost {...featured} />
  );
}
export function RecentStoriesList({posts, isSingleColumn})
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

export function FeaturedStoriesList({posts})
{
  return (
    <div className={styles.featuredfeedlist}>
      {posts.slice(12, 16).map(({ slug, ...post }, index) => (
        <FeaturedStoriesPost key={slug} slug={slug} index={index} {...post} />
      ))}
    </div>

  );

}

export function FeedStoriesList({posts})
{
  return (
    <div className={styles.feedlist}>
      {posts.slice(6, 12).map(({ slug, ...post }, index) => (
        <FeedStoriesPost key={slug} slug={slug} index={index} {...post} />
      ))}
    </div>

  );

}

export function LowerFeedStoriesList({posts})
{
  return (
    <div className={styles.lowerfeedlist}>
      {posts.slice(14, 20).map(({ slug, ...post }, index) => (
        <LowerFeedStoriesPost key={slug} slug={slug} index={index} {...post} />
      ))}
    </div>

  );

}


export function HeroStoriesBlock({posts, isSingleColumn, featured})
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

export function DualColFeedBlock({posts, isSingleColumn})
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

export function LowerFeedBlock({posts, isSingleColumn})
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
                <FeaturedStoriesList posts={posts} isSingleColumn={isSingleColumn} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


export function HeroStoryBlock({posts, isSingleColumn})
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