import { Box, Flex, Switch, Text, useBreakpointValue, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MdDarkMode } from "react-icons/md";

export default function DarkModeSwitcher() {
  const { toggleColorMode, colorMode } = useColorMode();

  const isMobile = useBreakpointValue({ base: true, md: false });
  const color = useColorModeValue(
    "#222", "#0A66C2"
  );



  return (
    <Flex alignItems={"center"} color={color}>

      <Flex alignItems={"center"}>

        <Switch
          size="md"

          mr={isMobile ? 2 : 4}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme={"blackAlpha"}
          bg="lightgray"
          borderRadius={"50px"}
        />

        <Box w={"30px"} >
          <Box
            position={"relative"}
            fontSize={"35px"}
          >
            <MdDarkMode />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
