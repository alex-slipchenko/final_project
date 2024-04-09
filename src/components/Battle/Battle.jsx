import React from "react";

import useButtleButton from "../../hooks/useButtleButton";
export default function Battle() {
  const { state, handleBattle } = useButtleButton();
  return (
    !state.battleBatton &&
    state.userFirst &&
    state.userSecond && <button onClick={handleBattle}>Battle</button>
  );
}
