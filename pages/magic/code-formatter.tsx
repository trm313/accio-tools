import { Divider, Flex, Heading } from "@chakra-ui/react";

import Layout from "../../components/Layout/Layout";
import Markdown from "../../components/Markdown";
import CodeFormatter from "../../components/Tools/CodeFormatter/CodeFormatter";
import ToolsList from "../../components/Layout/ToolsList";

import { md } from "../../markdown/codeFormatter";

const ColorConverterPage = () => {
  return (
    <Layout
      title='Code Formatter'
      description='Format a code snippet with Prettier into a pretty form in JS, TS, HTML, and more'
    >
      <CodeFormatter />
      <Divider my={8} />
      <Markdown content={md} />

      <ToolsList />
    </Layout>
  );
};

export default ColorConverterPage;
