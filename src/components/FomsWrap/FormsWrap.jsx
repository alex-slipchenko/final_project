import React, { useContext, useReducer, useEffect } from "react";
import Form from "../Form/Form";
import actions from "../../store/usersCompare/action";
import { actionCreator } from "../../store/actionCreater";
import FormContext from "../../contexts/contextForm/FormContext";

export default function FormsWrap() {
  const { state, dispatch } = useContext(FormContext);

  const setFirstUser = (payload) => {
    dispatch(actionCreator(actions.FIRST_USER_GET, payload));
  };
  const setSecondUser = (payload) => {
    dispatch(actionCreator(actions.SECOND_USER_GET, payload));
  };

  return (
    <div className="form__wrapper">
      <Form
        title={"Player 1"}
        selectUser={setFirstUser}
        stateUser={state.userFirst}
        compareState={state.iconRow1}
      />
      <Form
        title={"Player 2"}
        selectUser={setSecondUser}
        stateUser={state.userSecond}
        compareState={state.iconRow2}
      />
    </div>
  );
}
