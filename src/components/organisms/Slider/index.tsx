import books from "__mocks__/books";
import BookSlide from "components/atoms/BookSlide";
import { FC, useState } from "react";

const Slider: FC<IClassName> = ({ className = "" }) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex flex-row justify-center items-center h-1/2">
      {books.slice(0, 3).map((book, index) => (
        <BookSlide
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
