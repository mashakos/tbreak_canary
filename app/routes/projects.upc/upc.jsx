import upcHome from '~/assets/upc-home.jpg';
import upcHomePlacehoolder from '~/assets/upc-home-placeholder.jpg';
import estidamaHome from '~/assets/estidama-home.jpg';
import estidamaHomePlaceholder from '~/assets/estidama-home-placeholder.jpg';
import estidama from '~/assets/estidama.jpg';
import estidamaPlaceholder from '~/assets/estidama-placeholder.jpg';
import umbraco from '~/assets/umbraco.jpg';
import umbracoPlaceholder from '~/assets/umbraco-placeholder.jpg';
import umbracoIpad from '~/assets/umbraco-ipad.png';
import umbracoIpadPlaceholder from '~/assets/umbraco-ipad-placeholder.png';
import genericBackgroundLarge from '~/assets/generic-background-large.jpg';
import genericBackgroundPlaceholder from '~/assets/generic-background-placeholder.jpg';
import genericBackground from '~/assets/generic-background.jpg';
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
import styles from './upc.module.css';
import { List, ListItem } from '~/components/list/index.js';
import masdarApp from '~/assets/masdarlanding.mp4';
import masdarAppLarge from '~/assets/masdarlanding.mp4';
import masdarAppPlaceholder from '~/assets/masdar-background-placeholder.jpg';

const title = 'Abu Dhabi Urban Planning Council';
const description = 'The Abu Dhabi Urban Planning Council (UPC) is the strategic planning agency for the Emirate of Abu Dhabi. The Abu Dhabi Urban Planning Council is responsible for defining the shape of the Emirate, along with the associated land uses, to ensure the development of a professionally designed, sustainable and well-managed urban environment, which incorporate world-class transport and infrastructure systems.';
const bodytext = 'The Abu Dhabi Science Festival, organized by the Abu Dhabi Technology Committee (TDC) was first held in 2011. The festival features many exhibitions, workshops, shows and signature events, as well as school tours for children around the city. For its second year, we were tasked with developing an engaging, interactive portal filled with science themeed quizzes and mini-games. One challenge given to us: the website portal must be feature complete and compatible with government desktop PCs, which at the time ran Internet Explorer 7. Meeting the client\'s requirements using conventional implementations would have required maintaining dual code bases: one for modern browsers and another for Internet Explorer 7. Through careful study of IE7\'s developer reference as well as a study on contemporary solutions, an roadmap was discovered which will allow the development of a modern UI while maintaining backwards compatibility with Internet Explorer 7. To bridge this gap, our developers used an "attached behavior engine" library - PIE.js - which leverages Internet Explorer\'s DirectX Media API to simulate CSS 3.0 properties. This script allows for the rendering of advanced visual effects such as rounded corners, drop shadows, and gradients, which are otherwise not possible in IE7. The use of PIE.js enabled our developers to maintain a single codebase while ensuring the site looks consistent across all browsers, old and new. We delievered a modern HTML5 website portal with all the requirements achieved. Supporting IE 7.0 was an important requirement\n' +
  'of the client, not finding a solution would have forced the team to cut\n' +
  'back on features in order to meet the client’s required spec.';
const abstract ='A dynamic .net based multi-tenant, multi-language CMS with page publishing work flow.';
const textureLarge = 'upc.jpg';
const texturePlaceholder = 'upc-placeholder.jpg';
const texture = 'upc.jpg';
const texture2 = '';
const texture2Large = '';
const texture2Placeholder = '';
const roles = ['UX Design', 'Interface Design', 'SEO', 'Full Stack Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Upc = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.upc}>
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
              srcSet={`/static/project-assets/${texture} 375w, /static/project-assets/${textureLarge} 1920w`}
              width={375}
              height={814}
              placeholder={`/static/project-assets/${texturePlaceholder}`}
              alt="The UPC web application."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>


        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
              <ProjectSectionText>
                We were assigned the task of developing a multi-lingual archival frontend / web portal. The archive was to be centrally managed from within a single CMS, with over 120 pages of provided content organised according to a taxonomy structure.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
                <ProjectSectionHeading>The full stack</ProjectSectionHeading>
                <ProjectSectionText>
                  For the public facing frontend we were tasked with building the main Urban Council portal on top of the CMS. A micro-site for the Estidama initiative and user generated campaign/registration mini-sites were another requirement (e.g. registration for a training course hosted by the Council).
                </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${estidama} 522w, ${estidama} 700w`}
                width={700}
                height={522}
                placeholder={estidamaPlaceholder}
                alt="Estidama mini-site"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${upcHome} 522w, ${upcHome} 700w`}
                width={700}
                height={522}
                placeholder={upcHomePlacehoolder}
                alt="UPC homepage"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>


        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Enter Umbraco</ProjectSectionHeading>
              <ProjectSectionText>
                Considering the very short project life cycle, and the requirements of the site, a popular open source CMS platform was picked - Umbraco. We were impressed by Umbraco's intelligent integration of XSLT. More importantly Umbraco had a modular object type model which meant you can as a CMS administrator theoretically create an infinite possible number of categories, very important for an archival platform. These two aspects were critical to our strategy as we could modify the programming logic required to organise and display content (listings, galleries, modules) as well as parse user submitted content without compilation and refactoring related delays right up to the testing phase.
              </ProjectSectionText>
              <ProjectSectionText>
                Umbraco at the time had limited multi-language support, so a necessary milestone to tackle was implementing 1:1 navigation support for multiple languages. We developed a library that handled URL callbacks per the user's language preference.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <div className={styles.sidebarImages}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${umbraco} 800w, ${umbraco} 1920w`}
                  width={800}
                  height={500}
                  placeholder={umbracoPlaceholder}
                  alt="Umbraco, a robust .net CMS"
                  sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                />
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${umbracoIpad} 800w, ${umbracoIpad} 1920w`}
                  width={800}
                  height={500}
                  placeholder={umbracoIpadPlaceholder}
                  alt="Umbraco, a robust .net CMS"
                  sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                />
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Going with the Umbraco platform resulted in a multi-tenant platform deployed and delivered on time, and (to the client's surprise!) meeting all of the project's requirements.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={estidamaHome}
              width={940}
              height={500}
              placeholder={estidamaHomePlaceholder}
              alt="Estidama Mini-site"
            />
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
