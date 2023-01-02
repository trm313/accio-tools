import { Divider, Heading } from "@chakra-ui/react";

import Layout from "../../components/Layout/Layout";
import Markdown from "../../components/Markdown";
import ColorShades from "../../components/Tools/ColorShades/ColorShades";
import ToolLinks from "../../components/Layout/ToolLinks";

import { colorShadesMarkdown } from "../../markdown/colorShades";

const ColorShadesGenerator = () => {
  return (
    <Layout
      title='Color Shades Generator'
      description='Input a color and return color shades in a 50 - 900 format, ready-to-use for CSS files, TailwindCSS, and other styling formats'
    >
      <ColorShades />
      <Divider my={8} />
      <Markdown content={colorShadesMarkdown} />
      <Divider my={8} />
      <Heading size='lg' fontWeight='semibold'>
        More Magic Tools
      </Heading>
      <ToolLinks />
    </Layout>
  );
};

export default ColorShadesGenerator;
