type Props = {
  img: string;
  title: string;
};

const MomentsCard = ({ title, img }: Props) => {
  return (
    <article className="flex flex-col gap-4">
      <div className="relative w-full h-[209px]">
        <img src={img} alt="" className="absolute top-0 left-0 size-full object-cover" />
      </div>
      <h4 className="text-[20px] leading-[140%]">{title}</h4>
    </article>
  );
};

export default MomentsCard;
