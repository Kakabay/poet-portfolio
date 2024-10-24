import PageLayout from '@/components/layout/page-layout';
import MomentsCard from '@/components/shared/moments-card';
import Pagination from '@/components/shared/pagination';
import { scrollTop } from '@/lib/utils';
import { useState } from 'react';

const data = [
  {
    img: '/images/moments/moments-img.png',
    title: 'Batyr',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Myrat',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Sanjar',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Dowran',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Geldi',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Eziz',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Ayhan',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Seyran',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Halid',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Valid',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Ali',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Sumbar',
  },
  {
    img: '/images/moments/moments-img.png',
    title: 'Akmyrat',
  },
];

const Moments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const displayedData = data.slice((currentPage - 1) * perPage, currentPage * perPage);

  scrollTop(displayedData);

  return (
    <PageLayout
      title={'Pursatlar'}
      className="xl:gap-12 gap-8"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <div className="relative ">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6 mb-8">
          {displayedData.map((item, i) => (
            <MomentsCard key={i} {...item} />
          ))}
        </div>

        {displayedData.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={data.length}
            perPage={perPage}
            onChangePage={setCurrentPage}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Moments;
