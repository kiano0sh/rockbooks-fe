import { FC } from "react";

const Card: FC<IClassName> = ({ children, className = "" }) => {
  return (
    <div
      className={`shadow flex flex-col bg-white rounded-md p-8 justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
