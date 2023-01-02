import { Text, Flex, Input } from "@chakra-ui/react";

const ColorInput = ({ value, onChange }: any) => {
  return (
    <Flex direction='column'>
      <Input
        value={value}
        size='lg'
        h={16}
        fontSize={"2xl"}
        variant='filled'
        onChange={(e) => onChange(e.target.value)}
        placeholder='Hex value #ababab'
      />
      <Text fontSize='sm' mt={4}>
        Enter color value in any format (name, hex, RGB, HSL) or click the color
        box to select a color
      </Text>
    </Flex>
  );
};

export default ColorInput;
