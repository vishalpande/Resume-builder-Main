import { createStore } from "redux";

import rootReducer from "./Redux/Reducers/combinedReducers";


export  const Store = createStore(rootReducer);


