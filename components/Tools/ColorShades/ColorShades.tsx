import { useEffect, useState } from "react";
import { Text, Flex } from "@chakra-ui/react";
import tinycolor from "tinycolor2";
import namer from "color-namer";

import ColorEntry from "../../ColorEntry/ColorEntry";
import ShadesFormatter from "./ShadesFormatter";

const ColorShades = () => {
  const [color, setColor] = useState(tinycolor("#e86146"));
  const [numShades, setNumShades] = useState<number>(10);
  const [shades, setShades] = useState<string[]>([]);

  const handleChangeColor = (color: any) => {
    let tc = tinycolor(color);
    setColor(tc);
  };

  useEffect(() => {
    const generateShades = () => {
      // TODO: Try a better approach here like this one: https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts

      let shadesArr: string[] = [];
      let hsl = tinycolor(color).toHsl();

      for (let i = numShades - 1; i >= 0; i -= 1) {
        hsl.l = (i + 0.5) / numShades;
        shadesArr.push(tinycolor(hsl).toHexString());
      }

      setShades(shadesArr);
    };

    generateShades();
  }, [color, numShades]);

  let colorName = namer(color.toHexString()).html[0].name;
  // TODO: Compile the shades and tiers in here, then pass into ShadeFormatter so its more reusable

  return (
    <>
      <ColorEntry onChange={handleChangeColor} />
      <Flex w='full' justifyContent={"stretch"} mt={8}>
        {shades.map((shade, i) => (
          <Flex key={`shade-${shade}`} direction='column' flexGrow={1}>
            <Flex h={32} bgColor={shade}></Flex>
            <Text
              align='center'
              fontSize='sm'
              color='gray.600'
              display={{ base: "none" }}
            >
              {shade}
            </Text>
          </Flex>
        ))}
      </Flex>
      <ShadesFormatter
        shades={shades}
        baseColor={color}
        colorName={colorName}
      />
    </>
  );
};

export default ColorShades;
