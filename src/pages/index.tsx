import {
  Box,
  Button,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { DividerWithText, LoginForm, Logo, Rocket, Card } from "components";
import { useRequest } from "services";
import React, { useState } from "react";
import { useEffect } from "react";

export interface User {
  age: number;
  id: string;
  name: string;
  nickname: string;
  email: string;
  account: {
    balance: string;
    id: string;
  };
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [signed, setSigned] = useState<User>();
  const { doRequest: fetchUsers, errors } = useRequest({
    url: "users",
    onSuccess: ({ users }) => setUsers(users),
  });

  const handleSingInOnSuccess = ({ user }) => {
    setSigned(user);
    fetchUsers();
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box
      bg={mode("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ sm: "6", lg: "8" }}
    >
      {signed && (
        <Button
          position="absolute"
          onClick={() => {
            setSigned(null);
          }}
        >
          Sair
        </Button>
      )}
      <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} mt="4" w={{ sm: "full" }}>
        {signed && <Rocket nickname={signed?.nickname} />}
        <Box
          bg={mode("white", "gray.700")}
          py="8"
          px={{ base: "4", md: "10" }}
          shadow="base"
          rounded={{ sm: "lg" }}
        >
          <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
            <Box mb={{ base: "4", md: "8" }}>
              <Logo h="12" iconColor={mode("blue.600", "blue.200")} />
            </Box>
            <Heading mt="6" size="lg" fontWeight="extrabold">
              Welcome to RocketPay
            </Heading>
            {signed && <Card users={users} />}
            {!signed && (
              <Text my="6" maxW="md" fontWeight="medium">
                <span>Enter your info to get started</span>
              </Text>
            )}
          </Box>
          {!signed && <LoginForm onSuccess={handleSingInOnSuccess} />}
          <SimpleGrid mt="6" columns={2} spacing="3">
            <Button
              color="currentColor"
              variant="outline"
              as={Link}
              href="https://github.com/felipefrmelo/rocketpayapi"
              isExternal
            >
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub />
              <DividerWithText /> Api
            </Button>

            <Button
              color="currentColor"
              variant="outline"
              as={Link}
              href="https://github.com/felipefrmelo/rocketpayweb"
              isExternal
            >
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub />
              <DividerWithText /> Web
            </Button>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
