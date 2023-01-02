import { Divider, Heading, Flex } from "@chakra-ui/react";
import ToolLinks from "./ToolLinks";

const ToolsList = () => {
  return (
    <>
      <Divider my={8} />
      <Heading size='lg' fontWeight='semibold'>
        <i>Accio</i> more magic tools
      </Heading>
      <ToolLinks />
    </>
  );
};

export default ToolsList;
