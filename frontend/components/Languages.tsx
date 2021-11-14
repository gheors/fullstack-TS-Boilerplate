import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


export function Languages() {
  const [value, setValue] = React.useState("En");
  const { t } = useTranslation("common");
  const { locale, locales, pathname, query } = useRouter();


  const color = useColorModeValue("black", "white");
  return (
    <Flex
      alignItems={"center"}
      color={color}

    >
      <Text mt={1} fontSize={"16px"} fontFamily={"Helvetica"}>
        {t("Languages")}
      </Text>
      <Box h={"40px"}>
        <Accordion
          allowToggle
          w={"75px"}
          border={"1px solid transparent"}
          borderRadius={"50px"}
        >
          <AccordionItem>
            <AccordionButton _hover={{ backgroundColor: "none" }} color={color}>
              <Box flex="1" textAlign="left">
                {value.toUpperCase()}
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              {locales !== undefined &&
                locales.map((lan, i) => (
                  <Box
                    value={lan}
                    key={i}
                    onClick={() => setValue(lan)}
                    cursor={"pointer"}
                  >
                    <Link href={{ pathname, query }} locale={lan}>
                      <Box
                        fontSize={"16px"}
                        fontWeight={locale === lan ? "bold" : "normal"}
                        key={i}
                      >
                        {lan.toUpperCase()}
                      </Box>
                    </Link>
                  </Box>
                ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
}
