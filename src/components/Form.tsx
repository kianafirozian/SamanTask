"use client";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormInput {
  title: string;
  body?: string;
}

const Form = () => {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
    body: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} color={"blue"}>
      <FormLabel>Title</FormLabel>
      <Input type="text" {...register("title")} />
      <p className="text-red-600 text-sm pt-1">title is required</p>
      <FormLabel marginTop={2}>Body</FormLabel>
      <Input type="text" {...register("body")} />

      <Button type="submit" marginTop={5} color={"blue"}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
