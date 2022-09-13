const colors = {
  neutralWhite: "#ffffff",
  secondaryWhte: "#ededed",
  grayScale: "#e5e5e5",
  persianRed: "#dc3224",
  royalBlue: "#2f73d2",
  governorBay: "#4b4fa6",
  stormGray: "#75767a",
  gunPowder: "#4c4c50",
  blackRussian: "#212124",
  primaryGreen: "#036835",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptopS: "992px",
  laptopM: "1024px",
  laptop: "1200px",
  laptopL: "1440px",
  desktop: "2560px",
};

const devices = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptop: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const htmlFontSize = 16;

export const theme = {
  colors,
  fontSizes: {
    xxl: "2.25rem", // 36px
    xl: "2rem", // 32px
    l: "1.5rem", // 24px
    m: "1.125rem", // 18px
    s: "1rem", // 16px
    xs: "0.875rem", // 14px
    xxs: "0.75rem", // 12px
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  devices,
  pxToRem: (px) => `${px / htmlFontSize}rem`,
};
