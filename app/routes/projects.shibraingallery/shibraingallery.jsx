import ShibrainGalleryLarge from '~/assets/shibraingalleryweb.mp4';
import ShibrainGalleryPlaceholder from '~/assets/shibraingallery-placeholder.jpg';
import ShibrainGallery from '~/assets/shibraingalleryweb.mp4';
import ShibrainWorkOneLarge from '~/assets/shibrainwork-one-large.png';
import ShibrainWorkOnePlaceholder from '~/assets/shibrainwork-one-placeholder.png';
import ShibrainWorkOne from '~/assets/shibrainwork-one.png';
import ShibrainWorkTwo from '~/assets/shibrainwork-two.png';
import ShibrainWorkTwoLarge from '~/assets/shibrainwork-two.png';
import ShibrainWorkTwoPlaceholder from '~/assets/shibrainwork-two-placeholder.png';
import ShibrainWorkFour from '~/assets/shibrainwork-four.png';
import ShibrainWorkFourLarge from '~/assets/shibrainwork-four.png';
import ShibrainWorkFourPlaceholder from '~/assets/shibrainwork-four-placeholder.png';
import shibraingalleryBackgroundLarge from '~/assets/shibraingallery-bg-large.jpg';
import shibraingalleryBackgroundPlaceholder from '~/assets/shibraingallery-bg-placeholder.jpg';
import shibraingalleryBackground from '~/assets/shibraingallery-bg.jpg';

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
import styles from './shibraingallery.module.css';
import reebokBackgroundBar from '~/assets/reebok-background-bar.jpg';
import reebokBackgroundBarLarge from '~/assets/reebok-background-bar-large.jpg';
import reebokBackgroundBarPlaceholder from '~/assets/reebok-background-bar-placeholder.jpg';

const title = 'The Ahmed Shibrain Collection';
const description =
  'Ahmed Shibrain was a Sudanese Modernist painter and Dean of the College of Fine and Applied Art in Khartoum. Shibrain is considered one of the leading representatives of the art movement called School of Khartoum that combined Islamic, African and Western artistic traditions.';
const bodytext = 'Ahmed Shibrain was a Sudanese Modernist painter and Dean of the College of Fine and Applied Art in Khartoum. Shibrain is considered one of the leading representatives of the art movement called School of Khartoum that combined Islamic, African and Western artistic traditions. Shibrain\'s large-format calligraphy, in which the words of Islamic texts are interpreted as independent ornaments and images, attracted international attention. Among other collections, his works are represented in the collections of the Barjeel Art Foundation in the United Arab Emirates and of the National Archives (formerly Harmon Foundation) in Washington, D.C. Shibrain draws on his country’s rich African, Nubian, Arab and Meriotic heritage by combining different motifs from their various artistic disciplines, including folk art and calligraphy, with local primary materials such as mahogany. For the Ahmed Shibrain Collected Works website, we implemented a subdued design that showcased the work before anything else.';
const abstract ='Website for the collected works of the late modernist painter Ahmed Shibrain.';
const textureLarge = 'shibraingallery-large.jpg';
const texturePlaceholder = 'shibraingallery-placeholder.jpg';
const texture = 'shibraingallery.jpg';
const texture2 = '';
const texture2Large = '';
const texture2Placeholder = '';
const roles = ['UX Design', 'Interface Design', 'SEO', 'Full Stack Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Shibraingallery = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.shibraingallery}>
        <ProjectBackground
          src={shibraingalleryBackground}
          srcSet={`${shibraingalleryBackground} 1280w, ${shibraingalleryBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={shibraingalleryBackgroundPlaceholder}
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
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>A Modernist Painter</ProjectSectionHeading>
              <ProjectSectionText>
                Shibrain's large-format calligraphy, in which the words of Islamic texts are interpreted as independent ornaments and images, attracted international attention.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={
                `${ShibrainWorkFour} 1280w, ${ShibrainWorkFourLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                ShibrainWorkFourPlaceholder
              }
              alt="Grid layout."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Body of Work</ProjectSectionHeading>
              <ProjectSectionText>
                Among other collections, his works are represented in the collections of the Barjeel Art Foundation in the United Arab Emirates and of the National Archives (formerly Harmon Foundation) in Washington, D.C.
              </ProjectSectionText>
            </div>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${ShibrainWorkOne} 183w, ${ShibrainWorkOneLarge} 300w`}
                  width={300}
                  height={1119}
                  placeholder={ShibrainWorkOnePlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 238px, 300px`}
                />
              </div>
            </div>
          </ProjectSectionContent>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>A Rich Heritage</ProjectSectionHeading>
              <ProjectSectionText>
                Shibrain draws on his country’s rich African, Nubian, Arab and Meriotic heritage by combining different motifs from their various artistic disciplines, including folk art and calligraphy, with local primary materials such as mahogany.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={
                `${ShibrainWorkTwo} 1280w, ${ShibrainWorkTwoLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                ShibrainWorkTwoPlaceholder
              }
              alt="Grid layout."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Website</ProjectSectionHeading>
              <ProjectSectionText>
                For the Ahmed Shibrain Collection, we implemented a subdued design that showcased the work before anything else.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectImage
              srcSet={`${ShibrainGallery} 375w, ${ShibrainGalleryLarge} 1920w`}
              width={375}
              height={814}
              placeholder={ShibrainGalleryPlaceholder}
              alt="The Ahmed Shibrain Website."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
