import { combineReducers } from 'redux';
import products from './products';
import categorys from './categorys';
import admins from './admins';
import itemEditing from './itemEditing';
import stores from './stores';
import users from './users';
import reviews from './reviews';
import bills from './bills';
import billsadmin from './billsadmin';
const appReducers = combineReducers({
    products,
    categorys,
    admins,
    stores,
    users,
    reviews,
    bills,
    billsadmin,
    itemEditing
});
export default appReducers;