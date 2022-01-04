import { FC } from "react";

interface IDivider extends IClassName {
  direction?: "vertical" | "horizontal";
}

const Divider: FC<IDivider> = ({
  className = "",
  direction = "horizontal",
}) => {
  return (
    <div
      className={`bg-blue-100 border-solid my-8 p-[1px] ${
        direction === "vertical" ? "h-1/4" : "w-1/4"
      } ${className}`}
    />
  );
};

export default Divider;
