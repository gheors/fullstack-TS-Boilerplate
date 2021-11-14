import { Box, Flex } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { appTheme } from '../../pages/_app'
import DarkModeSwitcher from '../darkModeSwitcher'
import { Languages } from '../Languages'
import Contacts from './Contacts'
import FooterLogo from './FooterLogo'
import FooterTitle from './FooterTitle'
import Info from './Info'
import Policy from './Policy'

export default function Footer() {
    const bgColor = useColorModeValue(appTheme.colors.background.bgLight, appTheme.colors.background.bgDark)
    const boxShadow = appTheme.styles.shadows.black
    const boxShadowGrey = appTheme.styles.shadows.grey

    return (
        <Flex
            bg={bgColor}
            borderRadius=' 15px'
            boxShadow={boxShadowGrey}
            mr={5} mb={5} ml={5}
            justifyContent='stretch'
            pt={10}
            position='relative'
            direction='column'
        >
            <Flex>
                <Flex flexGrow={1} flexDir='column' ml={5}  >
                    <DarkModeSwitcher />
                    <Languages />
                </Flex>
                <Flex flexGrow={2} >
                    <Info />
                    <Policy />
                    <Contacts />
                </Flex>
            </Flex>

            <Flex>

            </Flex>
            <FooterLogo />
        </Flex>
    )
}
