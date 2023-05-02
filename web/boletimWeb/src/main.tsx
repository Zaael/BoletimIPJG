import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './styles/theme'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
    <ColorModeScript initialColorMode={"system"}></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
