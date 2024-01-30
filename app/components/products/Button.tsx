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
  icon,
  onClick,
}: ButtonProps) => {
  return <div>Button</div>;
};

export default Button;
