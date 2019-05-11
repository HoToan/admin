import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreList from '../../components/admin/Stores/StoreList/StoreList';
import Store from '../../components/admin/Stores/Store/Store';
import { Link } from 'react-router-dom';
import { actFetchStoresRequest, actDeleteStoresRequest } from './../../actions/actStore';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';

class StoreListPage extends Component {
    showstores(stores) {
        var result = null;
        if (stores.length > 0) {
            result = stores.map((store, index) => {
                return (
                    <Store
                        key={index}
                        store={store}
                        index={index}
                        //truyền props vào store
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
    componentDidMount() {
        this.props.fetchAllStores();
    }
    //Ham goi API và xóa store
    onDelete = (store_id) => {
        this.props.onDeleteStore(store_id);
    }

    render() {
        var { stores } = this.props;
        if (sessionStorage.getItem('role') === 'store') {
            var menu = <MenuStore />;
        }
        else {
            menu = <MenuAdmin />
        }
        return (
            <div>
                <Header />
                {menu}
                <div className="wrapper">
                    <div className="wrapper">
                        <div className="content-wrapper">
                            {/* Content Header (Page header) */}
                            <section className="content-header">
                                <h1>
                                    Danh Sách Store
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                                    <li><a href="#">Tables</a></li>
                                    <li className="active">Data tables</li>
                                </ol>
                            </section>
                            {/* Main content */}
                            <section className="content">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <br />
                                            <Link to="/store/add" className="btn btn-info">
                                                Thêm Store
                                            </Link>
                                            <StoreList>
                                                {this.showstores(stores)}
                                            </StoreList>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Lay store tu store
const mapStateToProps = state => {
    return {
        stores: state.stores
    }
};
// Luu stores len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllStores: () => {
            dispatch(actFetchStoresRequest());
        },
        onDeleteStore: (store_id) => {
            dispatch(actDeleteStoresRequest(store_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreListPage);
