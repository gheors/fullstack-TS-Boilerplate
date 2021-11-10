import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useState } from "react";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/ClipLoader";
import { appTheme } from '../pages/_app';
export default function Loading() {

    const color = useColorModeValue(appTheme.colors.loader.light, appTheme.colors.loader.dark)

    const style = css`
  display: block;
  margin: 0 auto;
  border-color: ${color};
`;



    return (
        <Box className="sweet-loading">
            <PropagateLoader loading={true} speedMultiplier={0.5} css={style} size={150} />
        </Box>
    );
}


// Can be a string as well. Need to ensure each key-value pair ends with ;

