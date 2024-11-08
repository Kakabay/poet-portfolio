import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLoginStore } from '@/store/useLogin';
import { useState } from 'react';
import User from '../shared/user';
import { useAuthStore } from '@/store/useAuthStore';
import Popups from '../shared/popups';
import { usePopupStore } from '@/store/usePopup';
import { BgTexture, EnterBtn } from '../shared';

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

export const socials = [
  {
    link: '',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1818 2.95331C13.3466 2.88397 13.5269 2.86006 13.704 2.88405C13.8811 2.90805 14.0486 2.97909 14.1889 3.08977C14.3293 3.20044 14.4374 3.34672 14.5021 3.51336C14.5667 3.68001 14.5855 3.86094 14.5565 4.03731L13.0445 13.2086C12.8978 14.0933 11.9272 14.6006 11.1158 14.16C10.4372 13.7913 9.42915 13.2233 8.52249 12.6306C8.06915 12.334 6.68049 11.384 6.85115 10.708C6.99782 10.13 9.33115 7.95798 10.6645 6.66664C11.1878 6.15931 10.9492 5.86664 10.3312 6.33331C8.79649 7.49198 6.33249 9.25398 5.51782 9.74998C4.79915 10.1873 4.42449 10.262 3.97649 10.1873C3.15915 10.0513 2.40115 9.84064 1.78249 9.58398C0.946488 9.23731 0.987155 8.08798 1.78182 7.75331L13.1818 2.95331Z"
          fill="#6D5E46"
        />
      </svg>
    ),
    name: 'ezizgeldihellenov',
  },
  {
    link: '',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.00934 3.92365V5.75565H4.66667V7.99565H6.00934V14.653H8.76534V7.99632H10.6153C10.6153 7.99632 10.7887 6.92232 10.8727 5.74765H8.77667V4.21565C8.77667 3.98698 9.07667 3.67898 9.37401 3.67898H10.8767V1.34698H8.83401C5.94067 1.34698 6.00934 3.58898 6.00934 3.92365Z"
          className="fill-[#6D5E46] group-hover:fill-PRIM"
        />
      </svg>
    ),
    name: 'ezizgeldihellenov',
  },
  {
    link: '',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.66667 10L10.1267 8.00001L6.66667 6.00001V10ZM14.3733 4.78001C14.46 5.09334 14.52 5.51334 14.56 6.04668C14.6067 6.58001 14.6267 7.04001 14.6267 7.44001L14.6667 8.00001C14.6667 9.46001 14.56 10.5333 14.3733 11.22C14.2067 11.82 13.82 12.2067 13.22 12.3733C12.9067 12.46 12.3333 12.52 11.4533 12.56C10.5867 12.6067 9.79333 12.6267 9.06 12.6267L8 12.6667C5.20667 12.6667 3.46667 12.56 2.78 12.3733C2.18 12.2067 1.79333 11.82 1.62667 11.22C1.54 10.9067 1.48 10.4867 1.44 9.95334C1.39333 9.42001 1.37333 8.96001 1.37333 8.56001L1.33333 8.00001C1.33333 6.54001 1.44 5.46668 1.62667 4.78001C1.79333 4.18001 2.18 3.79334 2.78 3.62668C3.09333 3.54001 3.66667 3.48001 4.54667 3.44001C5.41333 3.39334 6.20667 3.37334 6.94 3.37334L8 3.33334C10.7933 3.33334 12.5333 3.44001 13.22 3.62668C13.82 3.79334 14.2067 4.18001 14.3733 4.78001Z"
          fill="#6D5E46"
        />
      </svg>
    ),
    name: 'ezizgeldihellenov',
  },
  {
    link: '',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.2 1.33334H10.8C12.9333 1.33334 14.6667 3.06668 14.6667 5.20001V10.8C14.6667 11.8255 14.2593 12.809 13.5341 13.5342C12.809 14.2593 11.8255 14.6667 10.8 14.6667H5.2C3.06667 14.6667 1.33334 12.9333 1.33334 10.8V5.20001C1.33334 4.17451 1.74072 3.191 2.46586 2.46586C3.191 1.74072 4.1745 1.33334 5.2 1.33334ZM5.06667 2.66668C4.43015 2.66668 3.8197 2.91953 3.36961 3.36962C2.91953 3.81971 2.66667 4.43016 2.66667 5.06668V10.9333C2.66667 12.26 3.74 13.3333 5.06667 13.3333H10.9333C11.5699 13.3333 12.1803 13.0805 12.6304 12.6304C13.0805 12.1803 13.3333 11.5699 13.3333 10.9333V5.06668C13.3333 3.74001 12.26 2.66668 10.9333 2.66668H5.06667ZM11.5 3.66668C11.721 3.66668 11.933 3.75447 12.0893 3.91075C12.2455 4.06703 12.3333 4.279 12.3333 4.50001C12.3333 4.72102 12.2455 4.93299 12.0893 5.08927C11.933 5.24555 11.721 5.33334 11.5 5.33334C11.279 5.33334 11.067 5.24555 10.9107 5.08927C10.7545 4.93299 10.6667 4.72102 10.6667 4.50001C10.6667 4.279 10.7545 4.06703 10.9107 3.91075C11.067 3.75447 11.279 3.66668 11.5 3.66668ZM8 4.66668C8.88406 4.66668 9.7319 5.01787 10.357 5.64299C10.9821 6.26811 11.3333 7.11596 11.3333 8.00001C11.3333 8.88407 10.9821 9.73191 10.357 10.357C9.7319 10.9822 8.88406 11.3333 8 11.3333C7.11595 11.3333 6.2681 10.9822 5.64298 10.357C5.01786 9.73191 4.66667 8.88407 4.66667 8.00001C4.66667 7.11596 5.01786 6.26811 5.64298 5.64299C6.2681 5.01787 7.11595 4.66668 8 4.66668ZM8 6.00001C7.46957 6.00001 6.96086 6.21072 6.58579 6.5858C6.21072 6.96087 6 7.46958 6 8.00001C6 8.53044 6.21072 9.03915 6.58579 9.41422C6.96086 9.7893 7.46957 10 8 10C8.53044 10 9.03914 9.7893 9.41422 9.41422C9.78929 9.03915 10 8.53044 10 8.00001C10 7.46958 9.78929 6.96087 9.41422 6.5858C9.03914 6.21072 8.53044 6.00001 8 6.00001Z"
          fill="#6D5E46"
        />
      </svg>
    ),
    name: 'ezizgeldihellenov',
  },
];

