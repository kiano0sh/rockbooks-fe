import { FC } from "react";

interface IButton {
  onClick: () => void;
  name: string;
  type?: "positive" | "negative";
}

const Button: FC<IButton> = ({ onClick, name, type = "positive" }) => {
  const buttonColor = type === "positive" ? "bg-blue-600" : "bg-red-600";
  return (
    <button className={`${buttonColor} border-0 p-0`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
