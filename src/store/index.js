import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./resucers";
import clientAxios from "@/client/request";
import serverAxios from "@/server/request";

export const getServerStore = (req) => {
  // 服务端接收 req
  return createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  );
};

export const getClientStore = () => {
  // 注水脱水的关键
  // 服务端注入的水，客户端脱水
  const initState = window.context.state;

  return createStore(
    reducers,
    initState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
