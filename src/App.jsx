import React, { useState, useEffect } from "react";
import FormContext from "./contexts/contextForm/FormContext";
import "./App.css";
import Battle from "./components/Battle/Battle";

import FormsWrap from "./components/FomsWrap/FormsWrap";
import Resset from "./components/Resset/Resset";
import Title from "./components/Title/Title";
export default function App() {
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");
  const [isActive_Buttle, setIsActive_Butle] = useState("");
  const [clearUser, setClearUser] = useState("");
  const [userRow1, setuserRow1] = useState("");
  const [userRow2, setuserRow2] = useState("");

  return (
    <div className="container">
      <Title />
      <FormContext.Provider
        value={{
          firstUser,
          setFirstUser,
          secondUser,
          setSecondUser,
          isActive_Buttle,
          setIsActive_Butle,
          clearUser,
          setClearUser,
          userRow1,
          setuserRow1,
          userRow2,
          setuserRow2,
        }}
      >
        <FormsWrap />
        <Battle />
        <Resset />
      </FormContext.Provider>
    </div>
  );
}
