import React from 'react'
import { useQuery } from 'react-query'
import { Box, Text } from '@chakra-ui/core'
import SwapiCard from '../atoms/SwapiCard'

export default function () {
  const { error, isLoading, data } = useQuery('lukeData', () =>
    fetch('https://swapi.dev/api/people/1/').then((res) => res.json()),
  )
  return (
    <Box w="lg" mx="auto" pt="5">
      <Text textAlign="center" fontSize="xl">
        Welcome to React Query example with Star Wars API!
      </Text>
      <SwapiCard error={error} isLoading={isLoading} data={data} mt="5" />
    </Box>
  )
}
