import { FC, HTMLAttributeAnchorTarget } from "react";

interface ILink {
  name: string;
  target?: HTMLAttributeAnchorTarget;
  path?: string;
}

const Link: FC<ILink> = ({ name, path = "", target }) => {
  return (
    <a href={path} target={target}>
      {name}
    </a>
  );
};

export default Link;
