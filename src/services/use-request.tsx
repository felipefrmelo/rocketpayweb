import { useToast, UseToastOptions } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
});

export function useRequest<T>({
  url,
  onSuccess,
  method = "get",
  body = {},
}: {
  url: string;
  method?: string;
  onSuccess?: Function;
  body?: T | {};
}) {
  const [errors, setErrors] = useState<T>();
  const toast = useToast();
  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await api[method](url, { ...body, ...props });
      if (onSuccess) onSuccess(response.data);
    } catch (err) {
      console.log(err.response.data);
      toast({
        description: err.message,
        status: "error",
        title: "Oops",
        duration: 2000,
        position: "top-right",
      });
      setErrors(err.response?.data.message);
    }
  };

  return { doRequest, errors };
}
