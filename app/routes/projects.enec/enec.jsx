import enecStats from '~/assets/enec-stats.jpg';
import enecStatsLarge from '~/assets/enec-stats-large.jpg';
import enecStatsPlaceholder from '~/assets/enec-stats-placeholder.jpg';
import enecInner from '~/assets/enec-inner.jpg';
import enecInnerLarge from '~/assets/enec-inner-large.jpg';
import enecInnerPlaceholder from '~/assets/enec-inner-placeholder.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import {CountAnimBlock } from '~/components/count-anim-block';
import { Fragment } from 'react';
import { media, cssProps, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './enec.module.css';

const title = 'Emirates Nuclear Energy Corporation';
const description = 'The Emirates Nuclear Energy Corporation (ENEC) is the entity responsible for the deployment and ownership of nuclear energy plants in the United Arab Emirates (UAE). ENEC was established to address the country\'s growing demand for electricity while diversifying the nation\'s energy supply and delivering greater energy security.';
const bodytext = 'The Emirates Nuclear Energy Corporation (ENEC) is the entity responsible for the deployment and ownership of nuclear energy plants in the United Arab Emirates (UAE). ENEC was established to address the country\'s growing demand for electricity while diversifying the nation\'s energy supply and delivering greater energy security. A requirement for the website, re-usable component blocks that render statistics and numerical information into an easily digestible and attractive format, similar to the concept of infographics in marketing. A series of layouts were composed to increase impact when conveying sets of data. We successfully realised the client\'s vision for the website.';
const abstract ='A content rich, multi-language website.';
const textureLarge = 'enec-large.jpg';
const texturePlaceholder = 'enec-placeholder.jpg';
const texture = 'enec.jpg';
const texture2 = '';
const texture2Large = '';
const texture2Placeholder = '';
const roles = ['UX Design', 'Interface Design', 'SEO', 'Full Stack Development'];
const initDelay = 300;


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Enec = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.enec}>
        <ProjectBackground
          src={enecStats}
          srcSet={`${enecStats} 1280w, ${enecStatsLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={enecStatsPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          url={"https://www.enec.gov.ae/"}
          bodytext={bodytext}
          abstract={abstract}
          texture={texture}
          textureLarge={textureLarge}
          texturePlaceholder={texturePlaceholder}
          texture2={texture2}
          texture2Large={texture2Large}
          texture2Placeholder={texture2Placeholder}
        />


        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`/static/project-assets/${texture} 375w, /static/project-assets/${textureLarge} 1920w`}
              width={375}
              height={814}
              placeholder={`/static/project-assets/${texturePlaceholder}`}
              alt="The ENEC website."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>


        <ProjectSection>
          <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Data rich</ProjectSectionHeading>
                <ProjectSectionText>
                  A requirement for the website, re-usable component blocks that render statistics and numerical information into an easily digestible and attractive format, similar to the concept of infographics in marketing.
                </ProjectSectionText>
              </ProjectTextRow>
              <ProjectTextRow>
                <ProjectSectionColumns className={styles.columns}>
                  <div
                    // ref={countTimer1Ref}
                    style={cssProps({ initDelay: numToMs(initDelay) })}
                  >
                    <CountAnimBlock
                      from={0} to={658367952}
                      desc={`GWh of clean electricity`}
                    />
                  </div>
                  <div
                    // ref={countTimer2Ref}
                    style={cssProps({ initDelay: numToMs(initDelay+200) })}
                  >
                    <CountAnimBlock
                      from={0} to={230243914}
                      desc={`Kilotonnes of CO2 prevented`}
                    />
                  </div>
                </ProjectSectionColumns>
              </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Visualising Information</ProjectSectionHeading>
              <ProjectSectionText>
                A series of layouts were composed to increase impact when conveying sets of data.
              </ProjectSectionText>
            </ProjectTextRow>
                <Image
                  srcSet={`${enecStats} 800w, ${enecStatsLarge} 1920w`}
                  width={800}
                  height={500}
                  placeholder={enecStatsPlaceholder}
                  alt="Visualising concepts"
                  sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                We successfully realised the client's vision for the website.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${enecInner} 800w, ${enecInnerLarge} 1920w`}
              width={940}
              height={500}
              placeholder={enecInnerPlaceholder}
              alt="ENEC inner page"
            />
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
