import React , {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
  const [modal, setModal] = useState(false)
  const [typeStart, setTypeStart] = useState('')
  const [typeEnd, setTypeEnd] = useState('')
  const toogleModal = () => {
    setModal(!modal)
  }
  return (
    <div>
        NexZero Template
    </div>
  );
}

export default App
