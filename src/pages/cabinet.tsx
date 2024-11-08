import PageLayout from '@/components/layout/page-layout';
import CommentCard from '@/components/shared/comment-card';
import PoemsItem from '@/components/shared/poems-item';
import Tabs from '@/components/shared/tabs';
import { cn, scrollTop } from '@/lib/utils';
import { useGetPinPoems } from '@/query/use-get-pin-poems';
import { useGetUserComments } from '@/query/use-get-user-comments';
import { useAuthStore } from '@/store/useAuthStore';
import { useState } from 'react';

const cabinetTabs = [
  {
    name: 'Moi zakladki',
    id: 0,
  },
  {
    name: 'Moi kommentarii',
    id: 1,
  },
  {
    name: 'Uwedomleniýa',
    id: 2,
  },
];

const Cabinet = () => {
  scrollTop();

  const [active, setActive] = useState(0);

  const name = useAuthStore((state) => state.name);

  const { data: comments } = useGetUserComments();
  const { data: poems } = useGetPinPoems();

  return (
    <PageLayout title={`Salam ${name}!`} className="gap-12">
      <Tabs
        renderName={(item) => item.name}
        array={Array.isArray(cabinetTabs) ? cabinetTabs : []}
        active={active}
        setActive={setActive}
      />

      <div
        className={cn(
          '',
          active === 0
            ? 'grid md:grid-cols-2 grid-cols-1 gap-8 xl:w-[948px] mx-auto place-items-center'
            : 'flex flex-col items-center gap-6',
        )}>
        {active === 0 &&
          poems?.pinned_poems?.map((item, i) => (
            <PoemsItem key={i} active {...item} id={item.id} />
          ))}

        {active === 1 && comments?.map((item, i) => <CommentCard key={i} {...item} />)}
      </div>
    </PageLayout>
  );
};

export default Cabinet;
