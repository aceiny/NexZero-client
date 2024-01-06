import React , {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import NavBar from "./utils/NavBar";
import FirstSec from "./utils/FirstSec";
import Context from "./Context";
function App() {
  const [modal, setModal] = useState(false)
  const [typeStart, setTypeStart] = useState('')
  const [typeEnd, setTypeEnd] = useState('')
  const toogleModal = () => {
    setModal(!modal)
    console.log(modal)
  }
  return (
    <Context.Provider value={{ toogleModal, modal }}>
      <div className="w-[100%] bg-[#1B1919]">
      <NavBar />
      <FirstSec /></div>
    </Context.Provider>
  );
}

export default App
