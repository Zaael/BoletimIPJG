// theme.ts

// 1. import `extendTheme` function
import { defineStyleConfig, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource/bebas-neue';
import { Component } from 'react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

export const Tag = defineStyleConfig({
  baseStyle: {
    container: {
      bg: 'var(--badge-bg)',
      color: 'var(--badge-color)',
    }
  },
})

export const Flex = defineStyleConfig({
  baseStyle: {    
    marginLeft: "auto",
    marginRight: "auto",
  },  
})

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

const sizes = {
  sizes: {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  }
}

// 3. extend the theme
const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    ump: {//#, #, #, #, #, #, #, #, # // 0050b5, 013373, 012047
      50: "#3E7CC7",
      100: "#3978C2",
      200: "#3978C2",
      300: "#3374BE",
      400: "#2E70B9",
      500: "#296CB4",
      600: "#2368AF",
      700: "#1E64AB",
      800: "#1860A6",
      900: "#135CA1",
    },
    saf: {
      50: "#FFECF7",
      100: "#FFDDF0",
      200: "#FFDDF0",
      300: "#FECFEA",
      400: "#FEC0E3",
      500: "#FDB1DC",
      600: "#FDA2D5",
      700: "#FC94CF",
      800: "#FC85C8",
      900: "#FB76C1",
    },
    upa: {
      50: "#BBB4E7",
      100: "#B8AAE3",
      200: "#B8AAE3",
      300: "#B59FDE",
      400: "#B195DA",
      500: "#AE8AD6",
      600: "#AB80D1",
      700: "#A875CD",
      800: "#A46BC8",
      900: "#A160C4",
    },
    cultos: {
      50: "#9ACBFF",
      100: "#87BFFA",
      200: "#87BFFA",
      300: "#75B4F5",
      400: "#62A8F0",
      500: "#4F9CEC",
      600: "#3C90E7",
      700: "#2A85E2",
      800: "#1779DD",
      900: "#046DD8",
    },
    estudos: {
      50: "#9ACBFF",
      100: "#87BFFA",
      200: "#87BFFA",
      300: "#75B4F5",
      400: "#62A8F0",
      500: "#4F9CEC",
      600: "#3C90E7",
      700: "#2A85E2",
      800: "#1779DD",
      900: "#046DD8",
    },
    casais: {
      50: "#FF99A7",
      100: "#FA8699",
      200: "#FA8699",
      300: "#F6748C",
      400: "#F1617E",
      500: "#EC4F70",
      600: "#E73C62",
      700: "#E32955",
      800: "#DE1747",
      900: "#D90439",
    },
    ucp: {
      //#, #, #, #, #, #, #, #, #
      50: "#EFE8A5",
      100: "#EDE49D",
      200: "#EDE49D",
      300: "#EAE195",
      400: "#E8DD8D",
      500: "#E5DA86",
      600: "#E3D67E",
      700: "#E0D276",
      800: "#DECF6E",
      900: "#DBCB66",
    },
    uph: { //#, #, #, #, #, #, #, #, #
      50: "#A7E2B5",
      100: "#9EDCAC",
      200: "#9EDCAC",
      300: "#94D6A4",
      400: "#8BD09B",
      500: "#82CA93",
      600: "#78C48A",
      700: "#6FBE81",
      800: "#65B879",
      900: "#5CB270",
    },
  },
  fonts: {
    logo: `'Bebas Neue', sans-serif`,
  },
});

export default theme