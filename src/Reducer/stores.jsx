import * as Types from './../constants/ActionType';
var initialState = [];

//Tìm index cần xóa
var findIndex = (stores, store_id) => {
    var result = -1;
    //Duyệt qua mảng để tìm index
    stores.forEach((store, index) => {
        //Nếu có thì trả về index
        if (store.store_id === store_id) {
            result = index;
        }

    });
    return result;
}

const stores = (state = initialState, action) => {
    var index = -1;
    var { id, store } = action;

    switch (action.type) {

        case Types.FETCH_STORES:
            state = action.stores;
            return [...state];

        case Types.DELETE_STORE:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        case Types.ADD_STORE:
            state.push(action.store);
            return [...state]

        case Types.UPDATE_STORE:
            index = findIndex(state, store.store_id);
            state[index] = store;
            return [...state];
        default: return [...state];
    }
}
export default stores;