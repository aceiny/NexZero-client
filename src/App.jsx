import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./utils/NavBar";
import FirstSec from "./utils/FirstSec";
import Time from "./utils/Time";
import About from "./utils/About";
import Context from "./Context";
import Reg from "./utils/Reg";
import ThirdSection from "./utils/ThirdSection";
import Mentors from "./utils/Mentors";

function App() {
  const [modal, setModal] = useState(false);
  const [typeStart, setTypeStart] = useState("");
  const [typeEnd, setTypeEnd] = useState("");
  const toogleModal = () => {
    setModal(!modal);
    console.log(modal);
  };
  return (
    <Context.Provider value={{ toogleModal, modal }}>
      <div className="w-[100%] bg-[#1B1919]">
        <NavBar />
        <div
          className="container_wrapper"
          onClick={() => setModal((prev) => (prev === true ? false : prev))}
        >
          <Reg />
          <FirstSec />
          <Time />
          <About />
          <ThirdSection />
          <Mentors />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
