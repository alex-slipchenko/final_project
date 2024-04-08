import React, { useContext } from "react";
import Form from "../Form/Form";
import FormContext from "../../contexts/contextForm/FormContext";

export default function FormsWrap() {
  const {
    firstUser,
    secondUser,
    setFirstUser,
    setSecondUser,
    userRow1,
    userRow2,
  } = useContext(FormContext);

  return (
    <div className="form__wrapper">
      <Form
        title={"Player 1"}
        selectUser={setFirstUser}
        stateUser={firstUser}
        compareState={userRow1}
      />
      <Form
        title={"Player 2"}
        selectUser={setSecondUser}
        stateUser={secondUser}
        compareState={userRow2}
      />
    </div>
  );
}
