import { VisuallyHidden } from '~/components/visually-hidden';
import { useAnimate, useMotionValue, useInView, useTransform } from 'framer-motion';
import { memo, useEffect, useRef, forwardRef } from 'react';
import { delay } from '~/utils/delay';
import { classes } from '~/utils/style';
import styles from './count-anim-block.module.css';


export function CountAnimBlock({
                                 from,
                                 to,
                                 desc: textDescription = "",
                                  delay: startDelay = 0,
                                }) {
  //const ref = useRef(null);
  const [ref, animate] = useAnimate();
  const count = useMotionValue(from);
  const countValue = useTransform(count, (latest) => {
    return Math.round(latest);
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const startCount = async () => {
    await delay(startDelay);
    animate(count, to, { duration: 200 });
  };


  useEffect(() => {
    if (isInView) {
      startCount();
    }
  }, [count, isInView]);

  useEffect(
    () =>
      countValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [countValue]
  );
  const Headinglevel = 3;
  const clampedLevel = Math.min(Math.max(Headinglevel, 0), 5);
  const Component = `h${Math.max(clampedLevel, 1)}`;

  return (
      <div
        className={ref.current ? styles.countTimer : styles.countHidden}
      >
        <Component className={classes(styles.heading)} data-level='3' ref={ref} />
        <div
          className={classes(styles.textRow)}
          data-justify={'center'}
        >
          <span>{textDescription}</span>
        </div>
      </div>
  );
}
