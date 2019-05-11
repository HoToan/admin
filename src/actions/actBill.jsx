import * as Types from './../constants/ActionType';
import callApi02 from '../Utils/apiCaller02';


export const actFetchBillsRequest = (sto_id) => {
    return (dispatch) => {
        return callApi02(`productbill/${sto_id}`, 'GET', null).then(res => {
            dispatch(actFetchBills(res.data));
        })
    }
}
export const actFetchBills = (bills) => {
    return {
        type: Types.FETCH_BILLS,
        bills
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actDeleteBillsRequest = (admin_id) => {
    return (dispatch) => {
        return callApi02(`admin/delete/${admin_id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteBill(admin_id));
        })
    }
}
export const actDeleteBill = (id) => {
    return {
        type: Types.DELETE_BILL,
        id
    }
}
