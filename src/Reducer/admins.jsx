import * as Types from './../constants/ActionType';
var initialState = [];

//Tìm index cần xóa
var findIndex = (admins, admin_id) => {
    var result = -1;
    //Duyệt qua mảng để tìm index
    admins.forEach((admin, index) => {
        //Nếu có thì trả về index
        if (admin.admin_id === admin_id) {
            result = index;
        }

    });
    return result;
}

const admins = (state = initialState, action) => {
    var index = -1;
    var { id, admin } = action;

    switch (action.type) {

        case Types.FETCH_ADMINS:
            state = action.admins;
            return [...state];

        case Types.DELETE_ADMIN:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        case Types.ADD_ADMIN:
            state.push(action.admin);
            return [...state]

        case Types.UPDATE_ADMIN:
            index = findIndex(state, admin.admin_id);
            state[index] = admin;
            return [...state];
        default: return [...state];
    }
}
export default admins;