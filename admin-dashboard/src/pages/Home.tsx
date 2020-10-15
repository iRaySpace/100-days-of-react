import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/core';
import Card from '../atoms/Card';
import Statistic from '../atoms/Statistic';

export default function () {
  return (
    <Box maxW={1280} mx="auto" mt="5">
      <Text fontSize="3xl" fontWeight="bold">Hello there, John!</Text>
      <Text>Get updated with your store!</Text>
      <Grid templateColumns="9fr 4fr" gap={5} mt="5">
        <Grid templateColumns="1fr 1fr" gap={5}>
          <Statistic title="Transactions" subtitle="Today" body="5" />
          <Statistic title="Sales" subtitle="Today" body="PHP213.00" />
        </Grid>
        <Card title="Activity" body="Transaction #3083 was placed" />
      </Grid>
    </Box>
  );
}
