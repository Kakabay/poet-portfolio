import PageLayout from '@/components/layout/page-layout';
import MomentsCard from '@/components/shared/moments-card';
import Pagination from '@/components/shared/pagination';
import { scrollTop } from '@/lib/utils';
import { useGetMoments } from '@/query/use-get-moments';
import { useGetStatic } from '@/query/use-get-static-words';
import { useEffect, useState } from 'react';

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

  scrollTop(currentPage);

  const { data: staticData } = useGetStatic(7, 'momentsData');
  const { data: moments } = useGetMoments();

  const displayedData = moments?.slice((currentPage - 1) * perPage, currentPage * perPage);

  const image = moments?.[0]?.main_image.path || '';

  return (
    <PageLayout
      title={staticData?.[0]?.word}
      className="xl:gap-12 gap-8"
      text={staticData?.[1]?.word}>
      <div className="relative ">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6 mb-8">
          {displayedData?.map((item, i) => (
            <MomentsCard image={image} key={i} {...item} />
          ))}
        </div>

        {displayedData && displayedData.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={moments?.length || 1}
            perPage={perPage}
            onChangePage={setCurrentPage}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Moments;
