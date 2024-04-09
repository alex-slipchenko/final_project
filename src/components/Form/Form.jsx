import React from "react";
import "./style.css";

import useForm from "../../hooks/useForm";
export default function Form({ title, selectUser, stateUser, compareState }) {
  const {
    state,
    error,
    inputValue,
    userData,
    getInputValue,
    handleSubmit,
    handleReset,
  } = useForm(selectUser);

  return (
    <form onSubmit={handleSubmit}>
      {userData && <div className="compareState">{compareState}</div>}

      {!userData && (
        <label>
          Choose <span>{title}</span> username :
          <input value={inputValue} onChange={getInputValue} />
          {error && <div className="error">{error}</div>}
        </label>
      )}

      {userData && (
        <img src={userData.avatar_url} alt="User" className="img__user" />
      )}

      {userData && <h2>{!userData.name ? userData.login : userData.name}</h2>}

      {state.listIsActive && (
        <ul>
          <li>Followers :{stateUser.followers}</li>
          <li>Repositories stars :{stateUser.repos_stars}</li>
          <li>Total score: {stateUser.total_score}</li>
        </ul>
      )}

      {!state.battleBatton && userData && (
        <button type="button" onClick={handleReset}>
          Resset
        </button>
      )}

      {!userData && <button type="submit">Submit</button>}
    </form>
  );
}
