import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
}

const PageLayout = ({ className, title, children }: Props) => {
  return (
    <main className={cn('pt-12 pb-[120px]')}>
      <section className="container">
        <h1 className="h1 kaushan text-center mb-12">{title}</h1>

        <div className={cn('flex flex-col', className)}>{children}</div>
      </section>
    </main>
  );
};

export default PageLayout;
