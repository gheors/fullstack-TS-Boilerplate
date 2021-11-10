import { Box } from '@chakra-ui/layout'
import { Button, Checkbox, Flex, FormControl, Input, useColorModeValue } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import { appTheme } from '../../pages/_app'
import useTranslation from "next-translate/useTranslation";

export default function Register() {
    const bgColor = useColorModeValue(appTheme.colors.background.bgLight, appTheme.colors.background.bgDark)
    const inputColor = useColorModeValue(appTheme.colors.inputs.inputLight, appTheme.colors.inputs.inputDark)
    const color = useColorModeValue(
        appTheme.colors.text.textDark,
        appTheme.colors.text.textLight
    );

    const boxShadow = `0 0 2px 0 ${appTheme.styles.shadows.black}`

    const { t } = useTranslation("common");

    const [showPassword, setShowPassword] = useState(false);
    const [resetMode, setResetMode] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const toggleEmail = (event: any) => {
        setUsername(event.target.value);
    };

    const togglePassword = (event: any) => {
        setPassword(event.target.value);
    };

    function resetPassword(e: FormEvent) {

    }
    function login(e: FormEvent) {

    }


    return (
        <Box p={5} bg={bgColor} minH="350px">
            <Box mb={5}>{t("Register")}</Box>

            <FormControl >

                <Input
                    color={inputColor}
                    _placeholder={{ color: inputColor }}
                    id={"email"}
                    mb={12}
                    type="email"
                    variant="flushed"
                    placeholder={t("Email")}
                    onChange={toggleEmail}
                />

                {!resetMode && <>
                    <Input
                        color={inputColor}
                        _placeholder={{ color: inputColor }}
                        id={"password"}
                        type={showPassword ? "text" : "password"}
                        variant="flushed"
                        placeholder={t("password")}
                        onChange={togglePassword}
                    />
                    <Box color={"#A0B6D2"}>
                        <Checkbox
                            ml={1}
                            mt={2}
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        >
                            <Flex fontSize='14px' alignItems='flex-end' h='25px'>
                                {t("Show password")}
                            </Flex>
                        </Checkbox>
                    </Box>
                </>}
                <Flex justifyContent="flex-end" >
                    <Button
                        mt={5}
                        boxShadow={"0 1px 3px 0 black"}
                        bg={"#2196F3"}
                        color={"white"}
                        onClick={!resetMode ? login : resetPassword}
                    >
                        {t("Register")}
                    </Button>
                </Flex>
            </FormControl>
        </Box>

    )
}
