import { useEffect, useState } from "react";

import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserHtml from "prettier/parser-html";
import parserMarkdown from "prettier/parser-markdown";
import parserGraphql from "prettier/parser-graphql";
import parserTypescript from "prettier/parser-typescript";
// TODO: SQL parser - https://www.npmjs.com/package/prettier-plugin-sql

import {
  Text,
  Flex,
  Code,
  Textarea,
  Button,
  Select,
  Alert,
  AlertIcon,
  Icon,
  Box,
} from "@chakra-ui/react";
import { TfiEraser } from "react-icons/tfi";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { TbCodePlus } from "react-icons/tb";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import ErrorAlert from "./ErrorAlert";
import SizeWarning from "./SizeWarning";
import { LANGUAGE_OPTIONS } from "./languageOptions";

const CodeFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);
  const [showSizeWarning, setShowSizeWarning] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);

  const [format, setFormat] = useState(LANGUAGE_OPTIONS[0]);

  const SIZE_WARNING_THRESHOLD = 10000; // In characters (1 char = 1 byte for most Unicode characters, up to 4)

  const formatCode = () => {
    setIsFormatting(true);
    setError(null);

    setTimeout(() => {
      // Hacky, but fixes the loading state not triggering in time, and gives it that "we're doing something important feel" (and avoids flashing state)
      try {
        let code = String(input);
        const formattedCode = prettier.format(code, {
          parser: format.parser || "babel",
          plugins: [
            parserBabel,
            parserGraphql,
            parserHtml,
            parserMarkdown,
            parserTypescript,
          ],
        });
        setOutput(formattedCode);
        setIsFormatting(false);
      } catch (e: any) {
        setError(e.message);
        setIsFormatting(false);
      }
    }, 350);
  };

  const handleChangeFormat = (name: string) => {
    let f = LANGUAGE_OPTIONS.find((o) => o.name === name);
    if (f) {
      setFormat(f);
    }
  };

  useEffect(() => {
    if (input.length >= SIZE_WARNING_THRESHOLD && !showSizeWarning) {
      setShowSizeWarning(true);
      return;
    }
    if (input.length < SIZE_WARNING_THRESHOLD && showSizeWarning) {
      setShowSizeWarning(false);
    }
  }, [input, showSizeWarning]);

  return (
    <>
      <Select
        size='sm'
        w={48}
        value={format.name}
        onChange={(e) => handleChangeFormat(e.target.value)}
        variant='filled'
        mb={1}
        rounded='lg'
      >
        {LANGUAGE_OPTIONS.map((lang) => (
          <option
            key={`CodeFormatter_LangSelector_${lang.name}`}
            value={lang.name}
          >
            {lang.name}
          </option>
        ))}
      </Select>
      <Textarea value={input} onChange={(e) => setInput(e.target.value)} />

      <Flex flexGrow={1} mt={2}>
        <Button
          flexGrow={1}
          onClick={() => formatCode()}
          size='lg'
          leftIcon={<Icon boxSize={6} as={TbCodePlus} />}
          colorScheme='purple'
          mb={8}
          mr={8}
          isLoading={isFormatting}
          loadingText='Formatting'
        >
          Format
        </Button>
        <Button
          onClick={() => setInput("")}
          size='lg'
          colorScheme='gray'
          leftIcon={<Icon as={TfiEraser} />}
        >
          Clear Input
        </Button>
      </Flex>

      {showSizeWarning && (
        <Flex w='full' maxW='lg' justifySelf='center' mx='auto'>
          <SizeWarning length={input.length} />
        </Flex>
      )}

      {error && (
        <>
          <Flex mb={2}>
            <ErrorAlert />
          </Flex>
          <Flex
            bg='gray.200'
            justifyContent='flex-end'
            shadow='lg'
            rounded='lg'
          >
            <Button
              onClick={() => {
                setOutput("");
                setError(null);
              }}
              leftIcon={<Icon as={TfiEraser} />}
              colorScheme='teal'
              size='sm'
              m={2}
            >
              Clear Output
            </Button>
          </Flex>
          <SyntaxHighlighter language={"plaintext"} style={docco}>
            {error}
          </SyntaxHighlighter>
        </>
      )}
      {output && !error && (
        <>
          <Flex
            bg='gray.200'
            justifyContent='flex-end'
            shadow='lg'
            rounded='lg'
          >
            <Button
              onClick={() => setOutput("")}
              leftIcon={<Icon as={TfiEraser} />}
              colorScheme='teal'
              size='sm'
              m={2}
            >
              Clear Output
            </Button>
          </Flex>
          <SyntaxHighlighter language={"javascript"} style={docco}>
            {output}
          </SyntaxHighlighter>
        </>
      )}
    </>
  );
};

export default CodeFormatter;
