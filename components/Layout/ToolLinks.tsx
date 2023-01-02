import Link from "next/link";
import { Flex, Text, Heading, Icon } from "@chakra-ui/react";

import { HiColorSwatch } from "react-icons/hi";
import { IoIosColorPalette } from "react-icons/io";

import { ToolRoute, toolRoutes } from "../../routes/tools";

const NAVICONS: any = {
  "color-converter": {
    icon: IoIosColorPalette,
    color: "#8863af",
  },
  "color-shades-generator": {
    icon: HiColorSwatch,
    color: "#63af8e",
  },
};

const ToolNav = ({ name, description, slug }: ToolRoute) => (
  <Flex
    alignItems='center'
    p={4}
    w={["full", "24rem"]}
    _notLast={{ mr: 4 }}
    my={2}
  >
    <Flex
      flexShrink={0}
      bg={NAVICONS[slug].color}
      color='white'
      p={2}
      rounded='xl'
      mr={4}
      shadow='lg'
    >
      <Icon as={NAVICONS[slug].icon} boxSize={12} />
    </Flex>
    <Flex flexGrow={1} direction='column'>
      <Link href={`/magic/${slug}`}>
        <Text fontWeight={"semibold"}>{name}</Text>
      </Link>
      <Text>{description}</Text>
    </Flex>
  </Flex>
);

const ToolLinks = ({ direction = "row" }: any) => {
  return (
    <Flex direction={direction} flexWrap='wrap'>
      {toolRoutes.map((tool) => (
        <ToolNav
          key={`tool-nav_${tool.slug}`}
          name={tool.name}
          description={tool.description}
          slug={tool.slug}
        />
      ))}
    </Flex>
  );
};

export default ToolLinks;
