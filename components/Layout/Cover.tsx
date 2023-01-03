import Image from "next/image";
import { Flex, Text, Heading, Icon } from "@chakra-ui/react";
import { FaHatWizard } from "react-icons/fa";

export default function Cover() {
  return (
    <Flex
      py={[0, 4, 16]}
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      mx='auto'
    >
      <Flex direction='column' w='full' maxW='lg'>
        <Heading size='2xl' fontWeight={"semibold"} mb={6}>
          Magic micro tools to help you create magic
        </Heading>
        <Heading size='md' fontWeight='normal'>
          Free web-based micro tools for creators, designers, and developers to
          create amazing projects with
        </Heading>
      </Flex>
      <Flex w={["sm", "md"]}>
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
