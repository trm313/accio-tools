export const colorConverterMarkdown: string = `
# How to Use Color Converter

Use the input field to enter a color value. We support all color forms: hex, RGB, RGBA, HSL, HSV, and via color name (eg. gray).

Alternatively, click on the color box to open the color picker, and find a color that you like there! 

Once selected, we'll show you all of the various forms of that color below, including a space to see how it looks with text on top.

# Color Formats, Explained

**RGB** - A 3-dimensional color model of red, green, and blue that are mixed together to produce a specific color. RGB color values can range from 0-255, or can be entered as a percentage. Example: \`rgb(20, 150, 255)\`

**RGBA** - It is the same schema as RGB, but allows for a fourth parameter, opacity, with a value between 0-1. Example: \`rgba(20, 150, 22, .1)\`

**Hex** - Hex colors follow the same color model as RGB, simply translating the RGBA values to a hexadecimal. Hex value go from 0-9, and then continue from A-F. We can see this more clearly by looking at each major step: 00=0, 99=153, AA=170, FF=255. Hex values are most commonly seen in the form \`RRGGBB\`, but can also have the *alpha* (opacity) parameter appended to the end as in \`RRGGBBAA\`. So, for example, a nice steel blue would be \`#7F98CC\`, and if you wanted to set a 50% opacity on it, it would be \`#7f98cc80\`. 

**HSV** - A cylindrical color model with paramters for hue, saturation, and value. Example: \`hsv(210, 4%, 97%)\`

- *Hue* is the angle of the color on the RGB color circle. For isntance, a 0deg hue represents red, 120deg for green, and 240deg for blue. 
- *Saturation* determines the amount of color used, between 0% (grayscale, no color), and 100% (full saturation). 
- *Value* controls the brightness of the color, from 0% (pure black) to 100% (no black mixed in). Value is sometimes referred to brightness, so the HSV model may sometimes be referred to as HSB.

**HSL** - Another cylindrical color, with the same hue and saturation dimensions, and the last parameter of lightness, which determines the lumosity of the color, from 0% (black), 50% (purest color), to 100% (white). It's similar to HSV, but the overall scale is a bit different. Example: \`hsl(210, 38%, 95%)\`

# Resources

This project was made with some wonderful resources from around the web:

- [TinyColor](https://github.com/bgrins/TinyColor/tree/master/npm)
- [color\-namer](https://www.npmjs.com/package/color-namer)
- [Programming Design Systems](https://programmingdesignsystems.com/color/color-models-and-color-spaces/index.html)

`;
