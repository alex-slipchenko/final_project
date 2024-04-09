import React, { useContext } from "react";
import actions from "../../store/usersCompare/action";
import { actionCreator } from "../../store/actionCreater";
import FormContext from "../../contexts/contextForm/FormContext";

export default function Resset() {
  const { state, dispatch } = useContext(FormContext);

  const handleResset = () => {
    dispatch(actionCreator(actions.DELETE));
  };

  return state.listIsActive && <button onClick={handleResset}>Resset</button>;
}
