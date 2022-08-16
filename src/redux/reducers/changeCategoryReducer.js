
/* 



*/


import initialState from "../reducers/initialState";

import * as actionTypes from "../actions/actionTypes";

/* 

    buradaki fonksiyonda aksiyonun 2 parametresinde, 1.si state in kendisi, 2. si ise aksiyondur.
Fakat biz state değerini merkezi bir yerde tuttuğumuz için bunu import etmeliyiz. 

*/

export default function changeCategoryReducer(state = initialState.currentCategory, action) {

    /* 
    
        eğer ki parametre ile gelen aksiyonun type i CHANGE_CATEGORY ise, bu gelen action un payload i return olamalı.


        reducers burada bize bir state döndürüyor eğer ki bir aksiyon kullanilmamis ise, bize var olan state i döndürmeli
    
    */

    switch (action.type) {

        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;

    };

};