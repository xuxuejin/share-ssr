import * as Types from "./actionTypes";

export const getHomeData = ({ page = 1, count = 5 }) => {
  return (dispatch, getState, axiosInstance) => {
    // console.log(dispatch);
    // console.log(getState());
    // console.log(axiosInstance);
    return axiosInstance
      .get(`/getJoke?page=${page}&count=${count}&type=video`)
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data.result;
          dispatch({
            type: Types.GET_HOME_DATA,
            payload: resData,
          });
        }
      });
  };
};
