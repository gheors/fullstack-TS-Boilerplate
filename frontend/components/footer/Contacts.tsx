import { Box, Flex, VStack } from '@chakra-ui/layout'
import React, { Children, PropsWithChildren } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi';


interface Props {
    text?: string
}

export default function Contacts({ text }: Props) {
    return (
        <Flex flexGrow={1} flexDir='column' letterSpacing={0.5} >
            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <IoMdMail />
                <Box fontSize='16px' ml={2}> aitia@gmail.com</Box>
            </Flex>

            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <FiGithub />
                <Box fontSize='16px' ml={2}>github</Box>
            </Flex>

            <Flex pt={1} pb={1} alignItems='center' cursor={"pointer"}>
                <FaInstagram />
                <Box fontSize='16px' ml={2}>Instagram</Box>
            </Flex>
        </Flex>
    )
}
