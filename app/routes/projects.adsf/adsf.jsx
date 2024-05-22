// import genericAnnotationLarge from '~/assets/generic-annotation-large.webp';
// import genericAnnotationPlaceholder from '~/assets/generic-annotation-placeholder.png';
// import genericAnnotation from '~/assets/generic-annotation.webp';
// import masdarAppLarge from '~/assets/masdarlanding.mp4';
// import masdarAppPlaceholder from '~/assets/masdar-background-placeholder.jpg';
// import masdarApp from '~/assets/masdarlanding.mp4';
// import masdarAppCodingLarge from '~/assets/masdar-coding-large.webp';
// import masdarAppCodingPlaceholder from '~/assets/masdar-coding-placeholder.jpg';
import css3IE7 from '~/assets/css3ie7.webp';
import ie7 from '~/assets/ie7.webp';
import css3IE7Placeholder from '~/assets/css3ie7-placeholder.jpg';
import ie7Placeholder from '~/assets/ie7-placeholder.jpg';
// import masdarAppUItrustLarge from '~/assets/masdar-uitrust.webp';
// import masdarAppUItrustPlaceholder from '~/assets/masdar-uitrust-placeholder.jpg';
// import genericBackgroundBarLarge from '~/assets/generic-background-bar-large.webp';
// import genericBackgroundBarPlaceholder from '~/assets/generic-background-bar-placeholder.jpg';
// import genericBackgroundBar from '~/assets/generic-background-bar.webp';
import pieJS from '~/assets/piejs.webp';
import pieJSPlaceholder from '~/assets/piejs-placeholder.jpg';
import genericBackgroundLarge from '~/assets/generic-background-large.webp';
import genericBackgroundPlaceholder from '~/assets/generic-background-placeholder.jpg';
import genericBackground from '~/assets/generic-background.webp';
// import genericIrlPlaceholder from '~/assets/generic-irl-placeholder.jpg';
// import genericIrl from '~/assets/generic-irl.webp';
// import genericSidebarAnnotationsLarge from '~/assets/generic-sidebar-annotations-large.webp';
// import genericSidebarAnnotationsPlaceholder from '~/assets/generic-sidebar-annotations-placeholder.png';
// import genericSidebarAnnotations from '~/assets/generic-sidebar-annotations.webp';
// import genericSidebarLayersLarge from '~/assets/generic-sidebar-layers-large.webp';
// import genericSidebarLayersPlaceholder from '~/assets/generic-sidebar-layers-placeholder.png';
// import genericSidebarLayers from '~/assets/generic-sidebar-layers.webp';
// import genericSlidesLarge from '~/assets/generic-slides-large.webp';
// import genericSlidesPlaceholder from '~/assets/generic-slides-placeholder.jpg';
// import genericSlides from '~/assets/generic-slides.webp';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './adsf.module.css';
import { List, ListItem } from '~/components/list/index.js';

import innerText from 'react-innertext';

const title = 'Abu Dhabi Science Festival 2012';
const description = 'The Abu Dhabi Science Festival, organized by the Abu Dhabi Technology Committee (TDC) was first held in 2011. The festival features many exhibitions, workshops, shows and signature events, as well as school tours for children around the city.';
  'of the client, not finding a solution would have forced the team to cut\n' +
  'back on features in order to meet the client’s required spec.';
const abstract ='Developing a modern HTML5 website in the age of Internet Explorer 7.';
const textureLarge = 'adsf-large.webp';
const texturePlaceholder = 'adsf-placeholder.jpg';
const texture = 'adsf.webp';
const texture2 = '';
const texture2Large = '';
const texture2Placeholder = '';
const roles = ['UX Design', 'Interface Design', 'SEO', 'Full Stack Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

const ProjHTML = (
  <>
    <ProjectSection>
      <ProjectSectionContent>
        <ProjectTextRow>
          <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
          <ProjectSectionText>
            For the festival's second year, we were tasked by the Abu Dhabi Technology Committee (TDC) with developing an engaging, interactive portal filled with science themed quizzes and educational mini-games. One challenge given to us: the website portal must be feature complete and compatible with government desktop PCs, which at the time ran Internet Explorer 7.
          </ProjectSectionText>
        </ProjectTextRow>
      </ProjectSectionContent>
    </ProjectSection>

    <ProjectSection>
      <ProjectSectionColumns centered className={styles.columns}>
        <div className={styles.imagesText}>
          <ProjectSectionHeading>The problem</ProjectSectionHeading>
          <ProjectSectionText>
            Meeting the client's requirements using conventional implementations would have required maintaining dual code bases: one for modern browsers and another for Internet Explorer 7.
          </ProjectSectionText>
        </div>
        <div className={styles.sidebarImages}>
          <Image
            className={styles.sidebarImage}
            srcSet={`${ie7} 350w, ${ie7} 700w`}
            width={350}
            height={750}
            placeholder={ie7Placeholder}
            alt="Internet Explorer 7."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
          />
          <Image
            className={styles.sidebarImage}
            srcSet={`${css3IE7} 350w, ${css3IE7} 700w`}
            width={350}
            height={750}
            placeholder={css3IE7Placeholder}
            alt="IE7 and CSS3."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
          />
        </div>
      </ProjectSectionColumns>
    </ProjectSection>


    <ProjectSection light>
      <ProjectSectionContent>
        <ProjectTextRow>
          <ProjectSectionHeading>Lateral Thinking</ProjectSectionHeading>
          <ProjectSectionText>
            To bridge this gap, our developers used an "attached behavior engine" library - PIE.js - which leverages Internet Explorer's DirectX Media API to simulate CSS 3.0 properties. This script allows for the rendering of advanced visual effects such as rounded corners, drop shadows, and gradients, which are otherwise not possible in IE7.
          </ProjectSectionText>
        </ProjectTextRow>
        <Image
          srcSet={`${pieJS} 800w, ${pieJS} 1920w`}
          width={800}
          height={500}
          placeholder={pieJSPlaceholder}
          alt="Demonstration of the Pie.js library."
          sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
        />
      </ProjectSectionContent>
    </ProjectSection>

    <ProjectSection>
      <ProjectSectionContent>
        <ProjectTextRow>
          <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
          <ProjectSectionText>
            The use of PIE.js enabled our developers to maintain a single codebase while ensuring the site looks consistent across all browsers, old and new. We delievered a modern HTML5 website portal with all the requirements achieved. Supporting IE 7.0 was an important requirement
            of the client, not finding a solution would have forced the team to cut
            back on features in order to meet the client’s required spec.
          </ProjectSectionText>
        </ProjectTextRow>
        <Image
          src={`/static/project-assets/${texture}`}
          width={940}
          height={500}
          placeholder={`/static/project-assets/${texturePlaceholder}`}
          alt="ADSF Homepage"
        />
      </ProjectSectionContent>
    </ProjectSection>
  </>
);

function ProjContent() {
  return ProjHTML;
}

const bodytext =  innerText(ProjHTML);


export const Adsf = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.adsf}>
        <ProjectBackground
          src={genericBackground}
          srcSet={`${genericBackground} 1280w, ${genericBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={genericBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          bodytext={bodytext}
          abstract={abstract}
          texture={texture}
          textureLarge={textureLarge}
          texturePlaceholder={texturePlaceholder}
          texture2={texture2}
          texture2Large={texture2Large}
          texture2Placeholder={texture2Placeholder}
        />

        <ProjContent />

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
