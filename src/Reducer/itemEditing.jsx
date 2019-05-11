import * as Types from './../constants/ActionType';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product
        case Types.EDIT_USER:
            return action.user
        case Types.EDIT_STORE:
            return action.store
        case Types.EDIT_CATEGORY:
            return action.category
        case Types.EDIT_ADMIN:
            return action.admin
        case Types.EDIT_REVIEW:
            return action.review
        case Types.EDIT_BILL:
            return action.bill
        case Types.EDIT_REVIEW:
            return action.review
        default:
            return state;
    }
}
export default itemEditing;