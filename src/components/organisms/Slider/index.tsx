import Slide from "components/atoms/Slide";
import { FC, useState } from "react";
export interface ISliderData {
  id: number;
  title: string;
  wallpaper: string;
}
interface ISlider {
  sliders?: ISliderData[];
}

const Slider: FC<ISlider> = ({ sliders }) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex flex-row justify-center items-center h-1/2">
      {sliders?.slice(0, 3).map((book, index) => (
        <Slide
          key={book.id}
          index={index}
          {...book}
          selected={selected === index}
          className="mx-4"
          handleSelectSlid={setSelected}
        />
      ))}
    </div>
  );
};

export default Slider;
