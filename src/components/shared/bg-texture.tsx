import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const BgTexture = ({ className }: Props) => {
  return (
    <div
      className={cn(
        `absolute -z-10 right-0 top-0 bg-no-repeat bg-cover bg-left size-full overflow-hidden`,
        className
      )}
    >
      <img
        src={"/images/texture.png"}
        className="size-full pointer-events-none scale-150 object-cover mix-blend-multiply opacity-50"
      />
    </div>
  );
};

export default BgTexture;
