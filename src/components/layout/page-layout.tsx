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
}

const PageLayout = ({
  className,
  title,
  children,
  text,
  setFavorite,
  star = "",
}: Props) => {
  const setFavorites = usePoemsStore().setFavorites;
  const [active, setActive] = useState(false);

  return (
    <main className={cn("pt-12 pb-[120px] relative")}>
      <div className="container">
        <div className="flex justify-center items-start gap-4">
          <h1 className="h1 kaushan text-center mb-12">{title}</h1>
          {star && (
            <img
              className="cursor-pointer p-1"
              src={active ? "/images/star.svg" : "/images/star-fill.svg"}
              onClick={() => setActive(!active)}
            />
          )}
        </div>

        <div className={cn("flex flex-col gap-12")}>
          {text && (
            <p className="text-center text-ON_SURFACE_VAR mx-auto w-[1000px]">
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
