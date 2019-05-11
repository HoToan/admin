import * as Types from '../constants/ActionType';
var initialState = [];

//Tìm index cần xóa
var findIndex = (products, pro_id) => {
    var result = -1;
    //Duyệt qua mảng để tìm index
    products.forEach((product, index) => {
        //Nếu có thì trả về index
        if (product.pro_id === pro_id) {
            result = index;
        }

    });
    return result;
}

const products = (state = initialState, action) => {
    var index = -1;
    var { id, product } = action;

    switch (action.type) {

        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];

        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]

        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.pro_id);
            state[index] = product;
            return [...state];
        default: return [...state];
    }
}
export default products;