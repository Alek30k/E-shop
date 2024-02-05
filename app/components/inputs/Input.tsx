"use client";

import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldError;
}

const Input = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}: InputProps) => {
  return <div>Input</div>;
};

export default Input;
