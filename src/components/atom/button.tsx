import React, { FC } from "react";
interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}
const Button: FC<ButtonProps> = ({ onClick,className, text }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-secondary p-2 rounded-md font-md uppercase font-semibold  text-white hover:bg-white border-[1.5px] border-secondary hover:text-secondary ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
