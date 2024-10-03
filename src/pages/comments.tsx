import PageLayout from '@/components/layout/page-layout';
import CommentsCard from '@/components/shared/comments-card';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const tabs = [
  {
    view: 'Wsýo',
    id: 'all',
  },
  {
    view: 'Synlar',
    id: 'comments',
  },
  {
    view: 'Ýatlamar',
    id: 'all',
  },
  {
    view: 'Gutlaglar',
    id: 'congr',
  },
];

const Comments = () => {
  const [active, setActive] = useState(1);

  return (
    <PageLayout
      title="Synlar, ýatlamar, gutlaglar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <section>
        <div className="flex flex-col gap-10 justify-center">
          <div className="flex text-16 items-center border-b transition-all w-fit mx-auto border-OUTLINE">
            {tabs.map((item, i) => (
              <h5
                key={i}
                onClick={() => setActive(i)}
                className={cn('px-4 py-2 cursor-pointer relative transition-all', {
                  'after:absolute after:h-0.5 after:bg-OUTLINE_VAR_HIGH after:w-full after:transition-all after:bottom-0 after:left-0':
                    active === i,
                })}>
                {item.view}
              </h5>
            ))}
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <CommentsCard
                key={i}
                categ={'Synlar'}
                text={'Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi'}
                author={'Aýdyn Ataýew'}
                print={'AGU neşirýat, kopiraýter'}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Comments;
