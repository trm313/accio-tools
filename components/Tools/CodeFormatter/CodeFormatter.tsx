import { useState } from "react";

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
} from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const LANGUAGE_OPTIONS = [
  {
    name: "Javascript",
    language: "javascript",
    parser: "babel",
  },
  {
    name: "Typescript",
    language: "typescript",
    parser: "typescript",
  },
  {
    name: "HTML",
    language: "htmlbars",
    parser: "html",
  },
  // {
  //   name: "SQL",
  //   language: "sql",
  //   parser: null,
  // },
  // {
  //   name: "Markdown",
  //   language: "markdown",
  //   parser: "markdown",
  // },
  {
    name: "GraphQL",
    language: "javascript",
    parser: "graphql",
  },
  {
    name: "Text",
    language: "plaintext",
    parser: "markdown",
  },
];

const CodeFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  const [format, setFormat] = useState(LANGUAGE_OPTIONS[0]);

  const formatCode = () => {
    setError(null);
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
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleChangeFormat = (name: string) => {
    let f = LANGUAGE_OPTIONS.find((o) => o.name === name);
    if (f) {
      setFormat(f);
    }
  };

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

      <Button onClick={() => formatCode()} colorScheme='purple' mb={8}>
        Format
      </Button>

      {error && (
        <>
          <Alert status='error'>
            <AlertIcon />
            Code failed to format, see Prettier error below
          </Alert>
          <SyntaxHighlighter language={"plaintext"} style={docco}>
            {error}
          </SyntaxHighlighter>
        </>
      )}
      {output && !error && (
        <SyntaxHighlighter language={"javascript"} style={docco}>
          {output}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default CodeFormatter;
