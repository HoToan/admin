import * as Types from './../constants/ActionType';
import callApi from './../Utils/apiCaller';
import callApi02 from './../Utils/apiCaller02';


export const astFetchProductsRequest = (sto_id, token) => {
    return (dispatch) => {
        return callApi02(`admin/product/store/${sto_id}`, 'GET', null, token).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actDeleteProductsRequest = (id, token) => {
    return (dispatch) => {
        return callApi(`admin/product/delete/${id}`, 'DELETE', null,token).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        console.log(product);
        return callApi02('product/add/1', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data))
        });
    }
}
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actGetProductRequest = (store_id) => {
    return (dispatch) => {
        return callApi02(`product/latest/${store_id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
            sessionStorage.setItem("pro_id", res.data.pro_id);
        });
    }
}
export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actUpdateProductRequest = (product, pro_id, store_id, token) => {
    return (dispatch) => {
        return callApi02(`admin/product/add/${store_id}/${pro_id}`, 'PUT', product, token).then(res => {
            dispatch(actUpdateProduct(res.data));
            console.log("thanh cong");
        });
    }
}
export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}