type Props = {
  img: string;
  title: string;
};

const MomentsCard = ({ title, img }: Props) => {
  return (
    <article className="flex flex-col gap-4 relative group cursor-pointer">
      <img src="/images/moments/img.svg" alt="" className="absolute top-2 right-2 z-20" />
      <div className="relative w-full h-[209px] after:size-full after:absolute after:z-10 transition-all group-hover:after:bg-transparent after:bg-[#7A590C]/15  after:transition-all">
        <img src={img} alt="" className="absolute z-10 top-0 left-0 size-full object-cover" />
      </div>
      <h4 className="text-[20px] leading-[140%]">{title}</h4>
    </article>
  );
};

export default MomentsCard;
