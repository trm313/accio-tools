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
      description='Copy a code snippet to prettify it into a nice format for reading or re-copying'
    >
      <CodeFormatter />
      <Divider my={8} />
      <Markdown content={md} />

      <ToolsList />
    </Layout>
  );
};

export default ColorConverterPage;
