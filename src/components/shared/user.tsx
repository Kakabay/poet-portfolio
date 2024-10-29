import { AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";

interface Props {
  active: boolean;
  setActive: (val: boolean) => void;
  className?: string;
}

const User = ({ active, setActive, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const name = useAuthStore().name;
  const clearAuthData = useAuthStore().clearAuthData;

  return (
    <div
      ref={ref}
      className={cn(
        className,
        "relative z-[100] text-[14px] font-medium min-w-[60px] overflow-visible"
      )}
    >
      <div
        onClick={() => setActive(!active)}
        className="px-4 h-10 items-center gap-4 text-PRIM cursor-pointer flex justify-between border border-OUTLINE rounded-[4px]"
      >
        <h4>{name}</h4>
        <ChevronUp
          size={16}
          className={cn(active && "rotate-180", "transition-all")}
        />
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-[#ECE1D4] rounded-[4px] text-left absolute top-10 left-0 w-full flex flex-col items-start"
          >
            <Link
              to="/cabinet"
              onClick={() => setActive(false)}
              className="py-2 px-6"
            >
              Kabinet
            </Link>
            <button
              onClick={() => {
                clearAuthData();
                setActive(false);
              }}
              className="py-3 px-6"
            >
              Exit
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default User;
