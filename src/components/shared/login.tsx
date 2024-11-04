import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import LoginForm from '../forms/login-form';
import { useLoginStore } from '@/store/useLogin';
import { useOnClickOutside } from 'usehooks-ts';
import { X } from 'lucide-react';
import { BgTexture } from './bg-texture';

const Login = () => {
  const ref = useRef<HTMLDivElement>(null);

  const setActive = useLoginStore().setActive;

  useOnClickOutside(ref, () => setActive(false));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 bottom-0 z-[100] overflow-hidden bg-[#7A590C]/[16%] w-full h-screen">
      <div
        ref={ref}
        className="absolute md:py-[52px] py-8 w-[328px] md:w-[408px] h-[456px] md:px-6 px-4 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-bottom">
        <BgTexture className={cn("bg-[url('/images/login-shape.svg')] login-path")} />
        <X
          onClick={() => setActive(false)}
          className="absolute md:block hidden top-3 right-3 p-1 cursor-pointer"
          size={30}
        />

        <LoginForm />
      </div>
    </motion.div>
  );
};

export default Login;
