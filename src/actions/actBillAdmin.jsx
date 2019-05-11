import * as Types from './../constants/ActionType';
import callApi02 from '../Utils/apiCaller02';


export const actFetchBillsAdminRequest = () => {
    return (dispatch) => {
        return callApi02(`productbill/byStore`, 'GET', null).then(res => {
            dispatch(actFetchBillsAdmin(res.data));
        })
    }
}
export const actFetchBillsAdmin = (billsadmin) => {
    return {
        type: Types.FETCH_BILLSADMIN,
        billsadmin
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actDeleteBillsAdminRequest = (admin_id) => {
    return (dispatch) => {
        return callApi02(`admin/delete/${admin_id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteBillAdmin(admin_id));
        })
    }
}
export const actDeleteBillAdmin = (id) => {
    return {
        type: Types.DELETE_BILL,
        id
    }
}
