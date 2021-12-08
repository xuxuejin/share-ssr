import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./resucers";
import clientAxios from "@/client/request";
import serverAxios from "@/server/request";

export const getServerStore = (req) => {
  return createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  );
};

export const getClientStore = () => {
  const initState = window.context.state;

  return createStore(
    reducers,
    initState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
