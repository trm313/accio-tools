export const md: string = `
# How to Use Code Formatter

1. Copy and paste a code snippet into the large text box
1. Use the dropdown to select your language, if needed
1. Press the "Format" button
1. The formatted code will be shown belown!

This tool uses Prettier to perform the formatting, and React Syntax Highlighter to render a nice result with syntax highlighting. 

It currently supports:
- Javascript
- Typescript
- HTML
- GraphQL 

If none of these are an exact match, it may be worth trying whatever is closest, as eg. the Javascript parser may be able to produce a suitable result. 

# Why did I build this?

I'll often come across a code snippet that I want to read through, but if it's in a bad format it's a pain to read. My usual go-to is to open VS Code, copy in the code, save the file to trigger an auto formatter, or install the necessary plugin. It's a hassle.

# Resources

This project was made with some wonderful resources from around the web:

- [Prettier (Standalone)](https://prettier.io/docs/en/browser.html)
- [react\-syntax\-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- [prettier\-plugin\-sql](https://www.npmjs.com/package/prettier-plugin-sql)

`;
