import { Link } from 'react-router-dom';

export const navData = [
  {
    link: '/about',
    view: 'Özüm hakda kelam agyz',
  },
  {
    link: '/poems',
    view: 'Täze goşgular',
  },
  {
    link: '/comments',
    view: 'Synlar, ýatlamar, gutlaglar',
  },
  {
    link: '/moments',
    view: 'Pursatlar',
  },
  {
    link: '/books',
    view: 'Kitaplar',
  },
  {
    link: '',
    view: 'Teswirler',
  },
  {
    link: '',
    view: 'Muşdaklar',
  },
  {
    link: '',
    view: 'Kontaktlar',
  },
];

const socials = [
  {
    link: '',
    icon: '/images/tg.svg',
    name: 'ezizgeldihellenov',
  },
  {
    link: '',
    icon: '/images/facebook.svg',
    name: 'ezizgeldihellenov',
  },
  {
    link: '',
    icon: '/images/youtube.svg',
    name: 'ezizgeldihellenov',
  },
  {
    link: '',
    icon: '/images/inst.svg',
    name: 'ezizgeldihellenov',
  },
];

const Header = () => {
  return (
    <header className="pt-6 flex flex-col gap-4">
      <div className="flex items-end container justify-between">
        <div className="flex items-end">
          <Link to="/" className="kaushan text-[36px] mr-6">
            Ezizgeldi Helleňow
          </Link>
          <div className="flex gap-2 text-ON_SURFACE_VAR font-medium leading-[115%] text-[14px]">
            {socials.map((item, i) => (
              <Link to={item.link} key={i} className="flex gap-1">
                <img src={item.icon} alt="" />
                <div className="">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative py-3 px-2 bg-AUTH_BTN_PATTERN bg-no-repeat drop-shadow-INNER_SHADOW">
          <div className="text-14">Giriş</div>
        </div>
      </div>

      <div className="container">
        <nav className="bg-cover bg-[url('/images/header-bg.svg')]  flex justify-center relative drop-shadow-INNER_SHADOW bg-clip -tracking-[1%] kaushan text-[18px] gap-4 bg-no-repeat py-4">
          <img
            src="/images/header-bg.png"
            alt=""
            className="absolute top-0 left-0 right-0 -z-50 object-clip h-full w-full"
          />
          {navData.map((item, i) => (
            <Link to={item.link} key={i} className="flex items-center gap-4">
              {item.view}
              {navData.length !== i + 1 && <img src="/images/romb.svg" />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
