import PageLayout from '@/components/layout/page-layout';
import BgTexture from '@/components/shared/bg-texture';
import Pagination from '@/components/shared/pagination';
import PoemsItem from '@/components/shared/poems-item';
import SortModal from '@/components/shared/sort-modal';
import { cn } from '@/lib/utils';
import React from 'react';

const data = [
  {
    name: 'Ýaşyl Tugly Türkmenistan',
  },
  {
    name: 'Ýaşyl Tugly Bayr',
  },
  {
    name: 'Ýaşyl Tugly sads',
  },
  { name: 'Ýaşyl Tugly hasdj' },
];

const Poems = () => {
  return (
    <PageLayout
      title="Täze goşgular"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-12">
      <SortModal />

      <div className="grid grid-cols-2 gap-8 w-[948px] mx-auto">
        {[...Array(6)].map((_, i) => (
          <PoemsItem key={i} id={'1'} />
        ))}
      </div>

      <Pagination />
    </PageLayout>
  );
};

export default Poems;
