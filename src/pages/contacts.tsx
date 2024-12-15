import PageLayout from "@/components/layout/page-layout";
import ContactsForm from "@/components/forms/contacts-form";
import ContactsLink from "@/components/shared/contacts-link";
import { BgTexture } from "@/components/shared";
import { useGetStatic } from "@/query/use-get-static-words";

const Contacts = () => {
  const { data } = useGetStatic(14, "contactsData");

  return (
    <PageLayout
      title={data?.[0]?.word}
      text={data?.[1]?.word}
      className="xl:gap-12 gap-8"
    >
      <section className="relative xl:h-[624px] md:h-[876px] h-[1236px] md:px-6 px-4 py-8 w-full shadow-bottom overflow-hidden">
        <BgTexture className="xl:bg-[url('/images/contacts/contacts-shape.svg')] md:bg-[url('/images/contacts/contacts-med-shape.svg')] bg-[url('/images/contacts/contacts-mob-shape.svg')] contacts-mob-path xl:contacts-path md:contacts-med-path" />
        <h3 className="text-[32px] kaushan leading-[110%] xl:mb-8 mb-4">
          {data?.[3]?.word}
        </h3>

        <div className="flex xl:flex-row flex-col gap-6">
          <div className="xl:flex-[0_0_648px]">
            <ContactsForm />
          </div>

          <div className="xl:h-[492px] h-[1px] flex-[0_0_1px] xl:w-[1px] w-full bg-OUTLINE_VAR" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
            {[...Array(4)].map((_, i) => (
              <ContactsLink
                key={i}
                title="Telegram toparyma goşulyň"
                subtitle="poluchayte novosti, obnovleniya i kommentiruyte publikatsii"
                link=""
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contacts;
