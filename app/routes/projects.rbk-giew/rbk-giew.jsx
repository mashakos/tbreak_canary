import reebokBackgroundBarLarge from '~/assets/reebok-background-bar-large.jpg';
import reebokBackgroundBarPlaceholder from '~/assets/reebok-background-bar-placeholder.jpg';
import reebokBackgroundBar from '~/assets/reebok-background-bar.jpg';
import reebokBackgroundLarge from '~/assets/reebok-background-large.jpg';
import reebokBackgroundPlaceholder from '~/assets/reebok-background-placeholder.jpg';
import reebokBackground from '~/assets/reebok-background.jpg';
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
import styles from './rbk-giew.module.css';
import { List, ListItem } from '~/components/list/index.js';

const title = 'Reebok #GymIsEverywhere Microsite';
const description =
  'We launched a high impact digital campaign with a customized microsite, inviting people to share their fitness stories from around their cities with #GymIsEverywhere, using hero influencers films to launch the campaign and get people moving.';
const bodytext = 'We launched a high impact digital campaign with a customized microsite, inviting people to share their fitness stories from around their cities with #GymIsEverywhere, using hero influencers films to launch the campaign and get people moving. The Gym is Everywhere: How do you make fitness advocates feel more human in a digital world? Reebok looked to engage with its audience, breaking through the clutter with a meaningful brand purpose and mission. We increased brand awareness in the region by creating buzz around our core message that: The Gym is Everywhere. The Solution: We launched a high impact digital campaign with a customized microsite, inviting people to share their fitness stories from around their cities with #GymIsEverywhere, using hero influencers films to launch the campaign and get people moving. Meaningful engagement: The microsite was launched with hero videos released for Beirut, Cairo and the GCC with well-known influencers taking the city on as their personal gym asking ‘Where is Your Gym?’ inspiring people to share their response with the hashtag. Under the slogan #GymIsEverywhere, the campaign pays tribute to the unique history and stories in the cities that surround us, and the driven FitGen™ in them who see its unmatched possibility to challenge and innovate. All user generated content was amalgamated on the microsite with a location map of posts to highlight fitness hotspots within the city. All users had to do was snap a pic, tag their workout location and share it on Instagram, they could then download a 10% discount voucher from the microsite. Project outcomes: This campaign issued a wake-up call for city residents inviting them to open their doors and get out into the street for a new level of working out. - 1.6M Social Engagement - 21% Engagement Rate - 2.5M Video Views - 144K Traffic to Website - 100M Impressions 3 weeks - 60% Mentions from Key audience groups';
const abstract ='How do you make fitness advocates feel more human in a digital world? Reebok looked to engage with its audience, breaking through the clutter with a meaningful brand purpose and mission.';
const textureLarge = 'reebok-app-large.jpg';
const texturePlaceholder = 'reebok-app-placeholder.jpg';
const texture = 'reebok-app.jpg';
const texture2 = '';
const texture2Large = '';
const texture2Placeholder = '';
const roles = ['UX Design', 'Interface Design', 'Analytics', 'SPA Stack'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const RbkGiew = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={reebokBackground}
          srcSet={`${reebokBackground} 1280w, ${reebokBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={reebokBackgroundPlaceholder}
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
              srcSet={`/static/project-assets/${texture} 800w, /static/project-assets/${textureLarge} 1920w`}
              width={800}
              height={500}
              placeholder={`/static/project-assets/${texturePlaceholder}`}
              alt="The Masdar web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>The Gym is Everywhere</ProjectSectionHeading>
              <ProjectSectionText>
                How do you make fitness advocates feel more human in a digital world? Reebok looked to engage with its audience, breaking through the clutter with a meaningful brand purpose and mission. We increased brand awareness in the region by creating buzz around our core message that: The Gym is Everywhere.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              {/*<Image*/}
              {/*  className={styles.sidebarImage}*/}
              {/*  srcSet={`${reebokSidebarLayers} 350w, ${reebokSidebarLayersLarge} 700w`}*/}
              {/*  width={350}*/}
              {/*  height={750}*/}
              {/*  placeholder={reebokSidebarLayersPlaceholder}*/}
              {/*  alt="The layers sidebar design, now with user profiles."*/}
              {/*  sizes={`(max-width: ${media.mobile}px) 200px, 343px`}*/}
              {/*/>*/}
              {/*<Image*/}
              {/*  className={styles.sidebarImage}*/}
              {/*  srcSet={`${reebokSidebarAnnotations} 350w, ${reebokSidebarAnnotationsLarge} 700w`}*/}
              {/*  width={350}*/}
              {/*  height={750}*/}
              {/*  placeholder={reebokSidebarAnnotationsPlaceholder}*/}
              {/*  alt="Multiple user annotations on a shared layer."*/}
              {/*  sizes={`(max-width: ${media.mobile}px) 200px, 343px`}*/}
              {/*/>*/}
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Solution</ProjectSectionHeading>
              <ProjectSectionText>
                We launched a high impact digital campaign with a customized microsite, inviting people to share their fitness stories from around their cities with #GymIsEverywhere, using hero influencers films to launch the campaign and get people moving.
              </ProjectSectionText>
            </ProjectTextRow>
            {/*<Image*/}
            {/*  srcSet={`${reebokSlides} 800w, ${reebokSlidesLarge} 1920w`}*/}
            {/*  width={800}*/}
            {/*  height={500}*/}
            {/*  placeholder={reebokSlidesPlaceholder}*/}
            {/*  alt="The new My Slides tab in slice, showing annotated and favorited slides."*/}
            {/*  sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}*/}
            {/*/>*/}
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${reebokBackgroundBar} 440w, ${reebokBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={reebokBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              {/*<div className={styles.gridForeground}>*/}
              {/*  <Image*/}
              {/*    srcSet={`${reebokAnnotation} 440w, ${reebokAnnotationLarge} 880w`}*/}
              {/*    width={440}*/}
              {/*    height={340}*/}
              {/*    placeholder={reebokAnnotationPlaceholder}*/}
              {/*    alt="An annotation preview popover with statistics for shape perimeter and area."*/}
              {/*    sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}*/}
              {/*  />*/}
              {/*</div>*/}
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful engagement</ProjectSectionHeading>
              <ProjectSectionText>
                The microsite was launched with hero videos released for Beirut, Cairo and the GCC with well-known influencers taking the city on as their personal gym asking ‘Where is Your Gym?’ inspiring people to share their response with the hashtag. Under the slogan #GymIsEverywhere, the campaign pays tribute to the unique history and stories in the cities that surround us, and the driven FitGen™ in them who see its unmatched possibility to challenge and innovate. All user generated content was amalgamated on the microsite with a location map of posts to highlight fitness hotspots within the city. All users had to do was snap a pic, tag their workout location and share it on Instagram, they could then download a 10% discount voucher from the microsite.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                This campaign issued a wake-up call for city residents inviting them to open their doors and get out into the street for a new level of working out.
                <List>
                  <ListItem>1.6M Social Engagement</ListItem>
                  <ListItem>21% Engagement Rate</ListItem>
                  <ListItem>2.5M Video Views</ListItem>
                  <ListItem>144K Traffic to Website</ListItem>
                  <ListItem>100M Impressions 3 weeks</ListItem>
                  <ListItem>60% Mentions from Key audience groups</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
            {/*<Image*/}
            {/*  src={reebokIrl}*/}
            {/*  width={940}*/}
            {/*  height={500}*/}
            {/*  placeholder={reebokIrlPlaceholder}*/}
            {/*  alt="Students at the University of New South Wales using the new collaborative annotation features"*/}
            {/*/>*/}
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
