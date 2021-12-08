import * as Types from "./actionTypes";

export const getNewsData = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/getWangYiNews`).then((res) => {
      if (res.status === 200) {
        const resData = res.data.result;
        dispatch({
          type: Types.GET_NEWS_DATA,
          payload: resData,
        });
      }
    });
  };
};
