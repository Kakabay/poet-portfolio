import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import BgTexture from './bg-texture';
import { useRef, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useCommentsStore } from '@/store/useComments';
import poetService from '@/services/poet.service';
import { X } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import { useAuthStore } from '@/store/useAuthStore';

const PopupComment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');

  // useOnClickOutside(ref, () => setCommentOpen(false));

  const setCommentOpen = useCommentsStore().setCommentOpen;
  const setCommentSuccess = useCommentsStore().setCommentSuccess;
  const commentSuccess = useCommentsStore().commentSucces;

  const sendComment = async () => {
    try {
      await poetService.postComment({ comment_text: value });
      setCommentSuccess(true);
      setCommentOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 bottom-0 z-[100] overflow-hidden bg-[#7A590C]/[16%] w-full h-screen',
      )}>
      <div
        ref={ref}
        className={cn(
          'absolute md:py-[52px] py-8 w-[328px] h-[532px] md:w-[408px] md:px-6 px-4 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-bottom',
        )}>
        <BgTexture className="bg-[url('/images/messages/comment-modal-shape.svg')] comment-modal-path" />

        <div className="flex md:bg-none bg-[url('/images/texture047.png')] bg-cover md:size-auto h-screen flex-col gap-6 text-center">
          <X
            onClick={() => setCommentOpen(false)}
            className="absolute md:block hidden top-3 right-3 p-1 cursor-pointer"
            size={30}
          />

          <h5 className="font-semibold">Ostaw swoý kommentariý</h5>

          <div className="flex flex-col gap-2">
            <div className="text-16 text-left">Kommentariý</div>
            <Textarea
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="p-4"
              rows={11}
              maxLength={500}
              minLength={10}
            />
            <div className="flex justify-between items-center">
              <h5 className="text-error"></h5>
              <div className="text-right text-14 !font-normal justify-end">{value.length}/500</div>
            </div>
          </div>

          <Button
            onClick={() => {
              if (value.length > 10) sendComment();
            }}>
            Otprawit
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopupComment;
