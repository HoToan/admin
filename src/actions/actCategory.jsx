import * as Types from './../constants/ActionType';
import callApi02 from '../Utils/apiCaller02';

export const actFetchCategorysRequest = () => {
    return (dispatch) => {
        return callApi02('category/byparent/1', 'GET', null).then(res => {
            dispatch(actFetchCategorys(res.data));
        })
    }
}
export const actFetchCategorys = (categorys) => {
    return {
        type: Types.FETCH_CATEGORYS,
        categorys
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actDeleteCategorysRequest = (cat_id) => {
    return (dispatch) => {
        return callApi02(`category/delete/${cat_id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteCategory(cat_id));
        })
    }
}
export const actDeleteCategory = (id) => {
    return {
        type: Types.DELETE_CATEGORY,
        id
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actAddCategoryRequest = (category) => {
    return (dispatch) => {
        return callApi02('category/add', 'POST', category).then(res => {
            dispatch(actAddCategory(res.data))
            console.log(res);
        });
    }
}
export const actAddCategory = (category) => {
    return {
        type: Types.ADD_CATEGORY,
        category
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actGetCategoryRequest = (cat_id) => {
    return (dispatch) => {
        return callApi02(`category/${cat_id}`, 'GET', null).then(res => {
            dispatch(actGetCategory(res.data));
        });
    }
}
export const actGetCategory = (category) => {
    return {
        type: Types.EDIT_CATEGORY,
        category
    }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
export const actUpdateCategoryRequest = (category, token) => {
    return (dispatch) => {
        console.log(category);
        console.log(token);
        return callApi02(`category/update/${category.cat_id}`, 'PUT', category, token).then(res => {
            dispatch(actUpdateCategory(res.data));
        });
    }
}
export const actUpdateCategory = (category) => {
    return {
        type: Types.UPDATE_CATEGORY,
        category
    }
}