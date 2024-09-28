import { cn } from "@/lib/utils";

interface Props {
  text: string;
  ellips?: boolean;
  className?: string;
}

const TextRomb = ({ text, className, ellips = false }: Props) => {
  return (
    <div
      className={cn(
        " flex justify-center items-center   bg-no-repeat bg-cover relative drop-shadow-INNER_SHADOW",
        className,
        ellips
          ? "w-[384px] h-[164px] bg-[url('/images/about/green-ellips.svg')] font-normal text-[20px]"
          : "size-[216px] bg-[url('/images/about/green-romb.svg')] text-[14px] font-medium"
      )}
    >
      <h4 className="px-6 text-center leading-[140%] ">{text}</h4>
      <img
        src={
          ellips
            ? "/images/about/inner-ellips.png"
            : "/images/about/inner-romb.png"
        }
        className="absolute top-2 -z-10"
      />
    </div>
  );
};

export default TextRomb;
