import { Flex } from '@chakra-ui/layout';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Footer from '../components/footer/Footer';
import AccessWith from '../components/welcomePage/AccessWith';
import Login from '../components/welcomePage/Login';
import Register from '../components/welcomePage/Register';
import Welcome from '../components/welcomePage/Welcome';
import { appTheme } from './_app';

export default function sign() {
    const { t } = useTranslation("common");
    const bgColor = useColorModeValue(appTheme.colors.background.bgLight, appTheme.colors.background.bgDark)
    const boxShadow = appTheme.styles.shadows.black
    const boxShadowGrey = appTheme.styles.shadows.grey

    const [tabIndex, setTabIndex] = React.useState(0);
    const handleTabsChange = (index: number) => {
        setTabIndex(index);
    };

    return (
        <Flex minH='100vh' className='test' flexDir='column' p={0}>
            <Flex flexDir='column' bgColor={'rgba(50,50,50,1)'} boxShadow={boxShadow} flexGrow={1} >
                <Flex flexGrow={2} >
                    <Welcome />
                    <Box mr={5} mb={5} mt={5} bg={bgColor} boxShadow={boxShadowGrey} borderRadius='15px'>
                        <Tabs index={tabIndex} onChange={handleTabsChange} mt={3}>
                            <TabList pl={4} pr={4} borderRadius='0 0 15px 15px'>
                                <Tab w={"50%"}>
                                    {t("Login")}

                                </Tab>
                                <Tab w={"50%"}>
                                    {t("Sign In")}
                                </Tab>
                            </TabList>
                            <TabPanels >
                                <TabPanel p={0}>
                                    <Login />

                                </TabPanel>
                                <TabPanel p={0}>
                                    <Register />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <AccessWith />
                    </Box>
                </Flex>
                <Footer />

            </Flex>

        </Flex >
    )
}

