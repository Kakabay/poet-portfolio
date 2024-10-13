import { cn } from "@/lib/utils";

interface Props {
  array: any[];
  setActive: (i: number) => void;
  active: number;
  className?: string;
}

const Tabs = ({ array, active, setActive, className }: Props) => {
  return (
    <div
      className={cn(
        "flex xl:text-16 text-[14px] font-medium items-center xl:h-10 h-9 border-b transition-all w-fit mx-auto border-OUTLINE",
        className
      )}
    >
      {array.map((item, i) => (
        <h5
          key={i}
          onClick={() => setActive(i)}
          className={cn(
            "px-4 xl:py-2 py-1 cursor-pointer relative transition-all"
          )}
        >
          <div
            className={cn(
              active === i &&
                "absolute transition-all duration-200 bottom-0 left-0 h-0.5 w-full bg-OUTLINE_VAR_HIGH"
            )}
          />
          {item.view}
        </h5>
      ))}
    </div>
  );
};

export default Tabs;
