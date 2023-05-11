// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    ump: {
      50: "#0050b5",
      100: "#0050b5",
      200: "#013373",
      300: "#013373",
      400: "#013373",
      500: "#013373",
      600: "#013373",
      700: "#013373",
      800: "#012047",
      900: "#012047",
    },
    saf: {
      100: "",
      200: "",
      800: "",
    },
    upa: {
      100: "",
      200: "",
      800: "",
    },
    ucp: {
      100: "",
      200: "",
      800: "",
    },
  },
});

export default theme