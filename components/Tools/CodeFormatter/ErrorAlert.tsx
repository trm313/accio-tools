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

const ErrorAlert = () => {
  return (
    <Alert
      status='error'
      flexDirection='column'
      alignItems='flex-start'
      variant='subtle'
    >
      <Flex>
        <AlertIcon />
        <Text fontWeight={"semibold"} fontSize='lg'>
          Failed to Format
        </Text>
      </Flex>
      <Flex direction='column'>
        <Text fontWeight='semibold' my={2}>
          Prettier failed to format the input, here is their feedback
        </Text>
        <Text>
          Syntax error? Oof. Prettier can only format syntactically correct
          code. If possible, resolve the syntax issues and keep trying.
        </Text>
      </Flex>
    </Alert>
  );
};

export default ErrorAlert;
