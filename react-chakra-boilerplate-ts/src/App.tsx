import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Home />
    </ThemeProvider>
  )
}

export default App
