import s from './Layout.module.scss';
import Header from "./Header/Header";
import { useState } from "react";
import Office from "../screens/Office/Office";
import Authorization from "../screens/Authorization/Authorization";
import Navbar from './Navbar/Navbar';
import { useAuth } from './../../hooks/useAuth';

function Layout({ children }) {
  // const [isAuth, setIsAuth] = useState(true);
  const { isAuth } = useAuth()
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <div className="App">
      <Header isOpen={isOpen} openMenu={openMenu} />

      <div className={s.office}>
        {isAuth ? <Navbar isOpen={isOpen} openMenu={openMenu} /> : <></>}
        {children}
        {/* {isAuth ? <Office isOpen={isOpen} openMenu={openMenu} /> : <Authorization />} */}
      </div>
    </div>
  );
}

export default Layout;
