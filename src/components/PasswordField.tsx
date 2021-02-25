import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  useColorModeValue as mode,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import * as React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface IPasswordField extends InputProps {
  errors?: string;
}

export const PasswordField = React.forwardRef<HTMLInputElement, IPasswordField>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    const onClickReveal = () => {
      onToggle();
      const input = inputRef.current;
      if (input) {
        input.focus({ preventScroll: true });
        const length = input.value.length * 2;
        requestAnimationFrame(() => {
          input.setSelectionRange(length, length);
        });
      }
    };

    return (
      <FormControl isInvalid={!!props?.errors} id="password">
        <Flex justify="space-between">
          <FormLabel>Password</FormLabel>
          <Box
            as="a"
            color={mode("blue.600", "blue.200")}
            fontWeight="semibold"
            fontSize="sm"
          >
            Forgot Password?
          </Box>
        </Flex>
        <InputGroup>
          <InputRightElement>
            <IconButton
              bg="transparent !important"
              variant="ghost"
              aria-label={isOpen ? "Mask password" : "Reveal password"}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            ref={mergeRef}
            name="password"
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            
            {...props}
          />
        </InputGroup>
        <FormErrorMessage>
          <Alert borderRadius={4} status="error">
            <AlertIcon />
            {props?.errors}
          </Alert>
        </FormErrorMessage>
      </FormControl>
    );
  }
);

PasswordField.displayName = "PasswordField";
