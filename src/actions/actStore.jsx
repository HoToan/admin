import * as Types from './../constants/ActionType';
import callApi02 from '../Utils/apiCaller02';

export const actFetchStoresRequest = () => {
    return (dispatch) => {
        return callApi02('store/all', 'GET', null).then(res => {
            dispatch(actFetchStores(res.data));
        })
    }
}
export const actFetchStores = (stores) => {
    return {
        type: Types.FETCH_STORES,
        stores
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actDeleteStoresRequest = (store_id) => {
    return (dispatch) => {
        return callApi02(`store/delete/${store_id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteStore(store_id));
        })
    }
}
export const actDeleteStore = (id) => {
    return {
        type: Types.DELETE_STORE,
        id
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actAddStoreRequest = (store) => {
    return (dispatch) => {
        return callApi02('store/register', 'POST', store).then(res => {
            dispatch(actAddStore(res.data))
        });
    }
}
export const actAddStore = (store) => {
    return {
        type: Types.ADD_STORE,
        store
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actGetStoreRequest = (store_id) => {
    return (dispatch) => {
        return callApi02(`store/${store_id}`, 'GET', null).then(res => {
            dispatch(actGetStore(res.data));
        });
    }
}
export const actGetStore = (store) => {
    return {
        type: Types.EDIT_STORE,
        store
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actUpdateStoreRequest = (store) => {
    return (dispatch) => {
        return callApi02(`store/update/${store.store_id}`, 'PUT', store).then(res => {
            console.log(store);
            dispatch(actUpdateStore(res.data));
        });
    }
}
export const actUpdateStore = (store) => {
    return {
        type: Types.UPDATE_STORE,
        store
    }
}