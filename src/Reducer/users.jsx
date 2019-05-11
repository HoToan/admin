import * as Types from '../constants/ActionType';
var initialState = [];

//Tìm index cần xóa
var findIndex = (users, user_id) => {
    var result = -1;
    //Duyệt qua mảng để tìm index
    users.forEach((user, index) => {
        //Nếu có thì trả về index
        if (user.user_id === user_id) {
            result = index;
        }

    });
    return result;
}

const users = (state = initialState, action) => {
    var index = -1;
    var { id, user } = action;

    switch (action.type) {

        case Types.FETCH_USERS:
            state = action.users;
            return [...state];

        case Types.DELETE_USER:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        case Types.ADD_USER:
            state.push(action.user);
            return [...state]

        case Types.UPDATE_USER:
            index = findIndex(state, user.user_id);
            state[index] = user;
            return [...state];
        default: return [...state];
    }
}
export default users;