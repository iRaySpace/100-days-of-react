import React from 'react'
import { Box, Text, Spinner, Flex, Input } from '@chakra-ui/core'
import { useRepository } from '../hooks/useRepository'
import Card from '../atoms/Card'

export default function () {
  const { isLoading, data, setSearch } = useRepository()
  function handleChange(event) {
    setSearch(event.target.value)
  }
  const States =
    data && data.map((row) => <Card mb="5" key={row} title={row} body={row} />)
  return (
    <Box w="lg" mx="auto" pt="5">
      <Text textAlign="center" fontSize="xl">
        Post-Soviet States
      </Text>
      <Input mt="5" placeholder="e.g. Belarus" onChange={handleChange} />
      {isLoading && (
        <Flex mt="5" align="center" flexDirection="column">
          <Spinner />
          <Text mt="3">Fetching data...</Text>
        </Flex>
      )}
      <Box mt="5">{States}</Box>
    </Box>
  )
}
