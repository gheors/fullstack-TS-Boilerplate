import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Info() {
    return (
        <Flex flexGrow={1} flexDir='column' letterSpacing={0.5} >
            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <Box fontSize='16px' ml={2}>API</Box>
            </Flex>

            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <Box fontSize='16px' ml={2}>Object Detection</Box>
            </Flex>

            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <Box fontSize='16px' ml={2}>About us</Box>
            </Flex>

        </Flex>
    )
}
