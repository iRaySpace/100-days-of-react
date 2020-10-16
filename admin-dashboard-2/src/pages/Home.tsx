import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/core';
import Card from '../atoms/Card';
import Statistic from '../atoms/Statistic';
import ActionCard, { ActionCardItem } from '../atoms/ActionCard';
import ListTable, { ListTableRow, ListTableData } from '../atoms/ListTable';

export default function () {
  return (
    <Box maxW={1280} mx="auto" mt="5">
      <Text fontSize="3xl" fontWeight="bold">
        Hello there, John!
      </Text>
      <Text>Get updated with your store!</Text>
      <Grid templateColumns="9fr 4fr" gap={5} mt="5">
        <Box>
          <Grid templateColumns="1fr 1fr" gap={5}>
            <Statistic title="Transactions" subtitle="Today" body="5" />
            <Statistic title="Sales" subtitle="Today" body="PHP213.00" />
          </Grid>
          <ActionCard mt="5">
            <ActionCardItem
              title="293 Invoices are fulfilled this week"
              onClick={() => console.log('To Invoices')}
            />
            <ActionCardItem
              title="121 Payments captured"
              onClick={() => console.log('To Payments')}
            />
            <ActionCardItem
              title="No products out of stock"
              onClick={() => console.log('To Products')}
            />
          </ActionCard>
          <ListTable title="Top Products" mt="5">
            <ListTableRow>
              <ListTableData>Item 001</ListTableData>
              <ListTableData textAlign="right">PHP 150.00</ListTableData>
            </ListTableRow>
            <ListTableRow>
              <ListTableData>Item 002</ListTableData>
              <ListTableData textAlign="right">PHP 63.00</ListTableData>
            </ListTableRow>
          </ListTable>
        </Box>
        <Box>
          <Card title="Activity" body="Transaction #3083 was placed" />
        </Box>
      </Grid>
    </Box>
  );
}
