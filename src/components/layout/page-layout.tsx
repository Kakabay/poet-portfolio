import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  title: string;
  text?: string;
  children: ReactNode;
}

const PageLayout = ({ className, title, children, text }: Props) => {
  return (
    <main className={cn("pt-12 pb-[120px] relative")}>
      <div className="container">
        <h1 className="h1 kaushan text-center mb-12">{title}</h1>

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
