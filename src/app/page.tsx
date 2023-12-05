'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styling/theme';
import { HeaderMenu } from './components/HeaderMenu';
import { IntensityCard } from './components/IntensityStat';

// import Image from 'next/image'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeaderMenu />
      <IntensityCard />
    </ChakraProvider>
  );
}