export const texture = '/images/texture047.png';

const Header = () => {
  const [burger, setBurger] = useState(false);
  const [medBurger, setMedBurger] = useState(false);

  const setLoginActive = useLoginStore().setActive;

  const setMode = usePopupStore().setMode;

  const token = useAuthStore((state) => state.accessToken);

  return (
    <>
      <Popups
        burger={burger}
        setBurger={setBurger}
        medBurger={medBurger}
        setMedBurger={setMedBurger}
      />

      <header className="pt-4 xl:pt-6 flex flex-col gap-4">
        <div className="xl:hidden relative z-50 p-4 md:px-6 container h-20 w-[328px] md:w-[768px] shadow-bottom">
          <BgTexture className="bg-[url('/images/header-mob-shape.svg')] md:bg-[url('/images/header-med-shape.svg')] header-mob-path md:header-med-path" />

          <div className="flex leading-[120%] justify-between items-center">
            <Link className="kaushan" to="/">
              Ezizgeldi Helleňow
            </Link>

            <div className="flex items-center justify-between gap-4">
              {token ? (
                <User className="hidden md:flex" />
              ) : (
                <EnterBtn
                  className="!hidden md:!flex"
                  setActive={setLoginActive}
                  setMode={setMode}
                />
              )}

              <button
                className="p-2 border-OUTLINE border rounded-[4px]"
                onClick={() => {
                  setBurger(true);
                  setMedBurger(true);
                }}>
                <img src="/images/burger.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="xl:flex hidden relative z-50 items-end container justify-between">
          <div className="flex items-end">
            <Link to="/" className="kaushan text-[36px] mr-6">
              Ezizgeldi Helleňow
            </Link>
            <div className="flex gap-2 text-ON_SURFACE_VAR font-medium leading-[115%] text-[14px]">
              {socials.map((item, i) => (
                <Link to={item.link} key={i} className="flex gap-1 transition-all hover:text-PRIM">
                  {item.icon}
                  <div className="">{item.name}</div>
                </Link>
              ))}
            </div>
          </div>

          {token ? (
            <User />
          ) : (
            <EnterBtn className="!hidden md:!flex" setActive={setLoginActive} setMode={setMode} />
          )}
        </div>

        <div className="container hidden xl:block">
          <nav className="relative shadow-bottom h-14 z-30">
            <BgTexture className='bg-[url("/images/header-shape.svg")] header-path' />
            <div className="absolute inset-0 flex items-center justify-center py-4 -tracking-[1%] z-10 kaushan text-[18px] gap-4">
              {navData.map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <Link
                    to={item.link}
                    className={cn('flex items-center  transition-all group hover:text-PRIM')}>
                    {item.view}
                  </Link>
                  {navData.length !== i + 1 && <img src="/images/romb.svg" className="size-2" />}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
