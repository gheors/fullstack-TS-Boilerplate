import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import { FaCropAlt } from 'react-icons/fa'

export default function FooterLogo() {
    return (
        <Flex justifyContent='center' flexGrow={1} alignItems='center' fontSize={40} p={8}>
            <FaCropAlt /> <Box ml={2}>AITIA</Box>
        </Flex>
    )
}
