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

function RecentStoriesPost({ slug, frontmatter, timecode, index, block }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = frontmatter;

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

function FeedStoriesPost({ slug, frontmatter, timecode, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = frontmatter;

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

function FeaturedStoriesPost({ slug, frontmatter, block, featuredStoryArticle, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = frontmatter;

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
      data-tina-field={tinaField(block, featuredStoryArticle)}
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

function LowerFeedStoriesPost({ slug, frontmatter, timecode, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = frontmatter;

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
    <RecentStoriesPost {...featured} />
  );
}
function RecentStoriesList({posts, isSingleColumn, block})
{
  let refPostOne = block.recentArticleOne;
  let recentRefOne =  posts.filter(post => post.frontmatter.title === refPostOne.title)[0];
  let refPostTwo = block.recentArticleTwo;
  let recentRefTwo =  posts.filter(post => post.frontmatter.title === refPostTwo.title)[0];
  let refPostThree = block.recentArticleThree;
  let recentRefThree =  posts.filter(post => post.frontmatter.title === refPostThree.title)[0];
  let refPostFour = block.recentArticleFour;
  let recentRefFour =  posts.filter(post => post.frontmatter.title === refPostFour.title)[0];
  let refPostFive = block.recentArticleFive;
  let recentRefFive =  posts.filter(post => post.frontmatter.title === refPostFive.title)[0];
  let refPostSix = block.recentArticleSix;
  let recentRefSix =  posts.filter(post => post.frontmatter.title === refPostSix.title)[0];

  return (
    <div className={styles.list}>
      {!isSingleColumn && (
        <SideBarHeader>
          Recent Stories
        </SideBarHeader>
      )}
      <RecentStoriesPost
        key={recentRefOne.slug}
        slug={recentRefOne.slug}
        index={0}
        block={block}
        recentArticleField="recentArticleOne"
        {...recentRefOne}
      />
      <RecentStoriesPost
        key={recentRefTwo.slug}
        slug={recentRefTwo.slug}
        index={1}
        block={block}
        recentArticleField="recentArticleTwo"
        {...recentRefTwo}
      />
      <RecentStoriesPost
        key={recentRefThree.slug}
        slug={recentRefThree.slug}
        index={1}
        block={block}
        recentArticleField="recentArticleThree"
        {...recentRefThree}
      />
      <RecentStoriesPost
        key={recentRefFour.slug}
        slug={recentRefFour.slug}
        index={1}
        block={block}
        recentArticleField="recentArticleFour"
        {...recentRefFour}
      />
      <RecentStoriesPost
        key={recentRefFive.slug}
        slug={recentRefFive.slug}
        index={1}
        block={block}
        recentArticleField="recentArticleFive"
        {...recentRefFive}
      />
      <RecentStoriesPost
        key={recentRefSix.slug}
        slug={recentRefSix.slug}
        index={1}
        block={block}
        recentArticleField="recentArticleSix"
        {...recentRefSix}
      />
    </div>

  );

}

function FeaturedStoriesList({posts, block})
{
  let refPostOne = block.dualColFeedArticleOne;
  let recentRefOne =  posts.filter(post => post.frontmatter.title === refPostOne.title)[0];
  let refPostTwo = block.dualColFeedArticleTwo;
  let recentRefTwo =  posts.filter(post => post.frontmatter.title === refPostTwo.title)[0];
  let refPostThree = block.dualColFeedArticleThree;
  let recentRefThree =  posts.filter(post => post.frontmatter.title === refPostThree.title)[0];
  let refPostFour = block.dualColFeedArticleFour;
  let recentRefFour =  posts.filter(post => post.frontmatter.title === refPostFour.title)[0];
  let refPostFive = block.dualColFeedArticleFive;
  let recentRefFive =  posts.filter(post => post.frontmatter.title === refPostFive.title)[0];
  let refPostSix = block.dualColFeedArticleSix;
  let recentRefSix =  posts.filter(post => post.frontmatter.title === refPostSix.title)[0];

  return (
    <div className={styles.featuredfeedlist}>
      <FeaturedStoriesPost
        key={recentRefOne.slug}
        slug={recentRefOne.slug}
        index={0}
        block={block}
        featuredStoryArticle="dualColFeedArticleOne"
        {...recentRefOne}
      />
      <FeaturedStoriesPost
        key={recentRefTwo.slug}
        slug={recentRefTwo.slug}
        index={0}
        block={block}
        featuredStoryArticle="dualColFeedArticleTwo"
        {...recentRefTwo}
      />
      <FeaturedStoriesPost
        key={recentRefThree.slug}
        slug={recentRefThree.slug}
        index={0}
        block={block}
        featuredStoryArticle="dualColFeedArticleThree"
        {...recentRefThree}
      />
      <FeaturedStoriesPost
        key={recentRefFour.slug}
        slug={recentRefFour.slug}
        index={0}
        block={block}
        featuredStoryArticle="dualColFeedArticleFour"
        {...recentRefFour}
      />
      <FeaturedStoriesPost
        key={recentRefFive.slug}
        slug={recentRefFive.slug}
        index={0}
        block={block}
        featuredStoryArticle="dualColFeedArticleFive"
        {...recentRefFive}
      />
      <FeaturedStoriesPost
        key={recentRefSix.slug}
        slug={recentRefSix.slug}
        index={0}
        block={block}
        featuredStoryArticle="dualColFeedArticleSix"
        {...recentRefSix}
      />
    </div>

  );

}


function MostReadStoriesList({posts, block})
{
  let refPostOne = block.lowerFeedArticleOne;
  let recentRefOne =  posts.filter(post => post.frontmatter.title === refPostOne.title)[0];
  let refPostTwo = block.lowerFeedArticleTwo;
  let recentRefTwo =  posts.filter(post => post.frontmatter.title === refPostTwo.title)[0];
  let refPostThree = block.lowerFeedArticleThree;
  let recentRefThree =  posts.filter(post => post.frontmatter.title === refPostThree.title)[0];
  let refPostFour = block.lowerFeedArticleFour;
  let recentRefFour =  posts.filter(post => post.frontmatter.title === refPostFour.title)[0];
  let refPostFive = block.lowerFeedArticleFive;
  let recentRefFive =  posts.filter(post => post.frontmatter.title === refPostFive.title)[0];
  let refPostSix = block.lowerFeedArticleSix;
  let recentRefSix =  posts.filter(post => post.frontmatter.title === refPostSix.title)[0];

  return (
    <div className={styles.featuredfeedlist}>
      <FeaturedStoriesPost
        key={recentRefOne.slug}
        slug={recentRefOne.slug}
        index={0}
        block={block}
        featuredStoryArticle="lowerFeedArticleOne"
        {...recentRefOne}
      />
      <FeaturedStoriesPost
        key={recentRefTwo.slug}
        slug={recentRefTwo.slug}
        index={0}
        block={block}
        featuredStoryArticle="lowerFeedArticleTwo"
        {...recentRefTwo}
      />
      <FeaturedStoriesPost
        key={recentRefThree.slug}
        slug={recentRefThree.slug}
        index={0}
        block={block}
        featuredStoryArticle="lowerFeedArticleThree"
        {...recentRefThree}
      />
      <FeaturedStoriesPost
        key={recentRefFour.slug}
        slug={recentRefFour.slug}
        index={0}
        block={block}
        featuredStoryArticle="lowerFeedArticleFour"
        {...recentRefFour}
      />
      <FeaturedStoriesPost
        key={recentRefFive.slug}
        slug={recentRefFive.slug}
        index={0}
        block={block}
        featuredStoryArticle="lowerFeedArticleFive"
        {...recentRefFive}
      />
      <FeaturedStoriesPost
        key={recentRefSix.slug}
        slug={recentRefSix.slug}
        index={0}
        block={block}
        featuredStoryArticle="lowerFeedArticleSix"
        {...recentRefSix}
      />
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

function LowerFeedStoriesList({posts})
{
  return (
    <div className={styles.lowerfeedlist}>
      {posts.slice(14, 20).map(({ slug, ...post }, index) => (
        <LowerFeedStoriesPost key={slug} slug={slug} index={index} {...post} />
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

function DualColFeedBlock({posts, block, isSingleColumn})
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
                <FeaturedStoriesList posts={posts} isSingleColumn={isSingleColumn} block={block} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function LowerFeedBlock({posts, homePost, block, isSingleColumn})
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
                <MostReadStoriesList posts={posts} block={block} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


function HeroStoryBlock({slug, timecode, frontmatter, block})
{
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner, category, author } = frontmatter;

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
  const { posts, props } = useLoaderData();
  const { data } = useTina(props);
  console.log(data);
  const homePost = data.home;
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  return (
    <article className={styles.articles}>
      {homePost.blocks?.map((block) => {
        console.log(block?.__typename);
          switch (block?.__typename) {
            case "HomeBlocksHeroStories" : {
              const featuredPost = block.featuredArticle;
              const featuredPostRef =  posts.filter(post => post.frontmatter.title === featuredPost.title)[0];
              featuredPostRef.frontmatter.featured = true;
              return <HeroStoriesBlock posts={posts} isSingleColumn={isSingleColumn} featured={featuredPostRef} block={block} />;
            }
            case "HomeBlocksDualColFeed" : {
              return <DualColFeedBlock posts={posts} isSingleColumn={isSingleColumn} block={block} />;
            }
            case "HomeBlocksHeroStory" : {
              const heroStory = block.heroStoryArticle;
              const heroStoryRef =  posts.filter(post => post.frontmatter.title === heroStory.title)[0];
              return <HeroStoryBlock isSingleColumn={isSingleColumn} block={block} {...heroStoryRef} />;
            }
            case "HomeBlocksLowerFeed" : {
              return <LowerFeedBlock posts={posts} isSingleColumn={isSingleColumn} homePost={homePost} block={block} />;
            }
          }
        }

      )

      }


      <Footer />
    </article>
  );
}
