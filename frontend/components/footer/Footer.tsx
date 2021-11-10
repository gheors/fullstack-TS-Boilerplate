import { Box, Flex } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { appTheme } from '../../pages/_app'
import FooterTitle from './FooterTitle'
export default function Footer() {
    const bgColor = useColorModeValue(appTheme.colors.background.bgLight, appTheme.colors.background.bgDark)
    const boxShadow = appTheme.styles.shadows.black
    return (
        <Flex flexGrow={1}
            bg={bgColor}
            borderRadius='3px 3px 15px 15px'
            boxShadow={boxShadow}
            ml={5} mr={5} mb={5}
            alignItems='center'
        >
            <FooterTitle />
            <FooterTitle />
            <FooterTitle />
            <FooterTitle />

        </Flex>
    )
}
