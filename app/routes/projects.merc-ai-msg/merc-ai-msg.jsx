// import genericAnnotationLarge from '~/assets/generic-annotation-large.png';
// import genericAnnotationPlaceholder from '~/assets/generic-annotation-placeholder.png';
// import genericAnnotation from '~/assets/generic-annotation.png';
import mercbenzAppLarge from '~/assets/mercbenz-app-large.jpg';
import mercbenzAppPlaceholder from '~/assets/mercbenz-app-placeholder.jpg';
import mercbenzApp from '~/assets/mercbenz-app.jpg';
import mercbenzAppBackLarge from '~/assets/mercbenz-app-back.jpg';
import mercbenzAppBackPlaceholder from '~/assets/mercbenz-app-placeholder.jpg';
import mercbenzAppBack from '~/assets/mercbenz-app-back.jpg';
import mercbenzBarBilingual from '~/assets/mercbenz-app-bilingual.jpg';
import mercbenzBarBilingualLarge from '~/assets/mercbenz-app-bilingual.jpg';
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
import styles from './merc-ai-msg.module.css';
import { List, ListItem } from '~/components/list/index.js';

const title = 'Mercedes-Benz Messenger Bot';
const description =
  'An Ai chat bot that delivers a fun test-drive booking experience for fans of Mercedes-Benz and Mercedes-Benz Middle-East. Built on the meya.ai machine learning platform.';
const roles = ['UX Design', 'Interface Design', 'Bot Flow Development', 'Full Stack Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const MercAiMsg = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
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
        />
        {/*<ProjectSection padding="top">*/}
        {/*  <ProjectSectionContent>*/}
        {/*    <ProjectImage*/}
        {/*      srcSet={`${mercbenzApp} 375w, ${mercbenzAppLarge} 1920w`}*/}
        {/*      width={375}*/}
        {/*      height={814}*/}
        {/*      placeholder={mercbenzAppPlaceholder}*/}
        {/*      alt="The Masdar web application showing a selected user annotation."*/}
        {/*      sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}*/}
        {/*    />*/}
        {/*  </ProjectSectionContent>*/}
        {/*</ProjectSection>*/}
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                    `${mercbenzApp} 260w, ${mercbenzAppLarge} 520w`
                }
                width={375}
                height={814}
                placeholder={
                    mercbenzAppPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                    `${mercbenzAppBack} 260w, ${mercbenzAppBackLarge} 520w`
                }
                width={375}
                height={814}
                placeholder={
                    mercbenzAppBackPlaceholder
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  The Mercedes-Benz Bot
                </ProjectSectionHeading>
                <ProjectSectionText>
                  To enhance brand experience with a younger audience, Mercedes-Benz needed an innovative solution to handle custom queries and requests in real-time.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Solution</ProjectSectionHeading>
              <ProjectSectionText>
                In August 2016, we launched the Mercedes-Benz Cars Middle East chatbot, a powerful new way to enhance brand experience and interact with regional consumers at scale.
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
                  srcSet={`${mercbenzBarBilingual} 440w, ${mercbenzBarBilingualLarge} 880w`}
                  width={375}
                  height={814}
                  placeholder={genericBackgroundBarPlaceholder}
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
              <ProjectSectionHeading>The Bilingual Bot</ProjectSectionHeading>
              <ProjectSectionText>
                Helped customers explore our range of cars and book a test drive, all through chat.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${mercbenzApp} 440w, ${mercbenzAppLarge} 880w`}
                  width={375}
                  height={814}
                  placeholder={mercbenzAppPlaceholder}
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
              <ProjectSectionHeading>The All-knowing Bot</ProjectSectionHeading>
              <ProjectSectionText>
                Even made personalized SUV model recommendations based on the users’ driving habits.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${mercbenzAppBack} 440w, ${mercbenzAppBackLarge} 880w`}
                  width={375}
                  height={814}
                  placeholder={mercbenzAppBackPlaceholder}
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
              <ProjectSectionHeading>The Smart Bot</ProjectSectionHeading>
              <ProjectSectionText>
                Sent encrypted booking data directly to relevant general distributors across the region.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Within the first few months, the bot received:
                <List>
                  <ListItem>Over 17,000 unique conversations</ListItem>
                  <ListItem>6200% Conversion Rate</ListItem>
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
