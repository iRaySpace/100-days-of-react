import React from 'react';
import { PseudoBox, Box, Flex, Text } from '@chakra-ui/core';

export function ListTableRow({ children, ...args }) {
  return (
    <PseudoBox as="tr" _hover={{ bg: 'gray.100' }} {...args}>
      {children}
    </PseudoBox>
  );
}

export function ListTableData({ children, ...args }) {
  return (
    <Box
      as="td"
      px="5"
      py="3"
      borderBottom="1px"
      borderColor="gray.300"
      {...args}
    >
      {children}
    </Box>
  );
}

export default function ({ title, children, ...args }) {
  return (
    <Box border="1px" borderColor="gray.300" rounded="lg" {...args}>
      <Flex
        minH="48px"
        px="5"
        borderBottom="1px"
        borderColor="gray.300"
        align="center"
      >
        <Text fontSize="xl">{title}</Text>
      </Flex>
      <table style={{ width: '100%', maxWidth: '100%' }}>{children}</table>
    </Box>
  );
}
