import { Button } from "../ui/button";
import BgTexture from "./bg-texture";

type Props = {
  categ: string;
  text: string;
  author: string;
  print: string;
};

const SynlarCard = ({ text, print, categ, author }: Props) => {
  return (
    <div className="xl:px-6 relative p-4 xl:py-8 syn-hover flex flex-col gap-6 group shadow-bottom after:syn-mob-path xl:after:comments-1-path xl:w-[384px] xl:h-[378px] w-[328px] h-[334px]">
      <BgTexture className='xl:bg-[url("/images/comments/1-shape.svg")] bg-[url("/images/comments/syn-mob-shape.svg")] syn-mob-path xl:comments-1-path' />
      <div>
        <h5 className="kaushan text-[18px] mb-4 text-ON_SURFACE_VAR">
          {categ}
        </h5>
        <p className="group-hover:text-PRIM h-[100px]">{text}</p>
      </div>

      <hr className="text-OUTLINE_VAR" />

      <div className="flex flex-col justify-between h-full">
        <div className="text-[14px] leading-[140%] h-5 xl:mb-9">
          <h5 className="font-semibold  uppercase mb-2">{author}</h5>
          <h6 className="text-ON_SURFACE_VAR font-medium italic">{print}</h6>
        </div>
        <Button>Pereýti k istoçniku</Button>
      </div>
    </div>
  );
};

export default SynlarCard;
