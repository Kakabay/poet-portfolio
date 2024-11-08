import PageLayout from '@/components/layout/page-layout';
import { BookCard } from '@/components/shared';
import { scrollTop } from '@/lib/utils';
import { useGetBooks } from '@/query/use-get-books';

const Books = () => {
  scrollTop();

  const { data: books, isLoading } = useGetBooks();

  return (
    <PageLayout
      title="Kitaplar"
      className="gap-12"
      loading={isLoading}
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <div className="flex flex-col gap-6 mx-auto">
        {books &&
          books.map((item, i) => <BookCard path={item.image?.path || ''} key={i} {...item} />)}
      </div>
    </PageLayout>
  );
};

export default Books;
