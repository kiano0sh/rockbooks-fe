import { FC } from "react";

type IconNamesType = "mdArrowBack" | "mdArrowForward";

interface IIcon extends IClassName {
  name: IconNamesType;
  onClick?: () => void;
}

const Icon: FC<IIcon> = ({ name, onClick, className }) => {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;
