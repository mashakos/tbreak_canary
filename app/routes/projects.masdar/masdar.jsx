// import genericAnnotationLarge from '~/assets/generic-annotation-large.png';
// import genericAnnotationPlaceholder from '~/assets/generic-annotation-placeholder.png';
// import genericAnnotation from '~/assets/generic-annotation.png';
import masdarAppLarge from '~/assets/masdarlanding.mp4';
import masdarAppPlaceholder from '~/assets/masdar-background-placeholder.jpg';
import masdarApp from '~/assets/masdarlanding.mp4';
import masdarAppCodingLarge from '~/assets/masdar-coding-large.jpg';
import masdarAppCodingPlaceholder from '~/assets/masdar-coding-placeholder.jpg';
import masdarAppCoding from '~/assets/masdar-coding.jpg';
import masdarAppUItrust from '~/assets/masdar-uitrust.jpg';
import masdarAppUItrustLarge from '~/assets/masdar-uitrust.jpg';
import masdarAppUItrustPlaceholder from '~/assets/masdar-uitrust-placeholder.jpg';
import genericBackgroundBarLarge from '~/assets/generic-background-bar-large.jpg';
import genericBackgroundBarPlaceholder from '~/assets/generic-background-bar-placeholder.jpg';
import genericBackgroundBar from '~/assets/generic-background-bar.jpg';
import genericBackgroundLarge from '~/assets/generic-background-large.jpg';
import genericBackgroundPlaceholder from '~/assets/generic-background-placeholder.jpg';
import genericBackground from '~/assets/generic-background.jpg';
// import genericIrlPlaceholder from '~/assets/generic-irl-placeholder.jpg';
// import genericIrl from '~/assets/generic-irl.jpg';
// import genericSidebarAnnotationsLarge from '~/assets/generic-sidebar-annotations-large.png';
// import genericSidebarAnnotationsPlaceholder from '~/assets/generic-sidebar-annotations-placeholder.png';
// import genericSidebarAnnotations from '~/assets/generic-sidebar-annotations.png';
// import genericSidebarLayersLarge from '~/assets/generic-sidebar-layers-large.png';
// import genericSidebarLayersPlaceholder from '~/assets/generic-sidebar-layers-placeholder.png';
// import genericSidebarLayers from '~/assets/generic-sidebar-layers.png';
// import genericSlidesLarge from '~/assets/generic-slides-large.jpg';
// import genericSlidesPlaceholder from '~/assets/generic-slides-placeholder.jpg';
// import genericSlides from '~/assets/generic-slides.jpg';
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
import styles from './masdar.module.css';
import { List, ListItem } from '~/components/list/index.js';

const title = 'Masdar Corporate Website';
const description =
  'Launched by the Abu Dhabi leadership in 2006 with a mandate to advance renewable energy through education, R&D, investment and commercialization, Masdar plays a key role in securing the emirate\'s continued leadership in the evolving global energy market.';
const bodytext = 'Launched by the Abu Dhabi leadership in 2006 with a mandate to advance renewable energy through education, R&D, investment and commercialization, Masdar plays a key role in securing the emirate\'s continued leadership in the evolving global energy market. Encouraging collaboration: Gaining the trust of the client’s creative team in order to be involved in the design phase, improving the UX for the responsive design solution. The problem: The client required a website that is both modern in design and fully compatible with older browsers like Internet Explorer 7. The delivery and deployment window were also extremely tight - within three weeks. Frontend Development: We developed a fully responsive, cross-browser, mobile friendly frontend in less than two weeks using various technologies (bootstrap, jquery, velocity.js, AJAX, HTML5, webM).';
const abstract ='Developing a fully responsive, cross-browser, mobile friendly website.';
const textureLarge = 'masdar-app-large.jpg';
const texturePlaceholder = 'masdar-app-placeholder.jpg';
const texture = 'masdar-app.jpg';
const texture2 = '';
const texture2Large = '';
const texture2Placeholder = '';
const roles = ['UX Design', 'Interface Design', 'SEO', 'Full Stack Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Masdar = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.masdar}>
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
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${masdarApp} 375w, ${masdarAppLarge} 1920w`}
              width={375}
              height={814}
              placeholder={masdarAppPlaceholder}
              alt="The Masdar web application."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Encouraging collaboration</ProjectSectionHeading>
              <ProjectSectionText>
                Gaining the trust of the client’s
                creative team in order to be involved in the design phase, improving the
                UX for the responsive design solution.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={
                `${masdarAppUItrust} 1280w, ${masdarAppUItrustLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                masdarAppUItrustPlaceholder
              }
              alt="Grid layout."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              The client required a website that is both modern in design and fully compatible with older browsers like Internet Explorer 7. The delivery and deployment window were also extremely tight - within three weeks.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              srcSet={
                `${masdarAppCoding} 1280w, ${masdarAppCodingLarge} 2560w`
              }
              width={1280}
              height={731}
              placeholder={
                masdarAppCodingPlaceholder
              }
              alt="fully responsive, cross-browser, mobile friendly frontend."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Frontend Development</ProjectSectionHeading>
              <ProjectSectionText>
                We developed a fully responsive, cross-browser, mobile friendly frontend
                in less than two weeks using various technologies (bootstrap, jquery,
                velocity.js, AJAX, HTML5, webM).
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
