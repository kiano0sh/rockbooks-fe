import books from "__mocks__/books";
import BookSlide from "components/atoms/BookSlide";
import { FC } from "react";

const Slider: FC<IClassName> = ({ className = "" }) => {
  return (
    <div className="flex flex-row justify-center items-center h-1/2">
      {books.map((book) => (
        <BookSlide
          key={book.id}
          {...book}
          selected={book.id === 2}
          className="mx-4"
        />
      ))}
    </div>
  );
};

export default Slider;
