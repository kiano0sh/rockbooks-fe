import { FC } from "react";

const Card: FC = ({ children }) => {
  return <div className="shadow flex flex-row">{children}</div>;
};

export default Card;
