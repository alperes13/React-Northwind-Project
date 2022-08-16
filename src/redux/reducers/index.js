
/* 

    Buradaki amacimiz ise tüm reducers lari bir araya toplayip, store a göndermektir.

*/

import { combineReducers } from "redux";
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryListReducer';

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer
});

export default rootReducer;