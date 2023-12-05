'use client';

import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import { theme } from './styling/theme';
// import Image from 'next/image'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w={'100%'} height={'100%'} bgColor={'purple'}>
        <Text>bogo</Text>
      </Box>
    </ChakraProvider>
  );
}
