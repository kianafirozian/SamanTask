"use client";
import {
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
  id?: number;
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
    onAddPost({ ...data, id: Math.floor(Math.random() * 1000) });
  };

  return (
    <div className="w-full max-w-lg bg-gray-200">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </FormLabel>
        <Input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("title")}
        />
        {errors.title?.type === "required" && (
          <p className="text-red-600 text-sm">title is required...</p>
        )}
        <FormLabel className="block text-gray-700 text-sm font-bold mb-2 mt-5">
          Body
        </FormLabel>
        <Input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...register("body")}
        />

        <Button
          disabled={!isValid}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          marginTop={5}
          color="blue"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
