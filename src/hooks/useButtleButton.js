import React, { useContext, useEffect } from "react";
import method from "../service/getMethodApi";
import userRow from "../constans/usersIconResult";
import FormContext from "../contexts/contextForm/FormContext";
import actions from "../store/usersCompare/action";
import { actionCreator } from "../store/actionCreater";

export default function useButtleButton() {
  const { state, dispatch } = useContext(FormContext);

  const calculateSum = (data) => {
    return data.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.stargazers_count,
      0
    );
  };

  const calculateRezult = (number1, number2) => {
    if (number1 > number2) {
      return userRow.winner;
    } else {
      return userRow.loser;
    }
  };

  const handleBattle = async () => {
    const [response1, response2] = await Promise.all([
      method.getReposUser(state.userFirst.name),
      method.getReposUser(state.userSecond.name),
    ]);

    dispatch(
      actionCreator(actions.ADD_FIRST_STARS, {
        repos_stars: calculateSum(response1),
        total_score: calculateSum(response1) + state.userFirst.followers,
      })
    );

    dispatch(
      actionCreator(actions.ADD_SECOND_STARS, {
        repos_stars: calculateSum(response2),
        total_score: calculateSum(response2) + state.userSecond.followers,
      })
    );

    dispatch(actionCreator(actions.BATTON_IS_ACTIVE, true));
    dispatch(actionCreator(actions.ACTIVE_LIST, true));
  };

  useEffect(() => {
    if (state.userFirst.total_score && state.userSecond.total_score) {
      const payload1 = calculateRezult(
        state.userFirst.total_score,
        state.userSecond.total_score
      );
      const payload2 = calculateRezult(
        state.userSecond.total_score,
        state.userFirst.total_score
      );

      dispatch(actionCreator(actions.USER_ROW1, payload1));
      dispatch(actionCreator(actions.USER_ROW2, payload2));
    }
  }, [state.battleBatton]);

  return {
    state,
    dispatch,
    calculateSum,
    calculateRezult,
    handleBattle,
    useEffect,
  };
}
