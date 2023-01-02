import ReactMarkdown from "react-markdown";
import { Divider, Flex, Heading } from "@chakra-ui/react";

import Layout from "../../components/Layout/Layout";
import Markdown from "../../components/Markdown";
import ColorConverter from "../../components/Tools/ColorConverter/ColorConverter";
import ToolLinks from "../../components/Layout/ToolLinks";

import { colorConverterMarkdown } from "../../markdown/colorConverter";

const ColorConverterPage = () => {
  return (
    <Layout
      title='Color Converter'
      description='Convert a color from Hex, RGB, RGBA, HSL, HSV, or name to any other format'
    >
      <ColorConverter />
      <Divider my={8} />
      <Markdown content={colorConverterMarkdown} />
      <Divider my={8} />
      <Heading size='lg' fontWeight='semibold'>
        More Magic Tools
      </Heading>
      <ToolLinks />
    </Layout>
  );
};

export default ColorConverterPage;
