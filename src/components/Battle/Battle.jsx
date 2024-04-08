import React, { useContext, useEffect } from "react";
import method from "../../service/getMethodApi";
import userRow from "../../constans/usersIconResult";
import FormContext from "../../contexts/contextForm/FormContext";

export default function Battle() {
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

  const {
    firstUser,
    secondUser,
    setFirstUser,
    setSecondUser,
    isActive_Buttle,
    setIsActive_Butle,
    setuserRow1,
    setuserRow2,
  } = useContext(FormContext);

  const handleBattle = async () => {
    const [response1, response2] = await Promise.all([
      method.getReposUser(firstUser.login),
      method.getReposUser(secondUser.login),
    ]);

    setFirstUser({
      ...firstUser,
      repositories_stars: calculateSum(response1),
      first_score: calculateSum(response1) + firstUser.followers,
    });

    setSecondUser({
      ...secondUser,
      repositories_stars: calculateSum(response2),
      second_score: calculateSum(response2) + secondUser.followers,
    });

    setIsActive_Butle(true);
  };

  useEffect(() => {
    if (firstUser.first_score && secondUser.second_score) {
      setuserRow1(
        calculateRezult(firstUser.first_score, secondUser.second_score)
      );
      setuserRow2(
        calculateRezult(secondUser.second_score, firstUser.first_score)
      );
    }
  }, [isActive_Buttle]);

  return (
    !isActive_Buttle &&
    firstUser &&
    secondUser && <button onClick={handleBattle}>Battle</button>
  );
}
