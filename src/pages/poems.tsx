import PageLayout from '@/components/layout/page-layout';
import Pagination from '@/components/shared/pagination';
import PoemsItem from '@/components/shared/poems-item';
import SortModal from '@/components/shared/sort-modal';
import { cn } from '@/lib/utils';
import { useGetPinPoems } from '@/query/use-get-pin-poems';
import { useGetPoems } from '@/query/use-get-poems';
import poetService from '@/services/poet.service';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const Poems = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState({
    id: 'new',
    view: 'Snaçala nowye',
  });

  const { data: poems } = useGetPoems();
  const { data: pinned } = useGetPinPoems();

  const pinPoems = pinned?.pinned_poems || [];

  const perPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filterData = poems?.filter((item) =>
    item.poem_name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const displayedData = filterData?.slice((currentPage - 1) * perPage, currentPage * perPage);

  const sortData = displayedData && [...displayedData].reverse();

  const getSortData = () => (sort.id === 'old' ? sortData : displayedData);

  const queryClient = useQueryClient();

  const handleFavoriteChange = async (poemId: number, isPinned: boolean) => {
    try {
      if (isPinned) {
        await poetService.unPinPoem({ poem_id: poemId });
      } else {
        await poetService.postPoem({ poem_id: poemId });
      }

      queryClient.invalidateQueries({ queryKey: ['pinPoems'] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageLayout
      title="Täze goşgular"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="xl:gap-[64px] gap-8">
      <SortModal search={searchValue} setSearch={setSearchValue} sort={sort} setSort={setSort} />

      <div className="flex flex-col gap-8 relative">
        {searchValue.length > 0 && filterData && (
          <div
            className={cn(
              'w-full mx-auto text-[18px]  xl:text-[24px] text-center pb-4 h-[50px]',
              filterData.length !== 0 && 'border-b border-OUTLINE',
            )}>
            {filterData.length > 0 ? `Po «${searchValue}» zaprosy naýdeno:` : 'Niçego ne naýdeno!'}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 gap-6 md:w-[768px] xl:w-[948px] mx-auto">
          {getSortData()?.map((item, i) => (
            <PoemsItem
              key={i}
              link={`/poems/${item.id}`}
              active={pinPoems.some((obj) => obj.id === item.id)}
              onFavoriteChange={handleFavoriteChange}
              {...item}
            />
          ))}
        </div>

        {poems && poems.length > 10 && (
          <Pagination
            perPage={perPage}
            currentPage={currentPage}
            totalPages={poems?.length || 1}
            onChangePage={handlePageChange}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Poems;
