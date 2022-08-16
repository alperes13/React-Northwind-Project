
/* 

    actionlar ile ilgili asil dosya bizim için burasidir. Bu dosyanin içerisinde category e ati actionlari
tutacağız.

*/


import * as actionTypes from "./actionTypes";

/* 

    Bu fonksiyon bir kategoriye tıkladığımızda oluşacak, parametre olarak bizden bir kategori alacak ve
ve CHANGE_CATEGORY isminde calisacak, payload i ise parametreden gelen kategori olacak

*/

export function changeCategory(category) {
    return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

/* 

    bu fonksiyonun amacı kategorileri listelemek olacak. bizim veritabanına bağlanma gibi asenkron operasyonları 
kullanmamiz için karşımıza Redux Thunk denilen bir yapı çıkıyor.

    bu fonksiyon aslinda bir operasyon dondurecek
*/

export function getCategoriesSuccess(categories){
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategory() {
    return function (dispatch) {
        let url = "http://localhost:3000/categories";

        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getCategoriesSuccess(result)))

    }
}