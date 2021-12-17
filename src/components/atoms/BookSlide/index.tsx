import classNames from "classnames";
import { FC } from "react";
import { useNavigate } from "react-router";
import { MainRoutePaths } from "routes";

interface IBookSlide extends IClassName {
  id: number;
  index: number;
  name: string;
  author: string;
  cover: string;
  selected: boolean;
  handleSelectSlid: (id: number) => void;
}

const BookSlide: FC<IBookSlide> = ({
  id,
  index,
  name,
  author,
  cover,
  selected,
  handleSelectSlid,
  className = "",
}) => {
  const navigate = useNavigate();

  const selectedButton = classNames({
    "w-96 h-60": !selected,
    "w-[52rem] h-[30rem]": selected,
    "delay-150 duration-100 ease-linear": selected,
  });

  const onSlideClicked = () => {
    if (selected) {
      navigate(`${MainRoutePaths.book}/${id}`);
      return;
    }
    handleSelectSlid(index);
  };

  return (
    <button
      className={`shadow flex flex-col justify-start rounded-lg relative cursor-pointer transition-all ${selectedButton} ${className} `}
      onClick={onSlideClicked}
    >
      <img
        src={cover}
        alt={name}
        className="w-full h-full rounded-lg shadow-lg"
      />
      <div
        className={`bg-black absolute w-full py-2 opacity-80 rounded-b-lg bottom-0`}
      >
        <p className="mr-2 text-white font-semibold text-right">
          {name} | {author}
        </p>
      </div>
    </button>
  );
};

export default BookSlide;
