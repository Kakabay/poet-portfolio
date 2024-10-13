import { cn } from "@/lib/utils";
import SectionLine from "./section-line";
import BorderImg from "./border-img";
import LineRombs from "./line-rombs";

interface Props {
  title: string;
  text?: string;
  img?: string;
  imgClassName?: string;
  arr?: string[];
  line?: boolean;
  rombs?: boolean;
}

const InfoBlock = ({
  text,
  title,
  img,
  imgClassName,
  arr,
  line = false,
  rombs = false,
}: Props) => {
  return (
    <section className="flex flex-col gap-2 xl:gap-8 text-[16px] leading-[150%] font-normal xl:text-[24px] -tracking-wide">
      <h2 className="h2 kaushan">{title}</h2>

      {text && (
        <div
          className={cn(
            "flex flex-col xl:flex-row items-start gap-4 xl:gap-12"
          )}
        >
          <p className="text-ON_SURFACE_VAR">{text}</p>
          {img && <BorderImg className={cn(imgClassName)} img={img} />}
        </div>
      )}
      {arr && (
        <div className="flex flex-col gap-6">
          {arr?.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}

      {line && <SectionLine className="" />}
      {rombs && <LineRombs className="mt-4" />}
    </section>
  );
};

export default InfoBlock;
