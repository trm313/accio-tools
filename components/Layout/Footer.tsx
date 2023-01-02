import { Flex, Text, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex direction='column' mt={16} px={16}>
      <Divider />
      <Flex alignItems='center' justifyContent={"space-evenly"} p={8}>
        <Text>Hubbub Studios &copy; {new Date().getFullYear()}</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
