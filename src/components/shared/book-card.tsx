import BgTexture from "./bg-texture";
import DownloadLink from "./download-link";

type Props = {
  name: string;
  text: string;
  link: string;
};

const BookCard = ({ name, text, link = "" }: Props) => {
  return (
    <article className="xl:py-12 p-4 xl:pl-6 xl:pr-6 xl:w-[756px] w-[328px] xl:h-[349px] h-[226px] overflow-hidden group relative xl:after:book-path after:book-mob-path shadow-bottom book-hover transition-all">
      <BgTexture className='xl:bg-[url("/images/books/book-shape.svg")] bg-[url("/images/books/book-mob-shape.svg")] book-mob-path xl:book-path' />
      <div className="flex items-center xl:items-stretch xl:gap-6 gap-2">
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-semibold xl:mb-4 mb-2 group-hover:text-PRIM transition-all">
              {name}
            </h4>
            <p className="xl:text-[14px] text-[12px] text-ON_SURFACE_VAR font-medium italic leading-[140%]">
              {text}
            </p>
          </div>
          <DownloadLink link={link} />
        </div>

        <hr className="md:hidden" />

        <div className="flex-[0_0_25.2%] w-[104px] h-[146px] xl:w-[180px] xl:h-[252px] ">
          <img src="/images/book.png" alt="" />
        </div>
      </div>
    </article>
  );
};

export default BookCard;
