import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { useRequest } from "services";
import { PasswordField } from "./PasswordField";

interface IUser extends Object {
  name: string;
  password: string;
  email: string;
  nickname: string;
  age: number;
}

interface IloginForm {
  onSuccess?: Function;
}

export const LoginForm = ({ onSuccess }: IloginForm) => {
  const [fields, setFields] = useState<IUser>();
  const { doRequest, errors } = useRequest<IUser>({
    url: "users",
    body: {
      ...fields,
    },
    method: "post",
    onSuccess: onSuccess,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const InputWrapper = (id, label, type) => (
    <FormControl
      isInvalid={errors && errors[id]}
      onChange={handleChange}
      id={id}
    >
      <FormLabel>{label}</FormLabel>
      <Input name={id} type={type} />
      <FormErrorMessage>
        <Alert borderRadius={4} status="error">
          <AlertIcon />
          {errors && errors[id]}
        </Alert>
      </FormErrorMessage>
    </FormControl>
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(fields);
        doRequest();
      }}
    >
      <Stack spacing="6">
        {InputWrapper("email", "Email", "email")}
        {InputWrapper("name", "Name ", "text")}
        {InputWrapper("age", "Age", "number")}
        {InputWrapper("nickname", "Nickname", "text")}
        <PasswordField errors={errors?.password} onChange={handleChange} />
        <Button type="submit" size="lg" fontSize="md">
          Ignite
        </Button>
      </Stack>
    </form>
  );
};
