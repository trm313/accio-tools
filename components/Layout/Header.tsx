import Link from "next/link";
import Image from "next/image";
import { Flex, Text, Container, Heading, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex w='full' px={8} py={6}>
      <Flex w='full' maxW='5xl' justifyContent='space-between' mx='auto'>
        <Link href='/'>
          <Flex alignItems='center'>
            <Box
              mr={4}
              rounded='lg'
              width={12}
              height={12}
              position='relative'
              overflow={"hidden"}
            >
              <Image src='/img/Logo.png' alt='Accio Tools Logo' fill />
            </Box>
            <Heading size='lg'>Accio Tools</Heading>
          </Flex>
        </Link>
        {/* <Flex alignItems='center'>
          <Link href='/about'>
            <Text mr={4}>About</Text>
          </Link>
          <Link href='/mastodon'>
            <Text>Mastodon</Text>
          </Link>
        </Flex> */}
      </Flex>
    </Flex>
  );
}
