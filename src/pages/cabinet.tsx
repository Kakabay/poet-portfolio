import PageLayout from '@/components/layout/page-layout';
import CommentCard from '@/components/shared/comment-card';
import NotificationCard from '@/components/shared/notification-card';
import PoemsItem from '@/components/shared/poems-item';
import Tabs from '@/components/shared/tabs';
import { cn, scrollTop } from '@/lib/utils';
import { usePoemsStore } from '@/store/usePoems';
import { AnimatePresence } from 'framer-motion';
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

  return (
    <PageLayout title="Salam Myrat!" className="gap-12">
      <Tabs array={cabinetTabs} active={active} setActive={setActive} />

      <div
        className={cn(
          '',
          active === 0
            ? 'grid xl:grid-cols-2 grid-cols-1 gap-8 xl:w-[948px] mx-auto place-items-center'
            : 'flex flex-col items-center gap-6',
        )}>
        {favorites.map((item, i) =>
          active === 0 ? (
            <PoemsItem active {...item} key={item.id} id={item.id} />
          ) : active === 1 ? (
            <CommentCard
              key={i}
              name={'Batyr'}
              date={'09.10.2024'}
              text={
                'Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.'
              }
            />
          ) : (
            <NotificationCard key={i} />
          ),
        )}
      </div>
    </PageLayout>
  );
};

export default Cabinet;
