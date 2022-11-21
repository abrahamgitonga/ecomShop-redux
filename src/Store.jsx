import { legacy_createStore } from "redux";
import rootRed from './redux/reducers/Main';

const store = legacy_createStore(
    rootRed
)

export default store;