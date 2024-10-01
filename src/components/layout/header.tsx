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
    link: '/messages',
    view: 'Teswirler',
  },
  {
    link: '/instruction',
    view: 'Muşdaklar',
  },
  {
    link: '/contacts',
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
      <div className="flex relative z-50 items-end container justify-between">
        <div className="flex items-end">
          <Link to="/" className="kaushan text-[36px] mr-6">
            Ezizgeldi Helleňow
          </Link>
          <div className="flex gap-2 text-ON_SURFACE_VAR  font-medium leading-[115%] text-[14px]">
            {socials.map((item, i) => (
              <Link to={item.link} key={i} className="flex gap-1">
                <img src={item.icon} alt="" />
                <div className="">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative py-3 px-2 flex items-center gap-1 cursor-pointer bg-AUTH_BTN_PATTERN bg-no-repeat drop-shadow-INNER_SHADOW">
          <img src="/images/enter.svg" alt="" />
          <div className="text-14">Giriş</div>
        </div>
      </div>

      <div className="container">
        <nav className="relative drop-shadow-INNER_SHADOW">
          <div className="relative inset-0 w-full h-auto">
            <img
              src="/images/header-shape.svg"
              alt="Background"
              className="w-full h-full object-contain" // Фон растягивается по ширине и высоте
            />
          </div>
          {/* Наложение текстуры */}
          <div className="absolute inset-0 mix-blend-multiply pointer-events-none">
            <img
              src="/images/texture.png"
              alt=""
              className="w-full h-full opacity-50 object-cover "
            />
          </div>

          {/* Контент навигации */}
          <div className="absolute inset-0 flex justify-center py-4 -tracking-[1%] z-10 kaushan text-[18px] gap-4">
            {navData.map((item, i) => (
              <Link to={item.link} key={i} className="flex items-center gap-4">
                {item.view}
                {navData.length !== i + 1 && <img src="/images/romb.svg" />}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
