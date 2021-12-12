import classNames from "classnames";
import { FC } from "react";

interface IBookSlide extends IClassName {
  name: string;
  author: string;
  cover: string;
  selected: boolean;
}

const BookSlide: FC<IBookSlide> = ({
  name,
  author,
  cover,
  selected,
  className = "",
}) => {
  const selectedClass = classNames({
    "w-96 h-60": !selected,
    "w-[52rem] h-[30rem]": selected,
  });
  return (
    <div
      className={`shadow flex flex-col justify-start rounded-lg ${selectedClass} ${className}`}
    >
      <img
        src={cover}
        alt={name}
        className="w-full h-full rounded-lg shadow-lg"
      />
      <span className="flex flex-row">
        <p>{name}</p> | <p>{author}</p>
      </span>
    </div>
  );
};

export default BookSlide;
