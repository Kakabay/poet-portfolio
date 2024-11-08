import PageLayout from '@/components/layout/page-layout';
import CommentCard from '@/components/shared/comment-card';
import MobCommentModal from '@/components/shared/mob-comment-modal';
import Pagination from '@/components/shared/pagination';
import PopupComment from '@/components/shared/popup-comment';
import PopupMessage from '@/components/shared/popup-message';
import { Button } from '@/components/ui/button';
import { useGetComments } from '@/query/use-get-comments';
import { useAuthStore } from '@/store/useAuthStore';
import { useCommentsStore } from '@/store/useComments';
import { useLoginStore } from '@/store/useLogin';
import { usePopupStore } from '@/store/usePopup';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

// const data = [
//   {
//     name: 'radzhapov',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
//   {
//     name: 'Ruslan',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
//   {
//     name: 'Hemra',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
//   {
//     name: 'Dowlet',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
//   {
//     name: 'Sapar',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
//   {
//     name: 'Rejep',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
//   {
//     name: 'Ali',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
//   {
//     name: 'Myrat',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
//   {
//     name: 'Batyr',
//     date: '10.09.2024 ý.',
//     text: 'Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli.',
//   },
// ];

const Messages = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [mobComment, setMobComment] = useState(false);
  const desktop = useMediaQuery('(min-width: 768px)');

  const { data, isLoading } = useGetComments();

  const setMode = usePopupStore().setMode;
  const setLoginMob = useLoginStore().setMobActive;
  const setDeskActive = useLoginStore().setActive;

  const commentOpen = useCommentsStore().commentOpen;
  const setCommentOpen = useCommentsStore().setCommentOpen;

  const commentSuccess = useCommentsStore().commentSucces;
  const setCommentSuccess = useCommentsStore().setCommentSuccess;

  const perPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedData = data ? data.slice((currentPage - 1) * perPage, currentPage * perPage) : [];

  const accessToken = useAuthStore((state) => state.accessToken);

  const onComment = () => {
    if (desktop && accessToken) {
      setMode('comment');
      setCommentOpen(true);
    } else if (desktop && !accessToken) {
      setDeskActive(true);
      setMode('login');
    } else if (!desktop && accessToken) {
      setMobComment(true);
    } else {
      setLoginMob(true);
    }
  };

  console.log(data);

  return (
    <>
      <AnimatePresence>
        {commentOpen && <PopupComment />}
        {commentSuccess && <PopupMessage title="" text="" setActive={setCommentSuccess} />}
        {mobComment && <MobCommentModal setActive={setMobComment} />}
      </AnimatePresence>

      <PageLayout
        loading={isLoading}
        title="Teswirler"
        messagesText="Hormatly muşdaklar!"
        text="Sahypadaky eserler barada seljerlenen teswirlerlerňizi, pikirleňizii hem-de tekliplerňizi aşakda goýup bilersiňiz. Siz bilen gatnaşykda bolar ýaly, elektron adresiňizi goýmany hem unutmaň!"
        className="gap-12">
        <div className="">
          <div className="mx-auto w-[892px] flex flex-col gap-6">
            {displayedData?.map((item, i) => (
              <CommentCard key={i} {...item} />
            ))}
          </div>

          {data && data?.length > 10 && (
            <Pagination
              perPage={perPage}
              currentPage={currentPage}
              totalPages={data?.length || 0}
              onChangePage={handlePageChange}
              className="mt-8"
            />
          )}

          <div className="flex justify-center">
            <Button onClick={onComment} className="px-6 mt-16">
              Ostawit swoý kommentariý
            </Button>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Messages;
