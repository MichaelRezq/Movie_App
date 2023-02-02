import { combineReducers } from "redux";
import FavReducer from "./FavoritesReducer";
import RemoveRed from "./RemoveFav";

export default combineReducers({
  Rfavorites: FavReducer,
  RMreducer: RemoveRed,
});
