import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { useEffect, useRef, useMemo, Suspense, lazy, useState } from 'react';
import config from '~/config.json';
import styles from './crystalball.module.css';


import legendSprLarge from '~/assets/legend-bg.jpg';
import backgroundSprLarge from '~/assets/main-bg-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import legendSpr from '~/assets/legend-bg.jpg';
import backgroundSpr from '~/assets/main-bg.jpg';
import videoSprMotionLarge from '~/assets/tinacmseditor.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/tinacmseditor.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  HomeBackground,
  HomeContainer,
  HomeHeader,
  HomeImage,
  HomeSection,
  HomeSectionColumns,
  HomeSectionContent,
  HomeSectionHeading,
  HomeSectionText,
  HomeTextRow,
} from '~/layouts/home';
import { media } from '~/utils/style';
import { ProjectSectionHeading } from '~/layouts/project/index.js';
import {DelosianLogo} from '~/routes/home/home-content/delosian-logo.jsx';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);


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
    title: 'Crystall Ball Test',
    description: `The official website of ${config.name}  ${config.role}. We weave digital dreams into reality.`,
  });
};

export const CrystalBall = () => {

  return (
    <div className={styles.home}>

      <Suspense>
        <Earth
          className={styles.earth}
          hideMeshes={useMemo(
            () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
            []
          )}
          position={useMemo(() => [0, 0, 0], [])}
          labels={useMemo(
            () => [
              {
                position: [-0.3, 0.26, 0.45],
                text: 'Dubai',
                hidden: true,
              },
              {
                position: [-0.5, 0.275, 0.275],
                text: 'Cairo',
                hidden: true,
              },
              {
                position: [0.16, 0.44, -0.4],
                text: 'Utah',
                hidden: true,
              },
            ],
            []
          )}
          scale={0.6}
        >
          <EarthSection
            scrim
            animations={['0:loop']}
            camera={[0, 0, 1.5]}
            meshes={['Atmosphere', 'EarthFull']}
          >
            <HomeSection>
              <HomeSectionContent>
                <HomeTextRow center>
                  <HomeSectionHeading>
                    Artistry in Code
                  </HomeSectionHeading>
                  <HomeSectionText>
                    Our developers are modern-day artisans, crafting elegant frameworks and seamless functionality. Like Leto, they channel ancient wisdom into lines of Rust, JavaScript, and CSS.
                  </HomeSectionText>
                </HomeTextRow>
              </HomeSectionContent>
            </HomeSection>
          </EarthSection>
          <EarthSection
            animations={['0:loop']}
            camera={[0, 0, 2.0]}
            meshes={['Atmosphere', 'EarthFull']}
          />
          <HomeSection>
            <HomeSectionContent width="xl">
              <HomeTextRow justify="start" width="s">
                <HomeSectionHeading level={4} as="h3">
                  Web Development
                </HomeSectionHeading>
                <HomeSectionText>
                  We work closely with our clients to create outstanding websites. From content management to e-commerce, the flexibility of our in-house tech stack allows for tailored solutions.
                </HomeSectionText>
              </HomeTextRow>
            </HomeSectionContent>
          </HomeSection>
          <EarthSection
            animations={['0:loop']}
            camera={[1.14, -1.39, 0.94]}
            meshes={['Atmosphere', 'EarthFull']}
          >
            <HomeSection>
              <HomeSectionContent width="xl">
                <HomeTextRow justify="end" width="s">
                  <HomeSectionHeading level={4} as="h3">
                    CMS & CRM Systems
                  </HomeSectionHeading>
                  <HomeSectionText>
                    Managing content and relationships with finesse.
                  </HomeSectionText>
                </HomeTextRow>
              </HomeSectionContent>
            </HomeSection>
          </EarthSection>
          <EarthSection
            animations={['0:loop']}
            camera={[1.17, 0.69, -1.47]}
            meshes={['Atmosphere', 'EarthFull']}
            labels={[
              'Dubai',
              'Cairo',
              'Utah',
            ]}
          >
            <HomeSection>
              <HomeSectionContent width="xl">
                <HomeTextRow justify="start" width="s">
                  <HomeSectionHeading level={4} as="h3">
                    Global Talent
                  </HomeSectionHeading>
                  <HomeSectionText>
                    Our team of talented developers bring passion and diverse experiences from locations across the globe.
                  </HomeSectionText>
                </HomeTextRow>
              </HomeSectionContent>
            </HomeSection>
            <HomeSection>
              <HomeSectionContent width="xl">
                <HomeTextRow justify="end" width="s">
                  <HomeSectionHeading level={4} as="h3">
                    Mobile Applications
                  </HomeSectionHeading>
                  <HomeSectionText>
                    Building apps that enchant and empower. We build with cross-platform and a UX first approach in mind.
                  </HomeSectionText>
                </HomeTextRow>
              </HomeSectionContent>
            </HomeSection>
          </EarthSection>
          <EarthSection
            animations={['0:loop']}
            camera={[-1.81, 0.51, 0.43]}
            meshes={['Atmosphere', 'EarthFull']}
            labels={[
              'Dubai',
              'Cairo',
              'Utah',
            ]}
          />
          <EarthSection
            animations={['0:loop']}
            camera={[0.37, 1.02, 0.84]}
            meshes={['Atmosphere', 'EarthFull']}
          >
            <HomeSection>
              <HomeSectionContent width="xl">
                <HomeTextRow justify="start" width="s">
                  <HomeSectionHeading level={4} as="h3">
                    SEO & Analytics
                  </HomeSectionHeading>
                  <HomeSectionText>
                    Crafting bespoke strategies based on your industry needs and target audience. Our SEO wizards with their wealth of knowledge are focused on one goal - turning clicks into conversions.
                  </HomeSectionText>
                </HomeTextRow>
              </HomeSectionContent>
            </HomeSection>
          </EarthSection>
          <EarthSection
            scrimReverse
            animations={['0:loop']}
            camera={[0.37, 1.02, 1.84]}
            meshes={['Atmosphere', 'EarthFull']}
          />
        </Earth>
      </Suspense>

      <Footer />
    </div>
  );
};

export {CrystalBall as default};