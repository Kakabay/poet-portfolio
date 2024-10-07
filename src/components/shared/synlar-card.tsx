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
    <div className="px-6 relative pt-12 pb-[52px] syn-hover flex flex-col gap-6 group shadow-bottom after:comments-1-path w-[384px] h-[414px]">
      <BgTexture className='bg-[url("/images/comments/1-shape.svg")] comments-1-path' />
      <div>
        <h5 className="kaushan text-[18px] mb-4 text-ON_SURFACE_VAR">
          {categ}
        </h5>
        <p className="group-hover:text-PRIM">{text}</p>
      </div>

      <hr className="text-OUTLINE_VAR" />

      <div className="flex flex-col justify-between h-full">
        <div className="text-[14px] leading-[140%] mb-9">
          <h5 className="font-semibold  uppercase mb-2">Aýdyn Ataýew</h5>
          <h6 className="text-ON_SURFACE_VAR font-medium italic">
            AGU neşirýat, kopiraýter
          </h6>
        </div>
        <Button>Pereýti k istoçniku</Button>
      </div>
    </div>
  );
};

export default SynlarCard;
