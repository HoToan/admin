import * as Types from './../constants/ActionType';
var initialState = [];

//Tìm index cần xóa
var findIndex = (categorys, cat_id) => {
    var result = -1;
    //Duyệt qua mảng để tìm index
    categorys.forEach((category, index) => {
        //Nếu có thì trả về index
        if (category.cat_id === cat_id) {
            result = index;
        }

    });
    return result;
}

const categorys = (state = initialState, action) => {
    var index = -1;
    var { id, category } = action;

    switch (action.type) {

        case Types.FETCH_CATEGORYS:
            state = action.categorys;
            return [...state];

        case Types.DELETE_CATEGORY:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        case Types.ADD_CATEGORY:
            state.push(action.category);
            return [...state]

        case Types.UPDATE_CATEGORY:
            index = findIndex(state, category.cat_id);
            state[index] = category;
            return [...state];
        default: return [...state];
    }
}
export default categorys;