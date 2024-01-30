"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: string;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`disabled: opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-slate-700`}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
