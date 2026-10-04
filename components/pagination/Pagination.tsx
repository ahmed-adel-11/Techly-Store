import { Icon } from "@iconify/react";
import { Dispatch, SetStateAction } from "react";

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-5">
      <button
        type="button"
        onClick={() => {
          setCurrentPage((prev) => prev - 1);
        }}
        disabled={currentPage === 1}
        aria-label="Previous"
        className="mr-4 text-muted-foreground cursor-pointer transition-all duration-150 hover:text-foreground"
      >
        <Icon icon={"fe:arrow-left"} />
      </button>

      <div className="flex gap-2 text-gray-500 text-sm md:text-base">
        {[...Array(totalPages)].map((_, i) => {
          const pageNumber = i + 1;
          return (
            <button
              key={i}
              disabled={currentPage === totalPages}
              type="button"
              onClick={() => setCurrentPage(pageNumber)}
              className={`flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square  border border-gray-200 rounded-md  ${pageNumber === currentPage ? "bg-red-600 text-white border-0" : "bg-white hover:bg-gray-100/70"} transition-all cursor-pointer`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
        aria-label="Next"
        className="ml-4 text-muted-foreground cursor-pointer transition-all duration-150 hover:text-foreground"
      >
        <Icon icon={"fe:arrow-right"} />
      </button>
    </div>
  );
};

export default Pagination;
