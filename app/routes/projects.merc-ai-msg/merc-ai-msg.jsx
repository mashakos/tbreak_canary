import mercbenzBarBilingual from '~/assets/mercbenz-app-bilingual.webp';
import mercbenzBarBilingualLarge from '~/assets/mercbenz-app-bilingual.webp';
import genericBackgroundBarPlaceholder from '~/assets/generic-background-bar-placeholder.jpg';
import genericBackgroundLarge from '~/assets/generic-background-large.webp';
import genericBackgroundPlaceholder from '~/assets/generic-background-placeholder.jpg';
import genericBackground from '~/assets/generic-background.webp';
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

import innerText from 'react-innertext';

const title = 'Mercedes-Benz Messenger Bot';
const description =
  'An Ai chat bot that delivers a fun test-drive booking experience for fans of Mercedes-Benz and Mercedes-Benz Middle-East. Built on the meya.ai machine learning platform.';
const abstract = 'To enhance brand experience with a younger audience, Mercedes-Benz needed an innovative solution to handle custom queries and requests in real-time.';
const textureLarge = 'mercbenz-app-back.webp';
const texturePlaceholder = 'mercbenz-app-placeholder.jpg';
const texture = 'mercbenz-app-back.webp';
const texture2 = 'mercbenz-app.webp';
const texture2Large = 'mercbenz-app-large.webp';
const texture2Placeholder = 'mercbenz-app-placeholder.jpg';
const roles = ['UX Design', 'Interface Design', 'Bot Flow Development', 'Full Stack Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

const ProjHTML = (
  <>
    {/*<ProjectSection padding="top">*/}
    {/*  <ProjectSectionContent>*/}
    {/*    <ProjectImage*/}
    {/*      srcSet={`${mercbenzApp} 375w, ${mercbenzAppLarge} 1920w`}*/}
    {/*      width={375}*/}
    {/*      height={814}*/}
    {/*      placeholder={mercbenzAppPlaceholder}*/}
    {/*      alt="The Enec web application showing a selected user annotation."*/}
    {/*      sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}*/}
    {/*    />*/}
    {/*  </ProjectSectionContent>*/}
    {/*</ProjectSection>*/}
    <ProjectSection>
      <ProjectSectionColumns>
        <ProjectSectionContent>
          <ProjectTextRow>
            <ProjectSectionHeading>
            </ProjectSectionHeading>
            <ProjectSectionText>
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSectionContent>
      </ProjectSectionColumns>
    </ProjectSection>
    <ProjectSection>
      <ProjectSectionColumns>
        <div className={styles.sidebarImages}>
          <Image
            className={styles.sidebarImage}
            srcSet={
              `/static/project-assets/${texture} 260w, /static/project-assets/${textureLarge} 520w`
            }
            width={375}
            height={814}
            placeholder={
              `/static/project-assets/${texturePlaceholder}`
            }
            alt="Configuration options for a component."
            sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
          />
          <Image
            className={styles.sidebarImage}
            srcSet={
              `/static/project-assets/${texture2} 260w, /static/project-assets/${texture2Large} 520w`
            }
            width={375}
            height={814}
            placeholder={
              `/static/project-assets/${texture2Placeholder}`
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
              srcSet={`/static/project-assets/${texture} 440w, /static/project-assets/${textureLarge} 880w`}
              width={375}
              height={814}
              placeholder={`/static/project-assets/${texturePlaceholder}`}
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
              srcSet={`/static/project-assets/${texture2} 440w, /static/project-assets/${texture2Large} 880w`}
              width={375}
              height={814}
              placeholder={`/static/project-assets/${texture2Placeholder}`}
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
  </>
);

function ProjContent() {
  return ProjHTML;
}

const bodytext =  innerText(ProjHTML);


export const MercAiMsg = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.mercaimsg}>
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
