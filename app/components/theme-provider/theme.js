import { pxToRem } from '~/utils/style';

// Full list of tokens
const baseTokens = {
  black: 'oklch(0% 0 0)',
  white: 'oklch(100% 0 0)',
  accentDark: 'oklch(0.62 0.248751 15.5792)',
  widgetBGDark: 'oklch(0.18 0 0)',
  widgetBGLight: 'oklch(98.5% .002 247.839)',
  monogramHighLight: 'oklch(0.81 0.1156 308)',
  heroBannerCoverBgDark: 'color-mix(in oklab, #0D0D0D 70%, transparent)',
  heroBannerCoverBgLight: 'color-mix(in oklab, #fff 90%, transparent)',
  accentLight: 'oklch(0.62 0.248751 15.5792)',
  primaryDark: 'oklch(0.62 0.248751 15.5792)',
  primaryLight: 'oklch(0.62 0.248751 15.5792)',
  titleColorDark: 'oklch(0.87 0.0566 281.85)',
  titleColorLight: 'oklch(0.17 0.0799 270.35)',
  textColorDark: 'oklch(0.55 0.0267 264.33)',
  textColorLight: 'oklch(0.55 0.0267 264.33)',
  borderColDark: 'oklch(0.32 0.0174 262.25 / 70%)',
  borderColLight: 'oklch(0.87 0.0106 261.79 / 70%)',
  authorColorDark: 'oklch(0.37 0.0343 260.17)',
  authorColorLight: 'oklch(0.37 0.0343 260.17)',
  bezierFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  durationXS: '200ms',
  durationS: '300ms',
  durationM: '400ms',
  durationL: '600ms',
  durationXL: '800ms',
  systemFontStack:
    'system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif',
  headingFontStack: `Bauziet, var(--systemFontStack)`,
  fontStack: `Montserrat, var(--systemFontStack)`,
  monoFontStack:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  japaneseFontStack:
    'IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeH6: pxToRem(20),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: '1.25',
  lineHeightBody: '1.6',
  maxWidthS: '540px',
  maxWidthM: '720px',
  maxWidthL: '1096px',
  maxWidthXL: '1680px',
  spaceOuter: '64px',
  spaceXS: '4px',
  spaceS: '8px',
  spaceM: '16px',
  spaceL: '24px',
  spaceXL: '32px',
  space2XL: '48px',
  space3XL: '64px',
  space4XL: '96px',
  space5XL: '128px',
  feedPostImgHeightPortrait: pxToRem(210),
  feedPostImgHeightLandscape: pxToRem(120),
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64,
};

// Tokens that change based on viewport size
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80),
};

const tokensLaptop = {
  maxWidthS: '480px',
  maxWidthM: '640px',
  maxWidthL: '1000px',
  maxWidthXL: '1100px',
  spaceOuter: '48px',
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22),
  fontSizeH6: pxToRem(18),
};

const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20),
  fontSizeH6: pxToRem(16),
};

const tokensMobile = {
  spaceOuter: '24px',
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeH6: pxToRem(14),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14),
};

const tokensMobileSmall = {
  spaceOuter: '16px',
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20),
};

// Tokens that change based on theme
const dark = {
  background: 'oklch(0.16 0 0)',
  backgroundLight: 'oklch(0.18 0 0)',
  widgetBackground: 'var(--widgetBGDark)',
  heroBannerCoverBg: 'var(--heroBannerCoverBgDark)',
  primary: 'var(--primaryDark)',
  accent: 'var(--accentDark)',
  error: 'oklch(65.91% 0.249 13.76)',
  text: 'oklch(0.45 0.0298 257.68)',
  authorCol: 'var(--authorColorDark)',
  borderCol: 'var(--borderColDark)',
  textTitle: 'var(--titleColorDark)',
  textBody: 'var(--textColorDark)',
  textLight: 'var(--textColorDark)',
};

const light = {
  background: 'var(--white)',
  backgroundLight: 'oklch(0.98 0.0017 247.84)',
  widgetBackground: 'var(--widgetBGLight)',
  heroBannerCoverBg: 'var(--heroBannerCoverBgLight)',
  primary: 'var(--primaryLight)',
  accent: 'var(--accentLight)',
  error: 'oklch(63.17% 0.259 25.41)',
  text: 'var(--black)',
  authorCol: 'var(--authorColorLight)',
  borderCol: 'var(--borderColLight)',
  textTitle: 'var(--titleColorLight)',
  textBody: 'var(--textColorLight)',
  textLight: 'var(--textColorLight)',
};

export const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall,
};

export const themes = { dark, light };
