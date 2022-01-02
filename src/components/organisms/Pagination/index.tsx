import { FC, useMemo } from "react";
import Button from "components/atoms/Button";
import Icon from "components/atoms/Icon";

interface IPagination {
  page?: number;
  total?: number;
  setPage: (page: number) => void;
}

const Pagination: FC<IPagination> = ({ total = 1, page = 1, setPage }) => {
  const paginationItemsArray = useMemo(() => {
    // Min
    let minCounterValue = 0;
    const pageLower = page - 5;
    const prevLowerIsNegativeOrZero = pageLower <= 0;
    if (prevLowerIsNegativeOrZero) {
      minCounterValue = 1;
    } else {
      minCounterValue = pageLower;
    }
    // Max
    let maxCounterValue = 0;
    const pageUpper = prevLowerIsNegativeOrZero ? 10 : page + 4;
    const nextUpperIsGreaterOrEqualThanTotal = pageUpper >= total;
    if (nextUpperIsGreaterOrEqualThanTotal) {
      maxCounterValue = total;
    } else {
      maxCounterValue = pageUpper;
    }

    const items = [];
    for (
      minCounterValue;
      minCounterValue <= maxCounterValue;
      minCounterValue++
    ) {
      items.push(minCounterValue);
    }
    return items;
  }, [total, page]);

  return (
    <div className="flex flex-row items-center justify-center">
      <Icon
        name="mdArrowForward"
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page - 1 <= 0}
        className="w-8 fill-white"
        clickable
      />
      {paginationItemsArray.map((pageNumber) => {
        return (
          <Button
            name={String(pageNumber)}
            kind={pageNumber !== page ? "ghost" : "positive"}
            className="mx-1 p-2"
            onClick={() => {
              setPage(pageNumber);
            }}
          />
        );
      })}
      <Icon
        name="mdArrowBack"
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page + 1 >= total}
        className="w-8"
        clickable
      />
    </div>
  );
};

export default Pagination;
