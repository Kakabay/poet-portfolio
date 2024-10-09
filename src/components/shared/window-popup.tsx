import { X } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import BgTexture from "./bg-texture";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface Props {
  active?: boolean;
  setActive: (val: boolean) => void;
  children?: ReactNode;
  className?: string;
  mode?: "login" | "comment" | "tost";
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
        "fixed top-0 left-0 right-0 bottom-0 z-[100] overflow-hidden bg-[#7A590C] bg-opacity-[16%] w-full h-screen"
      )}
    >
      <div
        ref={ref}
        className={cn(
          "relative py-[52px] w-[408px] px-6 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-bottom",
          {
            "h-[456px]": mode === "login",
            "h-[532px]": mode === "comment",
            "h-[232px]": mode === "tost",
          }
        )}
      >
        <BgTexture
          className={cn(
            mode === "login"
              ? "bg-[url('/images/login-shape.svg')] login-path"
              : mode === "comment"
              ? "bg-[url('/images/messages/comment-modal-shape.svg')] comment-modal-path"
              : "bg-[url('/images/tost-shape.svg')] tost-path"
          )}
        />
        <X
          onClick={() => setActive(false)}
          className="absolute top-3 right-3 p-1 cursor-pointer"
          size={30}
        />
        {mode === "tost" && (
          <div className="flex flex-col gap-4 text-center">
            <h5 className="font-semibold">Waş kommentariý otprawlen</h5>
            <h6 className="text-16">
              Wy uwidite swoý kommentriý posle moderasii
            </h6>
            <Button onClick={() => setActive(false)}>Zakryt</Button>
          </div>
        )}
        {mode === "comment" && (
          <div className="flex flex-col gap-6 text-center">
            <h5 className="font-semibold">Ostaw swoý kommentariý</h5>

            <div className="flex flex-col gap-2">
              <div className="text-16 text-left">Kommentariý</div>
              <Textarea className="p-4" rows={11} maxLength={500} />
              <div className="text-right text-14 !font-normal">500/500</div>
            </div>

            <Button>Otprawit</Button>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default WindowPopup;
