import {
  Text,
  Flex,
  Code,
  Textarea,
  Button,
  Select,
  Alert,
  AlertIcon,
  Icon,
} from "@chakra-ui/react";

const SizeWarning = ({ length }: any) => {
  let sizeKB = length / 1000;
  let sizeMB = sizeKB / 1000;

  let sizeString = `${sizeKB} KB`;
  if (sizeMB >= 1) {
    sizeString = `${sizeMB} MB`;
  }

  let lengthString = `${length} chars`;

  return (
    <Alert
      status='warning'
      flexDirection='column'
      alignItems='flex-start'
      variant='subtle'
      mb={8}
    >
      <Flex>
        <AlertIcon />
        <Text fontWeight={"semibold"} fontSize='lg'>
          Large Input Size Warning
        </Text>
      </Flex>
      <Flex direction='column'>
        <Text fontWeight='semibold' my={2}>
          Length: {lengthString} | Size: {sizeString}
        </Text>
        <Text>
          This is a browser-based tool, so feel free to go for it, but note that
          it may be taxing on your browser to format and render the results.
        </Text>
      </Flex>
    </Alert>
  );
};

export default SizeWarning;
