import { Box } from '@chakra-ui/layout'
import { Button, Checkbox, Flex, FormControl, Input, useColorModeValue } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import { appTheme } from '../../pages/_app'
import useTranslation from "next-translate/useTranslation";

export default function Login() {
    const bgColor = useColorModeValue(appTheme.colors.background.bgLight, appTheme.colors.background.bgDark)
    const inputColor = useColorModeValue(appTheme.colors.inputs.inputLight, appTheme.colors.inputs.inputDark)
    const color = useColorModeValue(
        appTheme.colors.text.textDark,
        appTheme.colors.text.textLight
    );

    const boxShadow = appTheme.styles.shadows.black

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
        <Box p={5} bg={bgColor} minH="350px" >
            <Box mb={5}>{t("Login")}</Box>
            <FormControl>

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
                    <Flex color={"#A0B6D2"} w='100%' justifyContent={'space-between'} mt={2}
                    >
                        <Checkbox
                            ml={1}
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        >
                            <Flex fontSize='14px' alignItems='flex-end' h='25px'>
                                {t("Show password")}
                            </Flex>
                        </Checkbox>
                        {!resetMode && <Flex justifyContent={"flex-end"} fontSize='14px'>
                            <Box
                                color={"#2196F3"}
                                onClick={() => setResetMode(true)}
                                textDecoration='underline'
                                _hover={{ color: color }}
                                cursor='pointer'
                            >
                                {t("Forgot your password?")}
                            </Box>
                        </Flex>}
                    </Flex>
                </>}

                <Flex w={"100%"} justifyContent={resetMode ? "space-between" : "flex-end"}>
                    {resetMode && <Button
                        boxShadow={"0 1px 3px 0 black"}
                        bg={"tomato"}
                        color={"white"}
                        onClick={() => setResetMode(false)}
                    >
                        {t("Back")}
                    </Button>}

                    <Button
                        boxShadow={"0 1px 3px 0 black"}
                        bg={"#2196F3"}
                        color={"white"}
                        mt={5}
                        onClick={!resetMode ? login : resetPassword}
                    >
                        {!resetMode ? "login" : t("Reset Password")}
                    </Button>
                </Flex>
            </FormControl>
        </Box>

    )
}
