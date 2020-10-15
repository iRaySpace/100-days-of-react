import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Home from './pages/Home';

export default function () {
  return (
    <ThemeProvider>
      <CSSReset />
      <Home />
    </ThemeProvider>
  );
}
