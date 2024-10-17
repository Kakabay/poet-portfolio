import { cn } from "@/lib/utils";
import BgTexture from "./bg-texture";
import DownloadLink from "./download-link";
import { useState } from "react";

type Props = {
  name: string;
  text: string;
  link: string;
  id: number;
};

const BookCard = ({ name, text, id, link = "" }: Props) => {
  const [expanded, setExpanded] = useState<number[]>([]);

  const onExpand = () => {
    setExpanded((prev) => {
      // Проверяем, есть ли элемент в массиве
      if (prev.includes(id)) {
        // Если элемент уже есть, удаляем его из массива
        return prev.filter((item) => item !== id);
      } else {
        // Если элемента нет, добавляем его в массив
        return [...prev, id];
      }
    });
  };

  const findId = () => expanded.some((item) => item === id);

  console.log(expanded);

  return (
    <article
      className={cn(
        "xl:py-12 py-3 px-4 xl:pl-6 xl:pr-6 xl:w-[756px] w-[328px] xl:h-[349px] overflow-hidden group relative xl:after:book-path  shadow-bottom book-hover ",
        findId()
          ? "h-[296px] after:book-expanded-path after:transition-none"
          : "h-[226px] after:book-mob-path"
      )}
    >
      <BgTexture
        className={cn(
          'xl:bg-[url("/images/books/book-shape.svg")] bg-[url("/images/books/book-mob-shape.svg")] xl:book-path',
          findId()
            ? 'bg-[url("/images/books/book-expanded-shape.svg")] book-expanded-path'
            : 'bg-[url("/images/books/book-mob-shape.svg")] book-mob-path'
        )}
      />
      <div className="flex items-center xl:items-stretch xl:gap-6 gap-2">
        <div className="flex flex-col gap-0 justify-between">
          <div>
            <h4 className="font-semibold xl:mb-4 mb-2 group-hover:text-PRIM transition-all">
              {name}
            </h4>
            <div
              className={cn(
                "xl:text-[14px] text-[12px] -tracking-[0.3px] text-ON_SURFACE_VAR font-medium italic leading-[140%] xl:line-clamp-none ",
                !findId() && "line-clamp-2"
              )}
            >
              {text}
            </div>
            <button
              onClick={onExpand}
              className={cn(
                "xl:hidden block text-TERTIARY text-[12px] font-medium leading-[140%]"
              )}
            >
              {findId() ? "pokazat menshe..." : "pokazat bolshe"}
            </button>
          </div>
          <DownloadLink className="hidden xl:flex" link={link} />
        </div>

        <div className="xl:flex-[0_0_180px] flex-[0_0_104px] w-[104px] h-[146px] xl:w-[180px] xl:h-[252px] text-ellipsis">
          <img src="/images/book.png" alt="" />
        </div>
      </div>

      <div className="xl:hidden mt-2 flex flex-col gap-2 justify-between">
        <hr className="text-OUTLINE_VAR" />
        <div className="flex justify-center">
          <DownloadLink className="" link={link} />
        </div>
      </div>
    </article>
  );
};

export default BookCard;
