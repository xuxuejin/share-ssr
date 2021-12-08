import * as Type from "./actionTypes";

const initState = {
  detailData: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case Type.GET_DETAIL_DATA:
      return { ...state, detailData: action.payload };
    default:
      return { ...state };
  }
};
