import * as Types from "./actionTypes";

export const getDetailData = (id) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/getSingleJoke?sid=${id}`).then((res) => {
      if (res.status === 200) {
        const resData = res.data.result;
        dispatch({
          type: Types.GET_DETAIL_DATA,
          payload: resData,
        });
      }
    });
  };
};
