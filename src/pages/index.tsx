import { Flex, useColorMode, Button } from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex>teste reload</Flex>
    </>
  );
}
