import { Text, Flex, Alert, AlertIcon, Icon } from "@chakra-ui/react";

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
          Check selected language and review syntax
        </Text>
        <Text>
          Double check the parse language currently selected or try to follow
          the feedback from Prettier below to resolve any syntax errors in the
          code. Prettier can only format syntactically correct code.
        </Text>
      </Flex>
    </Alert>
  );
};

export default ErrorAlert;
