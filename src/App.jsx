import React, { useReducer } from "react";
import FormContext from "./contexts/contextForm/FormContext";
import "./App.css";
import Battle from "./components/Battle/Battle";
import { reducer, initialState } from "./store/usersCompare/reducer";
import FormsWrap from "./components/FomsWrap/FormsWrap";
import Resset from "./components/Resset/Resset";
import Title from "./components/Title/Title";
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <Title />
      <FormContext.Provider value={{ state, dispatch }}>
        <FormsWrap />
        <Battle />
        <Resset />
      </FormContext.Provider>
    </div>
  );
}
