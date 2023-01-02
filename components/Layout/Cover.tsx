import Image from "next/image";
import { Flex, Text, Heading, Icon } from "@chakra-ui/react";
import { FaHatWizard } from "react-icons/fa";

export default function Cover() {
  return (
    <Flex
      py={16}
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      mx='auto'
    >
      <Flex flexShrink={0} direction='column' w={"md"}>
        <Heading size='2xl' fontWeight={"semibold"} mb={6}>
          Micro tools for web creations
        </Heading>
        <Heading size='md' fontWeight='normal'>
          Micro tools to help designers, developers, and creators
        </Heading>
      </Flex>
      <Flex w='lg'>
        <Image
          src={"/img/Wizard_Cover.svg"}
          alt={"Magic wizard with staff"}
          width={"500"}
          height={"400"}
        />
      </Flex>
    </Flex>
  );
}
