import PageLayout from '@/components/layout/page-layout';
import CommentCard from '@/components/shared/comment-card';
import PoemsItem from '@/components/shared/poems-item';
import Tabs from '@/components/shared/tabs';
import { cn, scrollTop } from '@/lib/utils';
import { useGetUserComments } from '@/query/use-get-user-comments';
import { useAuthStore } from '@/store/useAuthStore';
import { usePoemsStore } from '@/store/usePoems';
import { useState } from 'react';

const cabinetTabs = [
  {
    view: 'Moi zakladki',
    id: 0,
  },
  {
    view: 'Moi kommentarii',
    id: 1,
  },
  {
    view: 'Uwedomleniýa',
    id: 2,
  },
];

const Cabinet = () => {
  scrollTop();

  const [active, setActive] = useState(0);

  const favorites = usePoemsStore().favorites;

  const name = useAuthStore((state) => state.name);

  const { data: userComments } = useGetUserComments();

  console.log(userComments);

  return (
    <PageLayout title={`Salam ${name}!`} className="gap-12">
      <Tabs array={cabinetTabs} active={active} setActive={setActive} />

      <div
        className={cn(
          '',
          active === 0
            ? 'grid md:grid-cols-2 grid-cols-1 gap-8 xl:w-[948px] mx-auto place-items-center'
            : 'flex flex-col items-center gap-6',
        )}>
        {active === 0 &&
          favorites.map((item, i) => <PoemsItem active {...item} key={item.id} id={item.id} />)}

        {active === 1 && userComments?.comments.map((item, i) => <CommentCard key={i} {...item} />)}
      </div>
    </PageLayout>
  );
};

export default Cabinet;
