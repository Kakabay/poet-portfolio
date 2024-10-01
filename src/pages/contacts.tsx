import PageLayout from '@/components/layout/page-layout';
import ContactsForm from '@/components/shared/contacts-form';

type Props = {};

const Contacts = ({}: Props) => {
  return (
    <PageLayout
      title="Kontaktlar"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <section>
        <h3 className="text-[32px] kasu leading-[110%] py-12 px-6 mt-7">Men bilen habarlaşyň!</h3>

        <div className="flex gap-6">
          <ContactsForm />
        </div>
      </section>
    </PageLayout>
  );
};

export default Contacts;
