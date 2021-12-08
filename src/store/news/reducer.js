import * as Type from "./actionTypes";

const initState = {
  newsData: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case Type.GET_NEWS_DATA:
      return { ...state, newsData: action.payload };
    default:
      return { ...state };
  }
};
