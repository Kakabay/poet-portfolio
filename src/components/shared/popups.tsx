import { AnimatePresence } from "framer-motion";
import { useContactsStore } from "@/store/useContacts";
import { useLoginStore } from "@/store/useLogin";
import { useAuthStore } from "@/store/useAuthStore";
import Login from "./login";
import LoginWindowMob from "./login-window-mob";
import MedBurger from "./med-burger";
import PopupMessage from "./popup-message";
import { Burger } from "./burger";

interface Burger {
  burger: boolean;
  medBurger: boolean;
  setBurger: (val: boolean) => void;
  setMedBurger: (val: boolean) => void;
}

const Popups = ({ burger, setBurger, medBurger, setMedBurger }: Burger) => {
  const contactsSucces = useContactsStore((state) => state.success);
  const contactsSetSucces = useContactsStore((state) => state.setSuccess);

  const registerSuccess = useAuthStore((state) => state.registerSuccess);
  const setRegisterSuccess = useAuthStore((state) => state.setRegisterSuccess);

  const loginSuccess = useLoginStore((state) => state.loginSuccess);
  const setLoginSuccess = useLoginStore((state) => state.setLoginSuccess);

  const loginActive = useLoginStore((state) => state.active);
  const mobActive = useLoginStore((state) => state.mobActive);

  const token = useAuthStore((state) => state.accessToken);

  return (
    <>
      <AnimatePresence>
        {contactsSucces && (
          <PopupMessage
            title={"Data was sended!"}
            text="Спасибо за доверие!"
            setActive={contactsSetSucces}
          />
        )}

        {contactsSucces && (
          <PopupMessage
            title={"Data was sended!"}
            text="Спасибо за доверие!"
            setActive={contactsSetSucces}
          />
        )}

        {registerSuccess && (
          <PopupMessage
            title={"Data was sended!"}
            text="Спасибо за доверие!"
            setActive={setRegisterSuccess}
          />
        )}

        {loginSuccess && (
          <PopupMessage
            title={"Вы успешно вошли!"}
            text="Спасибо за доверие!"
            setActive={setLoginSuccess}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>{!token && loginActive && <Login />}</AnimatePresence>

      <AnimatePresence>{mobActive && <LoginWindowMob />}</AnimatePresence>

      <AnimatePresence>
        {burger && <Burger setBurger={setBurger} />}
      </AnimatePresence>

      <AnimatePresence>
        {medBurger && <MedBurger setBurger={setMedBurger} />}
      </AnimatePresence>
    </>
  );
};

export default Popups;
