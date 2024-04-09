import { useState, useContext, useEffect } from "react";
import FormContext from "../contexts/contextForm/FormContext";
import method from "../service/getMethodApi";
import actions from "../store/usersCompare/action";
import { actionCreator } from "../store/actionCreater";

export default function useForm(selectUser) {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState("");
  const { state, dispatch } = useContext(FormContext);
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await method.getUser(inputValue);
      setUserData(response.data);
      selectUser({
        followers: response.data.followers,
        photo: response.data.avatar_url,
        name: response.data.login,
      });

      setInputValue("");
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

  const handleReset = () => {
    setInputValue(""); // Сброс значения поля ввода
    setUserData(""); // Сброс данных пользователя
  };

  useEffect(() => {
    handleReset();
    dispatch(actionCreator(actions.CLEAR_USER));
  }, [state.clearUser]);

  return {
    error,
    inputValue,
    userData,
    state,
    dispatch,
    getInputValue,
    handleSubmit,
    handleReset,
  };
}
