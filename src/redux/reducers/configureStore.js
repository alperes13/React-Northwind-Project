/* 

    Burada store u oluşturacağız ve gerçek ana index.js de kullanmak için export edeceğiz.

*/


import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}