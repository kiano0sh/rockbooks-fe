import { FC } from "react";
import { useParams } from "react-router";

const Book: FC = () => {
  const params = useParams();
  return (
    <div className="flex flex-col max-h-full overflow-hidden">{params.id}</div>
  );
};

export default Book;
