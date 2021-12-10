import { FC } from "react";

interface IButton {
  onClick: () => void;
  name: string;
  type?: "positive" | "negative";
}

const Button: FC<IButton> = ({ onClick, name, type = "positive" }) => {
  return (
    <button
      className={`${
        type === "positive" ? "bg-blue-100" : "bg-red-100"
      } border-0 w-full py-2 rounded-lg mt-5`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
