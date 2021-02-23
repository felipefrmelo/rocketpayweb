import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { DividerWithText, LoginForm, Logo } from "components";

export default function App() {
  return (
    <Box
      bg={mode("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ sm: "6", lg: "8" }}
    >
      <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} mt="8" w={{ sm: "full" }}>
        <Box
          bg={mode("white", "gray.700")}
          py="8"
          px={{ base: "4", md: "10" }}
          shadow="base"
          rounded={{ sm: "lg" }}
        >
          <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
            <Box mb={{ base: "10", md: "16" }}>
              <Logo h="8" iconColor={mode("blue.600", "blue.200")} />
            </Box>
            <Heading mt="6" size="lg" fontWeight="extrabold">
              Welcome to RocketPay
            </Heading>
            <Text my="6" maxW="md" fontWeight="medium">
              <span>Enter your info to get started</span>
            </Text>
          </Box>
          <LoginForm />
          <DividerWithText mt="6">or continue with</DividerWithText>
          <SimpleGrid mt="6" columns={3} spacing="3">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Facebook</VisuallyHidden>
              <FaFacebook />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub />
            </Button>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
