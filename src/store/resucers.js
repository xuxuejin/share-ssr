import { combineReducers } from "redux";
import HomeReducer from "./home/reducer.js";
import DetailReducer from "./detail/reducer.js";
import NewsReducer from "./news/reducer.js";

export default combineReducers({
  home: HomeReducer,
  news: NewsReducer,
  detail: DetailReducer,
});
