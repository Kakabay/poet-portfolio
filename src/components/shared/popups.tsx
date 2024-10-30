import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useContactsStore } from '@/store/useContacts';
import { usePopupStore } from '@/store/usePopup';
import { useLoginStore } from '@/store/useLogin';
import { useAuthStore } from '@/store/useAuthStore';
import Login from './login';
import LoginWindowMob from './login-window-mob';
import Burger from './burger';
import MedBurger from './med-burger';
import PopupMessage from './popup-message';

const Popups = () => {
  const [burger, setBurger] = useState(false);
  const [medBurger, setMedBurger] = useState(false);

  const contactsSucces = useContactsStore().success;
  const contactsSetSucces = useContactsStore().setSuccess;

  const loginActive = useLoginStore().active;
  const mobActive = useLoginStore().mobActive;

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
      </AnimatePresence>

      <AnimatePresence>{loginActive && <Login />}</AnimatePresence>

      <AnimatePresence>{mobActive && <LoginWindowMob />}</AnimatePresence>

      <AnimatePresence>{burger && <Burger setBurger={setBurger} />}</AnimatePresence>

      <AnimatePresence>{medBurger && <MedBurger setBurger={setMedBurger} />}</AnimatePresence>
    </>
  );
};

export default Popups;
