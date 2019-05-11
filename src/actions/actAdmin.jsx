import * as Types from './../constants/ActionType';
import callApi02 from '../Utils/apiCaller02';


export const actFetchAdminsRequest = (token) => {
    return (dispatch) => {
        return callApi02('admin/all', 'GET', null, token).then(res => {
            dispatch(actFetchAdmins(res.data));
        })
    }
}
export const actFetchAdmins = (admins) => {
    return {
        type: Types.FETCH_ADMINS,
        admins
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actDeleteAdminsRequest = (admin_id) => {
    return (dispatch) => {
        return callApi02(`admin/delete/${admin_id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteAdmin(admin_id));
        })
    }
}
export const actDeleteAdmin = (id) => {
    return {
        type: Types.DELETE_ADMIN,
        id
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actAddAdminRequest = (admin) => {
    return (dispatch) => {
        console.log(admin);
        return callApi02('admin/add', 'POST', admin).then(res => {
            dispatch(actAddAdmin(res.data))
        });
    }
}
export const actAddAdmin = (admin) => {
    return {
        type: Types.ADD_ADMIN,
        admin
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actGetAdminRequest = (admin_id) => {
    return (dispatch) => {
        return callApi02(`admin/${admin_id}`, 'GET', null).then(res => {
            dispatch(actGetAdmin(res.data));
        });
    }
}
export const actGetAdmin = (admin) => {
    return {
        type: Types.EDIT_ADMIN,
        admin
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actUpdateAdminRequest = (admin) => {
    return (dispatch) => {
        return callApi02(`admin/update/${admin.admin_id}`, 'PUT', admin).then(res => {
            dispatch(actUpdateAdmin(res.data));
        });
    }
}
export const actUpdateAdmin = (admin) => {
    return {
        type: Types.UPDATE_ADMIN,
        admin
    }
}