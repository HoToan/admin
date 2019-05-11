import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductActionPage1 from './pages/ProductActionPage/ProductActionPage1';
import CategoryListPage from './pages/CategoryListPage/CategoryListPage';
import CategoryActionPage from './pages/CategoryActionPage/CategoryActionPage';
import AdminListPage from './pages/AdminListPage/AdminListPage';
import AdminActionPage from './pages/AdminActionPage/AdminActionPage';
import StoreListPage from './pages/StoreListPage/StoreListPage';
import StoreActionPage from './pages/StoreActionPage/StoreActionPage';
import UserActionPage from './pages/UserActionPage/UserActionPage';
import UserListPage from './pages/UserListPage/UserListPage';
import LoginPageAmin from './pages/LoginPageAmin/LoginPageAdmin';
import LoginPageStore from './pages/LoginPageStore/LoginPageStore';
import ReviewListPage from './pages/ReviewListPage/ReviewListPage';
import BillListPage from './pages/BillListPage/BillListPage';
import BillListAdminPage from './pages/BillListAdminPage/BillListAdminPage';
const routes = [


    {
        path: '/',
        exact: true,
        main: () => <LoginPageStore />
    },
    {
        path: '/admin',
        exact: false,
        main: () => <LoginPageAmin />
    },

    {
        path: '/bill-list',
        exact: false,
        main: () => <BillListPage />
    },
    {
        path: '/bill-list-admin',
        exact: false,
        main: () => <BillListAdminPage />
    },


    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    {
        path: '/home',
        exact: false,
        main: () => <HomePage />
    },
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    {
        path: '/review-list',
        exact: false,
        main: () => <ReviewListPage />
    },
     //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },

    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: '/product/add1',
        exact: false,
        main: ({ match, history }) => <ProductActionPage1 match={match} history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    {
        path: '/category-list',
        exact: false,
        main: () => <CategoryListPage />
    },
    {
        path: '/category/add',
        exact: false,
        main: ({ history }) => <CategoryActionPage history={history} />
    },
    {
        path: '/category/:id/edit',
        exact: false,
        main: ({ match, history }) => <CategoryActionPage match={match} history={history} />
    },

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    {
        path: '/admin-list',
        exact: false,
        main: () => <AdminListPage />
    },
    {
        path: '/admin/add',
        exact: false,
        main: ({ history }) => <AdminActionPage history={history} />
    },
    {
        path: '/admin/:id/edit',
        exact: false,
        main: ({ match, history }) => <AdminActionPage match={match} history={history} />
    },

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    {
        path: '/store-list',
        exact: false,
        main: () => <StoreListPage />
    },
    {
        path: '/store/add',
        exact: false,
        main: ({ history }) => <StoreActionPage history={history} />
    },
    {
        path: '/store/:id/edit',
        exact: false,
        main: ({ match, history }) => <StoreActionPage match={match} history={history} />
    },

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    {
        path: '/user-list',
        exact: false,
        main: () => <UserListPage />
    },
    {
        path: '/user/add',
        exact: false,
        main: ({ history }) => <UserActionPage history={history} />
    },
    {
        path: '/user/:id/edit',
        exact: false,
        main: ({ match, history }) => <UserActionPage match={match} history={history} />
    },
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }


]
export default routes;