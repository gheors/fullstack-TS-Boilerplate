import { Flex } from '@chakra-ui/layout'
import React, { PropsWithChildren } from 'react'


interface Props {
    text?: string
}
export default function FooterTitle({ text, children }: PropsWithChildren<Props>) {
    return (
        <Flex flexGrow={1} flexDir='column'>
            {children}
        </Flex>
    )
}
