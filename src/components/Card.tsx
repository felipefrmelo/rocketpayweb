import {
  Box,
  Button,
  Divider,
  Input,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Description } from "./Description";

interface User {
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

export const Card = ({ users }: { users: User[] }) => {
  return (
    <Box as="section" bg={mode("gray.100", "inherit")}>
      <Box
        mx="auto"
        rounded={{ md: "lg" }}
        bg={mode("white", "gray.700")}
        shadow="base"
        overflow="hidden"
      >
        {users.map(({ name, nickname, email, account }) => (
          <Box>
            <Divider orientation="horizontal" bg="purple.500" h="2px" />
            <Box>
              <Description title="Name" value={name} />
              <Description title="Nickname" value={nickname} />
              <Description title="Balance" value={account.balance} />
            </Box>
            <Stack>
              <Input />
              <Button>Depositar</Button>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
