import { useState } from "react";
import { Text, Flex, Code } from "@chakra-ui/react";
import tinycolor from "tinycolor2";
import ColorEntry from "../../ColorEntry/ColorEntry";

const ColorConverter = () => {
  const [color, setColor] = useState(tinycolor("#e86146"));
  const handleChangeColor = (color: any) => {
    let tc = tinycolor(color);
    setColor(tc);
  };

  return (
    <>
      <ColorEntry onChange={handleChangeColor} />
      <Code p={4} my={1} fontSize='lg'>
        {color.toHexString()}
      </Code>
      <Code p={4} my={1} fontSize='lg'>
        {color.toHex8String()}
      </Code>
      <Code p={4} my={1} fontSize='lg'>
        {color.toRgbString()}
      </Code>
      <Code p={4} my={1} fontSize='lg'>
        {color.toHsvString()}
      </Code>
      <Code p={4} my={1} fontSize='lg'>
        {color.toHslString()}
      </Code>
      <Flex
        my={2}
        p={8}
        w='full'
        bgColor={color.toHexString()}
        align='center'
        justify='space-around'
      >
        <Text color='white'>White Text</Text>
        <Text color='black'>Black Text</Text>
      </Flex>
    </>
  );
};

export default ColorConverter;
