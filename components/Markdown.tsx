import ReactMarkdown from "react-markdown";
import { Divider, Flex } from "@chakra-ui/react";

const Markdown = ({ content }: any) => {
  return (
    <Flex direction='column' className='md'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Flex>
  );
};

export default Markdown;
