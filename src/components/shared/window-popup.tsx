import { X } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import BgTexture from "./bg-texture";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  active?: boolean;
  setActive: (val: boolean) => void;
  children?: ReactNode;
  className?: string;
  mode?: "login" | "comment" | "message";
}

const WindowPopup = ({
  active,
  children,
  setActive,
  className,
  mode,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        className,
        "absolute top-0 left-0 right-0 bottom-0 z-[100] overflow-hidden bg-[#7A590C] bg-opacity-[16%] w-full min-h-screen"
      )}
    >
      <div
        ref={ref}
        className={cn(
          "relative py-[52px] px-6 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-bottom bg-white",
          { "w-[408px] h-[232px]": mode === "message" || "login" }
        )}
      >
        <BgTexture className="bg-[url('/images/1-shape.svg')]" />
        <X
          onClick={() => setActive(false)}
          className="absolute top-2 right-2 p-1 cursor-pointer"
          size={30}
        />
        {mode === "message" && (
          <div className="flex flex-col gap-4 text-center">
            <h5 className="font-semibold">Waş kommentariý otprawlen</h5>
            <h6 className="text-16">
              Wy uwidite swoý kommentriý posle moderasii
            </h6>
            <Button onClick={() => setActive(false)}>Zakryt</Button>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default WindowPopup;
