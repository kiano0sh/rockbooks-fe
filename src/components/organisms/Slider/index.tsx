import books from "__mocks__/books";
import BookSlide from "components/atoms/BookSlide";
import { FC, useEffect, useState } from "react";
import Icon from "../../atoms/Icon";

const Slider: FC<IClassName> = ({ className = "" }) => {
  const [selected, setSelected] = useState(0);
  const [booksToShow, setBooksToShow] = useState(books.slice(0, 3));

  useEffect(() => {
    setSelected(booksToShow[1].id);
  }, []);

  const onBackArrowClicked = () => {
    const selectedBookIndex = books.findIndex((book) => book.id === selected);
    if (selectedBookIndex === 0) {
      const latestBook = books[books.length - 1];
      setBooksToShow((books) => [latestBook, ...books.slice(0, 2)]);
      setSelected(latestBook.id);
      return;
    }
    const previousBook = books[selectedBookIndex - 1];
    setBooksToShow((prevBooks) => [previousBook, prevBooks[1], prevBooks[2]]);
    setSelected(previousBook.id);
  };

  const onForwardArrowClicked = () => {};

  console.log("render", booksToShow);
  return (
    <div className="flex flex-row justify-center items-center h-1/2">
      <Icon
        name="mdArrowForward"
        onClick={onForwardArrowClicked}
        className="w-12 ml-2 cursor-pointer"
      />
      {booksToShow.map((book) => (
        <BookSlide
          key={book.id}
          {...book}
          selected={selected === book.id}
          className="mx-4"
          handleSelectSlid={setSelected}
        />
      ))}
      <Icon
        name="mdArrowBack"
        onClick={onBackArrowClicked}
        className="w-12 mr-2 cursor-pointer"
      />
    </div>
  );
};

export default Slider;
