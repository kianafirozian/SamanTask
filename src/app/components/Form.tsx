"use client";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormInput {
  title: string;
  body: string;
}

const Form = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    body: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Title</FormLabel>
      <input type="text" {...register("title")} />

      <FormLabel>Body</FormLabel>
      <input type="text" {...register("body")} />

      <input type="submit" />
    </FormControl>
  );
};

export default Form;
