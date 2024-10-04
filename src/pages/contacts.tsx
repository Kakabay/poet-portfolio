import PageLayout from "@/components/layout/page-layout";
import BgTexture from "@/components/shared/bg-texture";
import ContactsForm from "@/components/shared/contacts-form";
import ContactsLink from "@/components/shared/contacts-link";

type Props = {};

const Contacts = ({}: Props) => {
  return (
    <PageLayout
      title="Kontaktlar"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-12"
    >
      <section className="relative h-[656px] px-6 py-12 w-full shadow-bottom">
        <BgTexture className="bg-[url('/images/contacts/contacts-shape.svg')] contacts-path" />
        <h3 className="text-[32px] kaushan leading-[110%] mb-8">
          Men bilen habarlaşyň!
        </h3>

        <div className="flex gap-6">
          <ContactsForm />

          <div className="h-[492px] flex-[0_0_1px] w-[1px] bg-OUTLINE_VAR" />

          <div className="flex flex-col gap-4 flex-[0_0_472px]">
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
