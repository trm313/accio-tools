import { Divider, Heading } from "@chakra-ui/react";

import Layout from "../../components/Layout/Layout";
import Markdown from "../../components/Markdown";
import ColorShades from "../../components/Tools/ColorShades/ColorShades";
import ToolsList from "../../components/Layout/ToolsList";

import { colorShadesMarkdown } from "../../markdown/colorShades";

const ColorShadesGenerator = () => {
  return (
    <Layout
      title='Color Shades Generator'
      description='Input a color and return color shades in a 50 - 900 format, ready-to-use in CSS files, TailwindCSS, Chakra UI, and as a plaintext list'
    >
      <ColorShades />
      <Divider my={8} />
      <Markdown content={colorShadesMarkdown} />

      <ToolsList />
    </Layout>
  );
};

export default ColorShadesGenerator;
