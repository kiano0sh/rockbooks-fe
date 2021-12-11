import { FC } from "react";
import classNames from "classnames";

interface IButton extends IClassName {
  onClick: () => void;
  name: string;
  type?: "positive" | "negative" | "ghost";
}

const Button: FC<IButton> = ({
  onClick,
  name,
  type = "positive",
  className = "",
}) => {
  const btnColorClass = classNames({
    "bg-blue-100": type === "positive",
    "bg-red-100": type === "negative",
    "bg-transparent border-2 border-blue-100": type === "ghost",
  });
  return (
    <button
      className={`${btnColorClass} border-0 w-full py-2 rounded-lg ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
