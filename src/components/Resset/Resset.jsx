import React, { useContext } from "react";
import FormContext from "../../contexts/contextForm/FormContext";

export default function Resset() {
  const {
    firstUser,
    secondUser,
    setFirstUser,
    setSecondUser,
    setClearUser,
    setIsActive_Butle,
    setuserRow1,
    setuserRow2,
  } = useContext(FormContext);

  const handleResset = () => {
    setFirstUser("");
    setSecondUser("");
    setClearUser("delete");
    setIsActive_Butle("");
    setuserRow1("");
    setuserRow2("");
  };

  return (
    firstUser.repositories_stars &&
    secondUser.repositories_stars && (
      <button onClick={handleResset}>Resset</button>
    )
  );
}
