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

interface Props {
  onAddPost: (data: FormInput) => void;
}
interface FormInput {
  title: string;
  body?: string;
}

const Form = ({ onAddPost }: Props) => {
  const schema = yup.object({
    title: yup.string().required("Title is required"),
    body: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInput) => {
    onAddPost({ ...data });
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      color="lightblue"
    >
      <FormLabel color="darkblue">Title</FormLabel>
      <Input type="text" {...register("title")} />
      {errors.title?.type === "required" && (
        <p className="text-red-600 text-sm">title is required...</p>
      )}
      <FormLabel marginTop={2} color="darkblue">
        Body
      </FormLabel>
      <Input type="text" {...register("body")} />

      <Button
        disabled={!isValid}
        type="submit"
        marginTop={5}
        color="blue"
        marginBottom={5}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
