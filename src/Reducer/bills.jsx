import * as Types from '../constants/ActionType';
var initialState = [];

//Tìm index cần xóa
var findIndex = (bills, id) => {
    var result = -1;
    //Duyệt qua mảng để tìm index
    bills.forEach((bill, index) => {
        //Nếu có thì trả về index
        if (bill.id === id) {
            result = index;
        }

    });
    return result;
}

const bills = (state = initialState, action) => {
    var index = -1;
    var { id, bill } = action;

    switch (action.type) {

        case Types.FETCH_BILLS:
            state = action.bills;
            return [...state];

        case Types.DELETE_BILL:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        case Types.ADD_BILL:
            state.push(action.bill);
            return [...state]

        case Types.UPDATE_BILL:
            index = findIndex(state, bill.admin_id);
            state[index] = bill;
            return [...state];
        default: return [...state];
    }
}
export default bills;