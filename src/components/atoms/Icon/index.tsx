import classNames from "classnames";
import { FC } from "react";

type IconNamesType = "mdArrowBack" | "mdArrowForward";

interface IIcon extends IClassName {
  name: IconNamesType;
  onClick?: () => void;
  disabled?: boolean;
  clickable?: boolean;
}

const Icon: FC<IIcon> = ({
  name,
  onClick,
  className,
  clickable = false,
  disabled = false,
}) => {
  const disabledClassNames = classNames({
    "cursor-not-allowed": disabled,
    "cursor-pointer": !disabled && clickable,
  });

  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      className={`${disabledClassNames} ${className}`}
      onClick={!disabled ? onClick : undefined}
    />
  );
};

export default Icon;
