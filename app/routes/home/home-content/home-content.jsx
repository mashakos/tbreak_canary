import legendSprLarge from '~/assets/legend-bg.jpg';
import backgroundSprLarge from '~/assets/main-bg-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import legendSpr from '~/assets/legend-bg.jpg';
import backgroundSpr from '~/assets/main-bg.jpg';
import videoSprMotionLarge from '~/assets/pepsimixer.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/pepsimixer.mp4';
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
import { Footer } from '~/components/footer';
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
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './home-content.module.css';
import { ProjectSectionHeading } from '~/layouts/project/index.js';
import {DelosianLogo} from '~/routes/home/home-content/delosian-logo.jsx';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Designing the future of education';
const description =
  'I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Motion Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const HomeContent = ({ id, sectionRef, ...rest }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <HomeContainer
        ref={sectionRef}
        id={id}
      >
        <HomeBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />


        <HomeSection>
          <HomeSectionContent>
          <HomeTextRow center noMargin>
            <ProjectSectionHeading>Design + Develop</ProjectSectionHeading>
            <HomeSectionText>
              At Delosian, we weave digital dreams into reality. Our agency is more than code commits and pixels on a screen; it is a canvas where innovation dances with creativity. Allow us to introduce ourselves—a fusion of ancient legend and cutting-edge design
            </HomeSectionText>
          </HomeTextRow>
          </HomeSectionContent>
        </HomeSection>
        <HomeSection>
          <HomeSectionContent>
            <HomeSectionColumns width="full">
              <HomeSectionContent width="full">
                <HomeTextRow width="s">
                  <HomeSectionHeading>The Legend</HomeSectionHeading>
                  <HomeSectionText>
                    In Greek mythology, Delos was the mystical floating island shaped by Poseidon to be the birthplace of Artemis and Apollo, the twin offspring of Zeus by Leto. Apollo shaped humanity's endeavours in art, poetry, truth and light. Artemis, Appollo's twin sister, was the goddess of the hunt.
                  </HomeSectionText>
                </HomeTextRow>
              </HomeSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${legendSpr} 1280w, ${legendSprLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="The mythical island of Delos."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </HomeSectionColumns>
          </HomeSectionContent>
          </HomeSection>
        <HomeSection>
          <HomeSectionContent>
            <div className={styles.logoContainer}>
              <DelosianLogo
                role="img"
                aria-label="The Delosian logo"
              />
            </div>
          <HomeTextRow center noMargin>
            <HomeSectionText>
              Just like our namesake, we believe that our agency serves as a space where our talented artists and developers shape great work. We are the fountainhead from which immersive experiences transcend the ordinary.
            </HomeSectionText>
          </HomeTextRow>
          </HomeSectionContent>
        </HomeSection>
        <ThemeProvider theme="dark" data-invert>
          <HomeSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <HomeSectionColumns width="full">
              <HomeSectionContent width="full">
                <HomeTextRow width="s">
                  <HomeSectionHeading>Design Alchemy</HomeSectionHeading>
                  <HomeSectionText>
                    Our UI/UX designers blend aesthetics <br/>
                    with intuition. They sculpt interfaces that breathe life into pixels, transforming data into emotion. Just as Leto shaped Delos, we mold wireframes into captivating journeys.
                  </HomeSectionText>
                </HomeTextRow>
              </HomeSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </HomeSectionColumns>
          </HomeSection>
        </ThemeProvider>
          <HomeSection>
            <HomeSectionColumns>
              <div className={styles.sidebarImages}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={
                    isDark
                      ? `${imageSprSchema2Dark} 260w, ${imageSprSchema2DarkLarge} 520w`
                      : `${imageSprSchema2Light} 260w, ${imageSprSchema2LightLarge} 520w`
                  }
                  width={260}
                  height={660}
                  placeholder={
                    isDark
                      ? imageSprSchema2DarkPlaceholder
                      : imageSprSchema2LightPlaceholder
                  }
                  alt="Configuration options for a component."
                  sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                />
                <Image
                  className={styles.sidebarImage}
                  srcSet={
                    isDark
                      ? `${imageSprSchema1Dark} 260w, ${imageSprSchema1DarkLarge} 520w`
                      : `${imageSprSchema1Light} 260w, ${imageSprSchema1LightLarge} 520w`
                  }
                  width={260}
                  height={660}
                  placeholder={
                    isDark
                      ? imageSprSchema1DarkPlaceholder
                      : imageSprSchema1LightPlaceholder
                  }
                  alt="Configuration options for text."
                  sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                />
              </div>
              <HomeSectionContent>
                <HomeTextRow>
                  <HomeSectionHeading>
                    The Palette of Innovation
                  </HomeSectionHeading>
                  <HomeSectionText>
                    Our color palette extends beyond the RGB spectrum. It includes curiosity, experimentation, and the courage to break boundaries.
                  </HomeSectionText>
                </HomeTextRow>
              </HomeSectionContent>
            </HomeSectionColumns>
          </HomeSection>
        <ThemeProvider theme="dark" data-invert>
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
        </ThemeProvider>
      </HomeContainer>
    </>
  );
};
