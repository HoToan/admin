import * as Types from '../constants/ActionType';
var initialState = [];

var findIndex = (reviews, review_id) => {
    var result = -1;
    //Duyệt qua mảng để tìm index
    reviews.forEach((review, index) => {
        //Nếu có thì trả về index
        if (review.review_id === review_id) {
            result = index;
        }

    });
    return result;
}
const reviews = (state = initialState, action) => {
    var index = -1;
    var { id, review } = action;

    switch (action.type) {
        case Types.FETCH_REVIEWS:
            state = action.reviews;
            return [...state];

        case Types.DELETE_REVIEW:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state]

        case Types.ADD_REVIEW:
            state.push(action.review);
            return [...state]

        case Types.UPDATE_REVIEW:
            index = findIndex(state, review.store_id);
            state[index] = review;
            return [...state];
        default: return [...state];

       
    }
}
export default reviews;