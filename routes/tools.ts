import type { ReactElement } from "react";
import ColorConverter from "../components/Tools/ColorConverter/ColorConverter";

export interface ToolRoute {
  name: string;
  slug: string;
  description: string;
}

export const toolRoutes: Array<ToolRoute> = [
  {
    name: "Color Converter",
    slug: "color-converter",
    description:
      "Convert color from any format to Hex, RGB, HSL, HSV, and more",
  },
  {
    name: "Color Shades Generator",
    slug: "color-shades-generator",
    description:
      "Generate shades for a color, ready-to-use for CSS, Tailwind, and more",
  },
  {
    name: "Code Formatter",
    slug: "code-formatter",
    description:
      "Format a code snippet into a readable form in JS, TS, HTML, and more",
  },
];

export const toolComponents = [
  {
    slug: "color-converter",
    component: ColorConverter,
  },
];
