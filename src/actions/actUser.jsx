import * as Types from './../constants/ActionType';
import callApi02 from '../Utils/apiCaller02';

export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi02('user/all', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data));
        })
    }
}
export const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actGetUserRequest = (user_id) => {
    return (dispatch) => {
        return callApi02(`user/${user_id}`, 'GET', null).then(res => {
            //luu vao store
            dispatch(actGetUser(res.data));
        });
    }
}
export const actGetUser = (user) => {
    return {
        type: Types.EDIT_USER,
        user
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actAddUserRequest = (user) => {
    console.log(user);
    return (dispatch) => {
        return callApi02('user/register', 'POST', user).then(res => {
            dispatch(actAddUser(res.data))
        });
    }
}
export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

export const actUpdateUserRequest = (user) => {
    return (dispatch) => {
        return callApi02(`user/update/${user.user_id}`, 'PUT', user).then(res => {
            dispatch(actUpdateUser(res.data));
        });
    }
}
export const actUpdateUser = (user) => {
    return {
        type: Types.UPDATE_USER,
        user
    }
}

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

export const actDeleteUsersRequest = (user_id) => {
    return (dispatch) => {
        console.log(user_id);
        return callApi02(`user/delete/${user_id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteUser(user_id));
        })
    }
}

export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id
    }
}
