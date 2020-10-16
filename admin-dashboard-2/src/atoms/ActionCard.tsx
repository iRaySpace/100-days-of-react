import React from 'react';
import { Box, PseudoBox, Text, Icon } from '@chakra-ui/core';

export function ActionCardItem({ title, onClick }) {
  return (
    <PseudoBox
      px="5"
      py="3"
      display="flex"
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="gray.300"
      cursor="pointer"
      onClick={onClick}
      _hover={{ bg: 'gray.100' }}
    >
      <Text>{title}</Text>
      <Text>
        <Icon name="chevron-right" />
      </Text>
    </PseudoBox>
  );
}

export default function ({ children, ...args }) {
  return (
    <Box border="1px" borderColor="gray.300" rounded="lg" {...args}>
      {children}
    </Box>
  );
}
