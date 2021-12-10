import * as Type from "./actionTypes";

const initState = {
  homeData: [],
  localData: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case Type.GET_HOME_DATA:
      return { ...state, homeData: action.payload };
    case Type.GET_LOCAL_DATA:
      return { ...state, localData: action.payload };
    default:
      return { ...state };
  }
};
