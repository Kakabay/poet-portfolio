import PageLayout from '@/components/layout/page-layout';
import { BookCard } from '@/components/shared';
import { scrollTop } from '@/lib/utils';
import { useGetBooks } from '@/query/use-get-books';
import { useGetStatic } from '@/query/use-get-static-words';

const Books = () => {
  scrollTop();

  const { data: books, isPending } = useGetBooks();
  const { data: staticData } = useGetStatic(10, 'booksData');

  return (
    <PageLayout
      title={staticData?.[0]?.word}
      className="gap-12"
      loading={isPending}
      text={staticData?.[1]?.word}>
      <div className="flex flex-col gap-6 mx-auto">
        {books &&
          books.map((item, i) => <BookCard path={item.image?.path || ''} key={i} {...item} />)}
      </div>
    </PageLayout>
  );
};

export default Books;
