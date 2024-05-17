import { Button } from '~/components/button';
import { Icon } from '~/components/icon';
import { Text } from '~/components/text';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { useRef, useState } from 'react';
import { Highlight, themes } from "prism-react-renderer";

import styles from './codeblockTina.module.css';

export const CodeblockTina = props => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  //const lang = props.className?.split('-')[1];
  const lang = props.lang;

  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={styles.code} data-theme={theme}>
       {!!lang && (
         <Text secondary size="s" className={styles.lang}>
           {lang}
         </Text>
       )}
      <Highlight
        theme={themes.oneDark}
        code={props.value}
        language={props.lang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre ref={elementRef}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/*<span>{i + 1}</span>*/}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
        )}
      </Highlight>
      <div className={styles.actions}>
        <Button iconOnly onClick={handleCopy} aria-label="Copy">
              <span className={styles.copyIcon}>
                {/*{console.log(props.value)}*/}
                <Transition in={!copied}>
                  {({ visible, nodeRef }) => (
                    <Icon ref={nodeRef} icon="copy" data-visible={visible} />
                  )}
                </Transition>
                <Transition in={copied}>
                  {({ visible, nodeRef }) => (
                    <Icon ref={nodeRef} icon="check" data-visible={visible} />
                  )}
                </Transition>
              </span>
        </Button>
      </div>
    </div>
  );
};
