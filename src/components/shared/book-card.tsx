import DownloadLink from './download-link';

type Props = {
  name: string;
  text: string;
  link: string;
};

const BookCard = ({ name, text, link }: Props) => {
  return (
    <article className="py-12 pl-6 pr-6 w-[756px] bg-[url('/images/books/1.png')] drop-shadow-INNER_SHADOW">
      <div className="flex gap-6">
        <div className="flex flex-col justify-between">
          <div className="">
            <h4 className="font-semibold mb-4">{name}</h4>
            <p className="text-[14px] text-ON_SURFACE_VAR font-medium italic leading-[140%]">
              {text}
            </p>
          </div>
          <DownloadLink link="" />
        </div>

        <div className="flex-[0_0_25.2%] w-[180px] h-[252px] bg-white">
          <img src="" alt="" />
        </div>
      </div>
    </article>
  );
};

export default BookCard;
