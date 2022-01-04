import Card from "components/atoms/Card";
import Divider from "components/atoms/Divider";
import Pagination from "components/organisms/Pagination";
import SideBookPlayer from "components/organisms/SideBookPlayer";
import {
  IGraphQLBookAudio,
  useBookQuery,
  usePagesLazyQuery,
} from "graphql/generated/graphql";
import { FC, useEffect } from "react";
import { useParams } from "react-router";

const Book: FC = () => {
  const { id } = useParams();
  const bookId = Number(id) || 1;

  const { data } = useBookQuery({ variables: { id: bookId } });
  const [fetchPages, pagesData] = usePagesLazyQuery({
    variables: { id: bookId, pagination: { limit: 1, page: 1 } },
  });

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  const bookPages = pagesData.data?.pages.bookPages?.[0];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl font-bold ml-4">{data?.book.name}</h1>
        <p className="ml-2 font-semibold">نویسنده:</p>
        <p>{data?.book.author.name}</p>
        <p className="mx-2 font-semibold">ناشر:</p>
        <p>{data?.book.publisher.name}</p>
      </div>
      <Divider />
      <div className="flex flex-row">
        <SideBookPlayer
          bookAudios={bookPages?.bookAudios as IGraphQLBookAudio[]}
        />
        <div className="flex flex-col items-center">
          <Card className="w-[45rem] h-auto mb-4 mr-5">
            <text className="leading-relaxed whitespace-pre">
              {bookPages?.content}
            </text>
          </Card>
          <Pagination
            total={pagesData.data?.pages.pagination.total}
            page={pagesData.data?.pages.pagination.page}
            setPage={(page) => {
              fetchPages({
                variables: { id: bookId, pagination: { limit: 1, page } },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
