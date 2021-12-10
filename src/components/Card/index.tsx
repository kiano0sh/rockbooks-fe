import { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <div className="shadow flex flex-col items-center bg-white rounded-md p-8 justify-between">
      {children}
    </div>
  );
};

export default Card;
