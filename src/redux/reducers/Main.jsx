import { combineReducers } from "redux";
import { cartReducer } from "./Reducer";

const rootRed = combineReducers({
    cartReducer
});

export default rootRed;