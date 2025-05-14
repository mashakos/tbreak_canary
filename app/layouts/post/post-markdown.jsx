import {CodeblockTina} from '~/components/codeblockTina';
import { Code } from '~/components/code';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Link } from '~/components/link';
import { TinaLink } from '~/components/link/tinalink.jsx';
import { List, ListItem } from '~/components/list';
import { Text } from '~/components/text';
import { Children } from 'react';
import styles from './post-markdown.module.css';
import { Link as RouterLink } from '@remix-run/react';
import { LicItem } from '~/components/list/list.jsx';

const PostHeadingLink = ({ id }) => {
  return (
    <RouterLink className={styles.headingLink} to={`#${id}`} aria-label="Link to heading">
      <Icon icon="link" />
    </RouterLink>
  );
};

const PostH1 = ({ children, id, ...rest }) => {
  const idText = children.props.content[0].text.toLowerCase().replace(/([^a-z0-9 -])/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-');
  return (
    <Heading className={styles.heading} id={idText} level={2} as="h1" {...rest}>
      <PostHeadingLink id={idText} />
      {children}
    </Heading>
  );
};

const PostH2 = ({ children, id, ...rest }) => {
  const idText = children.props.content[0].text.toLowerCase().replace(/([^a-z0-9 -])/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-');
  return (
  <Heading className={styles.heading} id={idText} level={3} as="h2" {...rest}>
    <PostHeadingLink id={idText} />
    {children}
  </Heading>
  );
};

const PostH3 = ({ children, id, ...rest }) => {
  const idText = children.props.content[0].text.toLowerCase().replace(/([^a-z0-9 -])/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-');
  return (
    <Heading className={styles.heading} id={idText} level={4} as="h3" {...rest}>
      <PostHeadingLink id={idText} />
      {children}
    </Heading>
  );
};

const PostH4 = ({ children, id, ...rest }) => {
  const idText = children.props.content[0].text.toLowerCase().replace(/([^a-z0-9 -])/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-');
  return (
    <Heading className={styles.heading} id={idText} level={5} as="h4" {...rest}>
      <PostHeadingLink id={idText} />
      {children}
    </Heading>
  );
};

const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];

  // Prevent `img` being wrapped in `p`
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }

  return (
    <Text className={styles.paragraph} size="l" as="p" {...rest}>
      {children}
    </Text>
  );
};

const PostLink = ({ ...props }) => <Link {...props} />;

const PostTinaLink = ({ ...props }) => <TinaLink {...props} />;

const PostUl = props => {
  return <List className={styles.list} {...props} />;
};

const PostOl = props => {
  return <List className={styles.list} ordered {...props} />;
};

const PostLi = ({ children, ...props }) => {
  return <ListItem {...props}>{children}</ListItem>;
};

const PostLic = ({ children, ...props }) => {
  return <LicItem {...props}>{children}</LicItem>;
};

const PostCodeBlock = props => {
  return (
    <div className={styles.pre}>
      <CodeblockTina {...props} />
    </div>
  );
};

const PostCode = ({ children, ...rest }) => (
  <code className={styles.code} {...rest}>
    {children}
  </code>
);

const PostPre = props => {
  return (
    <div className={styles.pre}>
      <Code {...props} />
    </div>
  );
};

const PostBlockquote = props => {
  return <blockquote className={styles.blockquote} {...props} />;
};

const PostHr = props => {
  return <hr className={styles.hr} {...props} />;
};

const PostStrong = props => {
  return <strong className={styles.strong} {...props} />;
};

// changed src to url
// in PostImage:
// const PostImage = ({ src, url, alt, width, height, ...rest }) => {
//   const PostImage = ({ url, url, alt, width, height, ...rest }) => {
//     src={src}
//     src={url}

const PostImage = ({ url, alt, width, height, ...rest }) => {
  console.log(url);
  return (
    <img
      className={styles.image}
      src={url}
      loading="lazy"
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
};

const Embed = ({ src }) => {
  return (
    <div className={styles.embed}>
      <iframe src={src} loading="lazy" title="Embed" />
    </div>
  );
};

export const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostTinaLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  lic: PostLic,
  pre: PostPre,
  code_block: PostCodeBlock,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed,
};
