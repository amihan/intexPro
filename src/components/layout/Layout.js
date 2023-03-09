import './Layout.module.css';
import Header from "./Header/Header";
import { useState } from "react";
import Office from "../screens/Office/Office";
import Authorization from "../screens/Authorization/Authorization";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div className="App">
      <Header isOpen={isOpen} openMenu={openMenu} />
      {/* <Authorization /> */}
      {isAuth ? <Office isOpen={isOpen} openMenu={openMenu} /> : <Authorization />}
    </div>
  );
}

export default App;
