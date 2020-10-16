import React from 'react';
import { Box, Text } from '@chakra-ui/core';

export default function ({ title, subtitle, body }) {
    return (
        <Box border="1px" borderColor="gray.300" rounded="lg" p="5">
            <Text fontSize="xl">{title}</Text>
            <Text fontSize="sm" color="gray.500">{subtitle}</Text>
            <Text fontSize="3xl" mt="1">{body}</Text>
        </Box>
    );
}
