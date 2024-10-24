import PageLayout from '@/components/layout/page-layout';
import CommentCard from '@/components/shared/comment-card';
import MobCommentModal from '@/components/shared/mob-comment-modal';
import Pagination from '@/components/shared/pagination';
import WindowPopup from '@/components/shared/window-popup';
import { Button } from '@/components/ui/button';
import { usePopupStore } from '@/store/usePopup';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const data = [
  {
    name: 'radzhapov',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
  {
    name: 'Ruslan',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
  {
    name: 'Hemra',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
  {
    name: 'Dowlet',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
  {
    name: 'Sapar',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
  {
    name: 'Rejep',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
  {
    name: 'Ali',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
  {
    name: 'Myrat',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
  {
    name: 'Batyr',
    date: '10.09.2024 ý.',
    text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
  },
];

const Messages = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [active, setActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobComment, setMobComment] = useState(false);
  const desktop = useMediaQuery('(min-width: 768px)');

  const setMode = usePopupStore().setMode;

  const perPage = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalItems = 9;
  const displayedData = data.slice((currentPage - 1) * perPage, currentPage * perPage);

  useEffect(() => {
    console.log('Current Page:', currentPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  return (
    <>
      <AnimatePresence>
        {active && <WindowPopup setActive={setActive} />}
        {isSubmitted && <WindowPopup setActive={setActive} setIsSubmitted={setIsSubmitted} />}
        {mobComment && <MobCommentModal setActive={setMobComment} />}
      </AnimatePresence>

      <PageLayout
        title="Teswirler"
        text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
        className="gap-12">
        <div className="">
          <div className="mx-auto w-[892px] flex flex-col gap-6">
            {displayedData.map((item, i) => (
              <CommentCard key={i} {...item} />
            ))}
          </div>

          <Pagination
            perPage={perPage}
            currentPage={currentPage}
            totalPages={totalItems}
            onChangePage={handlePageChange}
            className="mt-8 mb-16"
          />

          <div className="flex justify-center">
            <Button
              onClick={() => {
                desktop ? setActive(true) : setMobComment(true);
                setMode('comment');
              }}
              className="px-6">
              Ostawit swoý kommentariý
            </Button>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Messages;
