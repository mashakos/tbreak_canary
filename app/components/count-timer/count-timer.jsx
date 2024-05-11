import { VisuallyHidden } from '~/components/visually-hidden';
import { useReducedMotion, useMotionValue, useInView, useSpring } from 'framer-motion';
import { memo, useEffect, useRef, forwardRef } from 'react';
import { delay } from '~/utils/delay';
import { classes } from '~/utils/style';
import styles from './count-timer.module.css';


export function CountTimer({
                                  value,
                                  direction = "up",
                                  delay: startDelay = 0,
                                }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 1,
    stiffness: 1,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const startSpring = async () => {
    await delay(startDelay);
    motionValue.set(direction === "down" ? 0 : value);
  };


  useEffect(() => {
    if (isInView) {
      startSpring();
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <span ref={ref} />;
}
