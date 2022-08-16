/* 

    actionTypes bizim için aksiyon tiplerini bulunduruyor ve magic string ten kurtulmak için vardır.

    bizim projemizde çeşitli state bilgilerine ihtiyacımız var. örneğin bir category e tiklandiğinda bu category
deki ürünlerin product için ortaya çıkması. State yönetilmesi gereken bir datadir ve bunu bir çok componentte
kullanabiliriz.

*/


export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const GET_CATEGORIES_SUCCESS= "GET_CATEGORIES_SUCCESS";

