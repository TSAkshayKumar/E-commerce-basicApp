import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

// to install redux devTools we use::::::         install redux-devtools-extension
const store = createStore(rootReducer, composeWithDevTools());

export default store;






