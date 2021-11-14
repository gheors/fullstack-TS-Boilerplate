import { Box } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { appTheme } from '../../pages/_app'

export default function Welcome() {
    const bgColor = useColorModeValue(appTheme.colors.background.bgLight, appTheme.colors.background.bgDark)
    const boxShadow = appTheme.styles.shadows.black
    const boxShadowGrey = appTheme.styles.shadows.grey


    return (
        <Box flexGrow={3} bg={bgColor} borderRadius='15px' boxShadow={boxShadowGrey} mr={5} mb={5} mt={5} ml={5}>
            Welcome
        </Box>
    )
}
