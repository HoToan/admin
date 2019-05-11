import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminList from '../../components/admin/Admins/AdminList/AdminList';
import Admin from '../../components/admin/Admins/Admin/Admin';
import { Link } from 'react-router-dom';
import { actFetchAdminsRequest, actDeleteAdminsRequest } from './../../actions/actAdmin';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';

class AdminListPage extends Component {
    showAdmins(admins) {
        var result = null;
        if (admins.length > 0) {
            result = admins.map((admin, index) => {
                return (
                    <Admin
                        key={index}
                        admin={admin}
                        index={index}
                        //truyền props vào admin
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
    componentDidMount() {
        var token = sessionStorage.getItem('token');
        this.props.fetchAllAdmins(token);
    }
    //Ham goi API và xóa admin
    onDelete = (admin_id) => {
        this.props.onDeleteAdmin(admin_id);
    }

    render() {
        var { admins } = this.props;
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
                                    Danh Sách Admin
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
                                            <Link to="/admin/add" className="btn btn-info">
                                                Thêm Admin
                                            </Link>
                                            <AdminList>
                                                {this.showAdmins(admins)}
                                            </AdminList>
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

// Lay admin tu store
const mapStateToProps = state => {
    return {
        admins: state.admins
    }
};
// Luu admins len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllAdmins: (token) => {
            dispatch(actFetchAdminsRequest(token));
        },
        onDeleteAdmin: (admin_id) => {
            dispatch(actDeleteAdminsRequest(admin_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminListPage);
