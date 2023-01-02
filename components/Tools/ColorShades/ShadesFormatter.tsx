import { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Button,
  Code,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import tinycolor from "tinycolor2";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const SHADE_TIERS: string[] = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const formatAsText = (shades: string[], colorName: string) => {
  let str = "";
  let name = "colorname";
  if (colorName) {
    name = colorName.replace(" ", "").toLowerCase().trim();
  }

  str += `/* ${name} */\n`;
  for (let i = 0; i < shades.length; i++) {
    let tier = "0";
    if (i < SHADE_TIERS.length) {
      tier = SHADE_TIERS[i];
    } else {
      tier = "###";
    }

    str += `${tier}: ${shades[i]} \n`;
  }
  return str;
};

const formatAsCSS = (shades: string[], colorName: string) => {
  let name = "colorname";
  if (colorName) {
    name = colorName.replace(" ", "").toLowerCase().trim();
  }

  let str = ":root {\n";
  for (let i = 0; i < shades.length; i++) {
    let tier = "0";
    if (i < SHADE_TIERS.length) {
      tier = SHADE_TIERS[i];
    } else {
      tier = "###";
    }

    str += `  --${name}-${tier}: ${shades[i]}; \n`;
  }
  str += "}";
  return str;
};

const formatAsTailwind = (shades: string[], colorName: string) => {
  let name = "colorname";
  if (colorName) {
    name = colorName.replace(" ", "").toLowerCase().trim();
  }

  let str = `// tailwind.config.js
module.exports = {
  colors: {
    ${name}: {
      50: '${shades[0]}',
      100: '${shades[1]}',
      200: '${shades[2]}',
      300: '${shades[3]}',
      400: '${shades[4]}',
      500: '${shades[5]}',
      600: '${shades[6]}',
      700: '${shades[7]}',
      800: '${shades[8]}',
      900: '${shades[9]}',
    }
  }
}`;

  return str;
};

interface FormatOption {
  name: string;
  formatCodeString: Function;
  language: string;
}
const FORMATS: FormatOption[] = [
  {
    name: "Text List",
    formatCodeString: formatAsText,
    language: "plaintext",
  },
  {
    name: "CSS",
    formatCodeString: formatAsCSS,
    language: "css",
  },
  {
    name: "Tailwind",
    formatCodeString: formatAsTailwind,
    language: "javascript",
  },
];

const ShadesFormatter = ({ shades, baseColor, colorName }: any) => {
  const [format, setFormat] = useState<FormatOption>(FORMATS[0]);
  const [codeString, setCodeString] = useState<string>("");

  useEffect(() => {
    let str = format.formatCodeString(shades, colorName);
    setCodeString(str);
  }, [format, shades, colorName]);

  return (
    <Flex direction='column' mt={8}>
      <Tabs
        onChange={(index) => setFormat(FORMATS[index])}
        variant='soft-rounded'
        colorScheme={"purple"}
      >
        <TabList>
          {FORMATS.map((option: FormatOption) => (
            <Tab key={`tab_format_${option.name}`}>{option.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {FORMATS.map((option: FormatOption) => (
            <TabPanel key={`tabpanel_format_${option.name}`}>
              <Box p={8} bg='gray.50'>
                <SyntaxHighlighter language={format.language} style={docco}>
                  {codeString}
                </SyntaxHighlighter>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default ShadesFormatter;
