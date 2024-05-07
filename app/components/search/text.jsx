import { useEffect, useState } from 'react';
import {
  Configure,
  InstantSearch,
  Highlight,
  InfiniteHits,
  SearchBox,
  useSearchBox,
  useHits,
  Index,
} from 'react-instantsearch';
import { typesenseInstantsearchAdapter } from '~/utils/typesense.js';
import { classes, cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './SearchAndFilter.module.css';
import SearchAndFilter from '~/components/search/SearchAndFilter.jsx';
import { Link as RouterLink, useActionData, useNavigation } from '@remix-run/react';
import { Button } from '~/components/button/index.js';
import { Transition } from '~/components/transition';
import { Heading } from '~/components/heading/index.js';
import { Divider } from '~/components/divider/index.js';
import * as PropTypes from 'prop-types';
import { tokens } from '~/components/theme-provider/theme.js';
import { Input } from '~/components/input/index.js';
import { Section } from '~/components/section/index.js';
import { useFormInput } from '~/hooks/index.js';
import { formatDate } from '~/utils/date.js';

export const Text = ({
  children,
  size = 'm',
  as: Component = 'span',
  align = 'auto',
  weight = 'auto',
  secondary,
  className,
  ...rest
}) => {
  return (
    <Component
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}
      data-secondary={secondary}
      {...rest}
    >
      {children}
    </Component>
  );
};




function CustomHits(props) {
  const { hits } = useHits(props);

  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  //string to test whether it's an article or project
  const projectUrlFragment = "projects";

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    hits.map((hit, index) => (
      <article
        className={styles.post}
        style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
        // style={undefined}
      >
        <RouterLink
          unstable_viewTransition
          prefetch="intent"
          // to={hit.slug.indexOf(projectUrlFragment) > 0 ? `${hit.slug}` : `/articles/${hit.slug}`}
          to={hit.slug}
          className={styles.postLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.postDetails}>
            <div aria-hidden className={styles.postDate}>
              <Divider notchWidth="64px" notchHeight="8px" />
              {hit.date &&
                formatDate(hit.date)}
            </div>
            <Heading as="h2" level={4}>
              <Highlight attribute="title" hit={hit} />
              {/*{hit.title}*/}
            </Heading>
            <Text size={'s'} as="p">
              {hit.abstract &&
                <Highlight attribute="abstract" hit={hit} />
              }
              {hit.description &&
                <Highlight attribute="description" hit={hit} />
              }
              {/*{hit.abstract}*/}
            </Text>
            <div className={styles.postFooter}>
              <Button secondary iconHoverShift icon="chevron-right" as="div" type="button">
                {hit.slug.indexOf(projectUrlFragment) >= 0 ? `View Project` : `Read article`}
              </Button>
            </div>
          </div>
        </RouterLink>
      </article>
    ))
  );
}


function CustomSearchBox({ queries, ...props }) {
  const {
    query,
    refine,
    clear,
    // Deprecated
    isSearchStalled,
  } = useSearchBox(props);


  const MAX_MESSAGE_LENGTH = 4096;
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();

  return (
    <Section className={styles.search}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <Input
            required
            multiline
            className={styles.input}
            data-status={status}
            style={getDelay(tokens.base.durationS, initDelay)}
            autoComplete="off"
            label="Search"
            name="search"
            type="search"
            maxLength={MAX_MESSAGE_LENGTH}
            value={query}
            onChange={event => refine(event.currentTarget.value)}
          />

          // <Button
          //       className={styles.button}
          //       key={query}
          //       onClick={() => refine(query)}
          //       // style={getDelay(tokens.base.durationM, initDelay)}
          //       // disabled={sending}
          //       // loading={sending}
          //       loadingText="Searching..."
          //       icon="search"
          //       type="button"
          //     >
          //       Look for "${query}"
          // </Button>

        )}
      </Transition>
    </Section>
  );
}


export const TextSearch = () => {
  const [searchAdapter, setSearchAdapter] = useState();

  useEffect(() => {
    setSearchAdapter(typesenseInstantsearchAdapter);
  }, []);

  if (searchAdapter) {
    return (
      <InstantSearch
        className={styles.form}
        indexName='post'
        searchClient={searchAdapter.searchClient}
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <Configure hitsPerPage={12} />
        {/*<SearchAndFilter />*/}
        <CustomSearchBox className={styles.input} />
        <CustomHits />
        <Index indexName="project">
          <CustomHits />
        </Index>
      </InstantSearch>
    );
  } else {
    return <div>Loading...</div>;
  }
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
