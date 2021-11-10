import { Flex, Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import React, { PropsWithChildren } from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiGithub } from 'react-icons/fi';
import { appTheme } from '../../pages/_app';


interface PropsAccess {

}
export default function AccessWith({ }: PropsAccess) {
    return (
        <Flex fontSize='16PX'>
            <Box ml={3}>
                <SignBox icon={<FcGoogle />} text="Access with Google" bgColor='whitesmoke' color={"#555"} />
                <SignBox icon={<FiGithub />} text="Access with Github" bgColor='#47576E' color={"white"} />
                <SignBox icon={<FaFacebook />} text="Access with Facebook" bgColor='#3B5998' color='white' />
            </Box>
            <Box mr={3}>
                <SignBox icon={<FaLinkedinIn />} text="Access with Linkedin" bgColor='#0A66C2' color='white' />
                < SignBox icon={<FaTwitter />} text="Access with Twitter" bgColor='#5BAAF4' color='white' />
                <SignBox icon={<FaInstagram />} text="Access with Instagram" bgColor='#DB74AE' color="white" />
            </Box>

        </Flex>
    )
}


interface Props {
    text: string,
    icon: any
    bgColor: string,
    color: string,

}

function SignBox({ text, icon, bgColor, color }: PropsWithChildren<Props>) {
    const { t } = useTranslation("common");
    const boxShadow = appTheme.styles.shadows.black

    return <Flex bgColor={bgColor} color={color} boxShadow={boxShadow} borderRadius={'5px'} mt={4} mb={4} ml={2} mr={2} p={2}>
        <Flex alignItems='center' maxW='300px'>
            <Box ml={2} mr={4} flexGrow={1} >{icon}</Box>
            <Box flexGrow={5}> {t(text)}</Box>
        </Flex>

    </Flex>
}