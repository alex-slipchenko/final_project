import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import FormContext from "../../contexts/contextForm/FormContext";
import method from "../../../../lesson_8_homework/src/service/getMethodApi";

export default function Form({ title, selectUser, stateUser, compareState }) {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState("");

  const { clearUser, setIsActive_Butle, setClearUser } =
    useContext(FormContext);

  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await method.getUser(inputValue);
      setUserData(response.data);
      selectUser(response.data);
    } catch (error) {
      if (error.response) {
        setError("Username not exist: " + error.response.status);
      } else if (error.request) {
        setError("No response received");
        console.error("No response received:", error.request);
      } else {
        setError("Error occurred: " + error.message);
        console.error("Error occurred:", error.message);
      }
    }
  };
  const handleRessset = () => {
    setInputValue("");
    setUserData("");
    selectUser("");
  };

  useEffect(() => {
    handleRessset();
    setIsActive_Butle("");
    setClearUser("");
  }, [clearUser]);

  return (
    <form onSubmit={handleSubmit}>
      {userData && <div className="compareState">{compareState}</div>}
      {!userData && (
        <label>
          Choose <span>{title}</span> username :
          <input defaultValue={inputValue} onChange={getInputValue} />
          {error && <div className="error">{error}</div>}
        </label>
      )}
      {userData && (
        <img src={userData.avatar_url} alt="User" className="img__user" />
      )}
      {userData && <h2>{!userData.name ? userData.login : userData.name}</h2>}
      {stateUser.repositories_stars && (
        <ul>
          <li>Followers :{stateUser.followers}</li>
          <li>Repositories stars :{stateUser.repositories_stars}</li>
          <li>
            Total score: {stateUser.followers + stateUser.repositories_stars}
          </li>
        </ul>
      )}

      {userData && !stateUser.repositories_stars && (
        <button onClick={handleRessset}>Resset</button>
      )}
    </form>
  );
}
