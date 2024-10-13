import PageLayout from "@/components/layout/page-layout";
import BgTexture from "@/components/shared/bg-texture";
import ContactsForm from "@/components/shared/contacts-form";
import ContactsLink from "@/components/shared/contacts-link";
import { scrollTop } from "@/lib/utils";

type Props = {};

const Contacts = ({}: Props) => {
  scrollTop();

  return (
    <PageLayout
      title="Kontaktlar"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="xl:gap-12 gap-8"
    >
      <section className="relative xl:h-[624px] h-[1236px] xl:px-6 px-4 py-8 w-full shadow-bottom overflow-hidden  ">
        <BgTexture className="xl:bg-[url('/images/contacts/contacts-shape.svg')] bg-[url('/images/contacts/contacts-mob-shape.svg')] contacts-mob-path xl:contacts-path" />
        <h3 className="text-[32px] kaushan leading-[110%] xl:mb-8 mb-4">
          Men bilen habarlaşyň!
        </h3>

        <div className="flex xl:flex-row flex-col gap-6">
          <ContactsForm />

          <div className="xl:h-[492px] h-[1px] flex-[0_0_1px] xl:w-[1px] w-full bg-OUTLINE_VAR" />

          <div className="flex flex-col gap-6 flex-[0_0_472px]">
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
