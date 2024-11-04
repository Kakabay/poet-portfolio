import { AnimatePresence } from 'framer-motion';
import { useContactsStore } from '@/store/useContacts';
import { useLoginStore } from '@/store/useLogin';
import { useAuthStore } from '@/store/useAuthStore';
import Login from './login';
import LoginWindowMob from './login-window-mob';
import Burger from './burger';
import MedBurger from './med-burger';
import PopupMessage from './popup-message';

interface Burger {
  burger: boolean;
  medBurger: boolean;
  setBurger: (val: boolean) => void;
  setMedBurger: (val: boolean) => void;
}

const Popups = ({ burger, setBurger, medBurger, setMedBurger }: Burger) => {
  const contactsSucces = useContactsStore().success;
  const contactsSetSucces = useContactsStore().setSuccess;

  const registerSuccess = useAuthStore().registerSuccess;
  const setRegisterSuccess = useAuthStore().setRegisterSuccess;

  const loginSuccess = useLoginStore().loginSuccess;
  const setLoginSuccess = useLoginStore().setLoginSuccess;

  const loginActive = useLoginStore().active;
  const mobActive = useLoginStore().mobActive;

  const token = useAuthStore().accessToken;

  return (
    <>
      <AnimatePresence>
        {contactsSucces && (
          <PopupMessage
            title={'Data was sended!'}
            text="Спасибо за доверие!"
            setActive={contactsSetSucces}
          />
        )}

        {contactsSucces && (
          <PopupMessage
            title={'Data was sended!'}
            text="Спасибо за доверие!"
            setActive={contactsSetSucces}
          />
        )}

        {registerSuccess && (
          <PopupMessage
            title={'Data was sended!'}
            text="Спасибо за доверие!"
            setActive={setRegisterSuccess}
          />
        )}

        {loginSuccess && (
          <PopupMessage
            title={'Вы успешно вошли!'}
            text="Спасибо за доверие!"
            setActive={setLoginSuccess}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>{!token && loginActive && <Login />}</AnimatePresence>

      <AnimatePresence>{mobActive && <LoginWindowMob />}</AnimatePresence>

      <AnimatePresence>{burger && <Burger setBurger={setBurger} />}</AnimatePresence>

      <AnimatePresence>{medBurger && <MedBurger setBurger={setMedBurger} />}</AnimatePresence>
    </>
  );
};

export default Popups;
