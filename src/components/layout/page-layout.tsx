import { cn } from "@/lib/utils";
import { usePoemsStore } from "@/store/usePoems";
import { ReactNode, useState } from "react";
import { PoemType } from "../shared/poems-item";

interface Props {
  className?: string;
  title: string;
  text?: string;
  star?: "active" | "none" | "";
  setFavorite?: (item: PoemType) => void;
  children: ReactNode;
  audio?: boolean;
}

const PageLayout = ({
  className,
  title,
  children,
  text,
  audio,
  star = "",
}: Props) => {
  const [active, setActive] = useState(false);

  return (
    <main className={cn("pt-8 xl:pt-12 pb-16 xl:pb-[120px] relative")}>
      <div className="container">
        <div className="flex justify-center items-start gap-4">
          <h1 className="h1 kaushan text-center xl:mb-12 mb-6">{title}</h1>

          <div className="flex gap-1">
            {star && (
              <img
                className="cursor-pointer p-1"
                src={active ? "/images/star.svg" : "/images/star-fill.svg"}
                onClick={() => setActive(!active)}
              />
            )}
            {audio && <img src="/images/play.svg" />}
          </div>
        </div>

        <div className={cn("flex flex-col xl:gap-12 gap-8")}>
          {text && (
            <p className="text-center xl:text-[24px] text-[16px] xl:leading-[135%] leading-[150%] text-ON_SURFACE_VAR mx-auto xl:w-[1000px]">
              {text}
            </p>
          )}
          <section className={cn("flex flex-col", className)}>
            {children}
          </section>
        </div>
      </div>
    </main>
  );
};

export default PageLayout;
