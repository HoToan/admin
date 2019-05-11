import * as Types from '../constants/ActionType';
import callApi02 from '../Utils/apiCaller02';

export const actFetchReviewsRequest = (sto_id) => {
    return (dispatch) => {
        return callApi02(`review/allByStore/${sto_id}`, 'GET', null).then(res => {
            dispatch(actFetchReviews(res.data));
        })
    }
}
export const actFetchReviews = (reviews) => {
    return {
        type: Types.FETCH_REVIEWS,
        reviews
    }
}

export const actDeleteReviewsRequest = (review_id) => {
    return (dispatch) => {
        return callApi02(`admin/delete/${review_id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteBill(review_id));
        })
    }
}
export const actDeleteBill = (id) => {
    return {
        type: Types.DELETE_BILL,
        id
    }
}

