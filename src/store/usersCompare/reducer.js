import actions from "./action";

const initialState = {
  userFirst: "",
  userSecond: "",
  listIsActive: "",
  battleBatton: "",
  clearUser: "",
  iconRow1: "",
  iconrow2: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.FIRST_USER_GET:
      return { ...state, userFirst: payload };
      break;
    case actions.SECOND_USER_GET:
      return { ...state, userSecond: payload };
      break;
    case actions.BATTON_IS_ACTIVE:
      return { ...state, battleBatton: payload };
      break;
    case actions.CLEAR_USER:
      return { ...state, clearUser: "" };
      break;
    case actions.ADD_FIRST_STARS:
      return {
        ...state,
        userFirst: { ...state.userFirst, ...payload },
      };
      break;
    case actions.ADD_SECOND_STARS:
      return {
        ...state,
        userSecond: { ...state.userSecond, ...payload },
      };
      break;
    case actions.ACTIVE_LIST:
      return { ...state, listIsActive: payload };
      break;
    case actions.USER_ROW1:
      return { ...state, iconRow1: payload };
      break;
    case actions.USER_ROW2:
      return { ...state, iconRow2: payload };
      break;
    case actions.DELETE:
      return { ...initialState, clearUser: true };
      break;

    default:
      return state;
  }
};

export { initialState, reducer };
