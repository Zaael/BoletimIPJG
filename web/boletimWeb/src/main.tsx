import React from 'react'
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={"system"}></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
