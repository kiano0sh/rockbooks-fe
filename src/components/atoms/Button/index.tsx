import { FC } from "react";
import classNames from "classnames";

interface IButton extends IClassName {
  name: string;
  onClick?: () => void;
  kind?: "positive" | "negative" | "ghost";
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  onClick,
  name,
  kind = "positive",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const btnColorClass = classNames({
    "border-0 bg-blue-100": kind === "positive",
    "border-0 bg-red-100": kind === "negative",
    "bg-transparent border-2 border-blue-100": kind === "ghost",
    "bg-gray-200 cursor-not-allowed text-gray-500": disabled,
  });
  return (
    <button
      className={`w-full py-2 rounded-lg hover:text-gray-600 ${btnColorClass} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
