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
  return (
    <div className="relative w-full">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        className={`peer w-full p-4 pt-6 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed 
      ${errors[id] ? "border-rose-400" : "border-slate-300"}
      ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
      `}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
