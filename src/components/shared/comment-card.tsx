import BgTexture from './bg-texture';

type Props = {
  name: string;
  date: string;
  text: string;
};

const CommentCard = ({ text, name, date }: Props) => {
  return (
    <div className="pt-8 pb-[52px] px-6 relative shadow-bottom w-[892px] h-[233px]">
      <BgTexture className="bg-[url('/images/messages/1-shape.svg')] message-1-path" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h5 className="text-[14px] text-ON_SURFACE_VAR font-medium leading-[145%]">{name}</h5>
          <div className="text-ON_SURFACE_VAR_LOW text-[12px] font-medium leading-[130%]">
            {date}
          </div>
        </div>

        <p className="text-16 !font-normal">{text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
