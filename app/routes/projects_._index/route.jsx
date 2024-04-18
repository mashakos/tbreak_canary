import mercbenzTexture2Large from '~/assets/mercbenz-app-large.jpg';
import mercbenzTexture2Placeholder from '~/assets/mercbenz-app-placeholder.jpg';
import mercbenzTexture2 from '~/assets/mercbenz-app.jpg';
import mercbenzTextureLarge from '~/assets/mercbenz-app-back.jpg';
import mercbenzTexturePlaceholder from '~/assets/mercbenz-app-placeholder.jpg';
import mercbenzTexture from '~/assets/mercbenz-app-back.jpg';
import masdarTextureLarge from '~/assets/masdar-app-large.jpg';
import masdarTexturePlaceholder from '~/assets/masdar-app-placeholder.jpg';
import masdarTexture from '~/assets/masdar-app.jpg';
import reebokTextureLarge from '~/assets/reebok-app-large.jpg';
import reebokTexturePlaceholder from '~/assets/reebok-app-placeholder.jpg';
import reebokTexture from '~/assets/reebok-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './projects.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Projects = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [projectOne, projectTwo, projectThree];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });


    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.projects}>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Reebok #GymIsEverywhere Microsite"
        description="How do you make fitness advocates feel more human in a digital world? Reebok looked to engage with its audience, breaking through the clutter with a meaningful brand purpose and mission."
        buttonText="View project"
        buttonLink="/projects/rbk-giew"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Masdar app',
          textures: [
            {
              srcSet: `${reebokTexture} 800w, ${reebokTextureLarge} 1920w`,
              placeholder: reebokTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Mercedes-Benz Messenger Bot"
        description="To enhance brand experience with a younger audience, Mercedes-Benz needed an innovative solution to handle custom queries and requests in real-time."
        buttonText="View project"
        buttonLink="/projects/merc-ai-msg"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${mercbenzTexture} 375w, ${mercbenzTextureLarge} 750w`,
              placeholder: mercbenzTexturePlaceholder,
            },
            {
              srcSet: `${mercbenzTexture2} 375w, ${mercbenzTexture2Large} 750w`,
              placeholder: mercbenzTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Masdar Corporate Website"
        description="Developing a fully responsive, cross-browser, mobile friendly website."
        buttonText="View project"
        buttonLink="/projects/masdar"
        model={{
          type: 'laptop',
          alt: 'Masdar Corporate Website',
          textures: [
            {
              srcSet: `${masdarTexture} 1280w, ${masdarTextureLarge} 2560w`,
              placeholder: masdarTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};

export { Projects as default };
