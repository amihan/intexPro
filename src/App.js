import './App.css';
import Header from "./components/Header/Header";
import { useState } from "react";
import Office from "./pages/Office/Office";
import Authorization from "./pages/Authorization/Authorization";

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
      {isAuth ? <Office isOpen={isOpen} /> : <Authorization />}
    </div>
  );
}

export default App;
