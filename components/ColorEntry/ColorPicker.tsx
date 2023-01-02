import { useState, useRef } from "react";
import { Text, Box, Flex, useOutsideClick } from "@chakra-ui/react";

import namer from "color-namer";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, handleChangeInput }: any) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: ref,
    handler: () => setIsPickerOpen(false),
  });

  let colorname = namer(color.toHexString()).html[0].name;

  return (
    <Flex position='relative' ref={ref} mr={[4]}>
      <Flex direction='column' alignItems='center' w={24}>
        <Box
          h={[20, 24]}
          w={[20, 24]}
          rounded='3xl'
          bgColor={color.toHexString()}
          onClick={() => setIsPickerOpen(!isPickerOpen)}
          cursor='pointer'
        />
        <Text fontSize='xs'>{colorname}</Text>
      </Flex>
      <Flex position='relative'>
        {isPickerOpen && (
          <Flex position='absolute' left={0} zIndex={1}>
            <SketchPicker
              color={color.toHex()}
              onChangeComplete={(color) => handleChangeInput(color.hex)}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ColorPicker;
