import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/core'

export default function ({ title, body, ...args }) {
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
      <Box padding="5">{body}</Box>
    </Box>
  )
}
