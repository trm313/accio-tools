import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Flex, Text, Container, Heading } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: any;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: any) {
  return (
    <Flex direction='column' minH='100vh' maxW='100vw' overflowX='hidden'>
      <Head>
        <title>{title ? `${title} | Accio Tools` : "Accio Tools"}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Container maxW='5xl' flexGrow={1}>
        <Flex direction='column' w='full'>
          <Flex direction='column' my={8}>
            {title && (
              <Heading size='xl' fontWeight='semibold' mb={4}>
                {title}
              </Heading>
            )}
            {description && <Text fontSize='lg'>{description}</Text>}
          </Flex>
          {children}
        </Flex>
      </Container>
      <Footer />
    </Flex>
  );
}
