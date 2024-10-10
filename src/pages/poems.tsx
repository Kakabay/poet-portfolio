import PageLayout from '@/components/layout/page-layout';
import Pagination from '@/components/shared/pagination';
import PoemsItem from '@/components/shared/poems-item';
import SortModal from '@/components/shared/sort-modal';
import { cn } from '@/lib/utils';
import { ActiveSort } from '@/store/useSynlar';
import { useEffect, useState } from 'react';

const data = [
  {
    name: 'Ýaşyl Tugly Türkmenistan',
  },
  {
    name: 'Gel, kalbym, Gel, gürleşeli!',
  },
  {
    name: 'Ýürek bilen sorag-jogap',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Ýaşyl Tugly Türkmenistan',
  },
  {
    name: 'Gel, kalbym, Gel, gürleşeli!',
  },
  {
    name: 'Ýürek bilen sorag-jogap',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Ýaşyl Tugly Türkmenistan',
  },
  {
    name: 'Gel, kalbym, Gel, gürleşeli!',
  },
  {
    name: 'Ýürek bilen sorag-jogap',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Ýaşyl Tugly Türkmenistan',
  },
  {
    name: 'Gel, kalbym, Gel, gürleşeli!',
  },
  {
    name: 'Ýürek bilen sorag-jogap',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Ýaşyl Tugly Türkmenistan',
  },
  {
    name: 'Gel, kalbym, Gel, gürleşeli!',
  },
  {
    name: 'Ýürek bilen sorag-jogap',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Ýaşyl Tugly Türkmenistan',
  },
  {
    name: 'Gel, kalbym, Gel, gürleşeli!',
  },
  {
    name: 'Ýürek bilen sorag-jogap',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
  {
    name: 'Gyşdan soňra bahar gelýär!',
  },
];

const Poems = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState({
    id: 'new',
    view: 'Snaçala nowye',
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const totalItems = filterData.length;
  const displayedData = filterData.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <PageLayout
      title="Täze goşgular"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-[64px]">
      <SortModal search={searchValue} setSearch={setSearchValue} sort={sort} setSort={setSort} />

      <div className="flex flex-col gap-8 relative">
        {searchValue.length > 0 && filterData && (
          <div
            className={cn(
              'w-full mx-auto  text-center pb-4 h-[50px]',
              filterData.length !== 0 && 'border-b border-OUTLINE',
            )}>
            {filterData.length > 0 ? `Po «${searchValue}» zaprosy naýdeno:` : 'Niçego ne naýdeno!'}
          </div>
        )}
        <div className="grid grid-cols-2 gap-8 w-[948px] mx-auto">
          {displayedData.map((item, i) => (
            <PoemsItem key={i} id={'1'} {...item} />
          ))}
        </div>

        {filterData.length > 0 && (
          <Pagination
            perPage={perPage}
            currentPage={currentPage}
            totalPages={totalItems}
            onChangePage={handlePageChange}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Poems;
