import PageLayout from "@/components/layout/page-layout";
import Tabs from "@/components/shared/tabs";
import { tabs } from "./synlar";
import { useState } from "react";

const Cabinet = () => {
  const [active, setActive] = useState(0);

  return (
    <PageLayout title="Salam Myrat!" className="gap-12">
      <Tabs array={tabs} active={active} setActive={setActive} />
    </PageLayout>
  );
};

export default Cabinet;
