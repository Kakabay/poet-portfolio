import PageLayout from "@/components/layout/page-layout";
import CommentCard from "@/components/shared/comment-card";
import NotificationCard from "@/components/shared/notification-card";
import PoemsItem from "@/components/shared/poems-item";
import Tabs from "@/components/shared/tabs";
import { cn } from "@/lib/utils";
import { usePoemsStore } from "@/store/usePoems";
import { div } from "framer-motion/client";
import { useState } from "react";

const cabinetTabs = [
  {
    view: "Moi zakladki",
    id: 0,
  },
  {
    view: "Moi kommentarii",
    id: 1,
  },
  {
    view: "Uwedomleniýa",
    id: 2,
  },
];

const Cabinet = () => {
  const [active, setActive] = useState(0);

  const favorites = usePoemsStore().favorites;

  console.log(favorites);

  return (
    <PageLayout title="Salam Myrat!" className="gap-12">
      <Tabs array={cabinetTabs} active={active} setActive={setActive} />

      <div
        className={cn(
          "",
          active === 0
            ? "grid grid-cols-2 gap-8 grid-rows-5 w-[948px] mx-auto place-items-center"
            : "flex flex-col items-center gap-6"
        )}
      >
        {favorites.map((item) =>
          active === 0 ? (
            <PoemsItem active {...item} key={item.id} id={item.id} />
          ) : active === 1 ? (
            <CommentCard name={""} date={""} text={""} />
          ) : (
            <NotificationCard />
          )
        )}
      </div>
    </PageLayout>
  );
};

export default Cabinet;
