import { useState, useEffect } from "react";
import { Text, Flex } from "@chakra-ui/react";
import tinycolor from "tinycolor2";

import ColorPicker from "./ColorPicker";
import ColorPctTable from "./ColorPctTable";
import ColorInput from "./ColorInput";

interface ColorEntryProps {
  value?: string;
  onChange: Function;
}

const ColorEntry = ({ onChange, value }: ColorEntryProps) => {
  const [input, setInput] = useState("#7e79ce");
  const [color, setColor] = useState(tinycolor(input));

  const handleChangeInput = (str: string) => {
    setInput(str);
  };

  useEffect(() => {
    onChange(color);
  }, [color, onChange]);

  useEffect(() => {
    let tc = tinycolor(input);
    setColor(tc);
  }, [input]);

  return (
    <Flex
      flexGrow={1}
      flexDirection={["column-reverse", "row"]}
      border='1px'
      borderColor='gray.200'
      p={8}
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <ColorPicker handleChangeInput={handleChangeInput} color={color} />
        <ColorPctTable color={color} />
      </Flex>

      <Flex flexGrow={1} direction='column' ml={[0, 8]} mb={[4, 0]}>
        <ColorInput value={input} onChange={handleChangeInput} />
      </Flex>
    </Flex>
  );
};

export default ColorEntry;
