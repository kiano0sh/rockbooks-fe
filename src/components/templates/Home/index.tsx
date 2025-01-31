import Slider from "components/organisms/Slider";
import { useBooksQuery } from "graphql/generated/graphql";
import { FC } from "react";

const Home: FC = () => {
  const { data } = useBooksQuery({
    variables: { pagination: { limit: 3, page: 1 } },
  });

  const books = data?.books.books?.map((book) => {
    return {
      id: book?.id || 1,
      title: `${book?.name || ""} | ${book?.author.name || ""}`,
      wallpaper: book?.wallpaper || "",
    };
  });

  return (
    <div className="flex flex-col max-h-full overflow-hidden">
      <Slider sliders={books} />
    </div>
  );
};

export default Home;
