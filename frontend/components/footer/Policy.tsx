import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { FaCropAlt, FaCookie } from 'react-icons/fa'
import { MdPrivacyTip } from 'react-icons/md'

export default function Policy() {
    return (
        <Flex flexGrow={1} flexDir='column' letterSpacing={0.5} >
            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <MdPrivacyTip />
                <Box fontSize='16px' ml={2}>Privacy Policy </Box>
            </Flex>

            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <FaCookie />
                <Box fontSize='16px' ml={2}>Cookies Policy</Box>
            </Flex>

            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <FaCropAlt />
                <Box fontSize='16px' ml={2}>Aitia Policy</Box>
            </Flex>
        </Flex>
    )
}
