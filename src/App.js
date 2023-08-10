import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  {
    const [mode, setMode] = useState("light");
  }
  return (
    <>
      <Navbar title="TextUtiles" aboutText="About TextUtiles" />
      <TextForm/>
    </>
  );
}

export default App;
