import * as Type from "./actionTypes";

const initState = {
  homeData: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case Type.GET_HOME_DATA:
      return { ...state, homeData: action.payload };
    default:
      return { ...state };
  }
};
