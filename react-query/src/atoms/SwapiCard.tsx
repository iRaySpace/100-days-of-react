import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/core'
import { toTitle } from '../utils'

export default function ({ error, isLoading, data, ...args }) {
  console.log(data)
  const Component = () => (
    <Box>
      <Text fontSize="2xl">{data.name}</Text>
      <Text color="gray.500">Birth Year: {data['birth_year']}</Text>
      <Text color="gray.500">Gender: {toTitle(data['gender'])}</Text>
      <Text color="gray.500">Height (cm): {data['height']}</Text>
      <Text color="gray.500">Mass (lb): {data['mass']}</Text>
      <Text color="gray.500">Hair Color: {toTitle(data['hair_color'])}</Text>
      <Text color="gray.500">Skin Color: {toTitle(data['skin_color'])}</Text>
      <Text color="gray.500">Eye Color: {toTitle(data['eye_color'])}</Text>
    </Box>
  )
  return (
    <Box
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      px="5"
      py="3"
      {...args}
    >
      {error && <Text>Unable to fetch</Text>}
      {isLoading ? (
        <Flex justify="center">Fetching Luke Skywalker</Flex>
      ) : (
        Component()
      )}
    </Box>
  )
}
