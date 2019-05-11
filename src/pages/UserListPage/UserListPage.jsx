import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchUsersRequest, actDeleteUsersRequest } from './../../actions/actUser';
import User from '../../components/admin/Users/User/User';
import UsersList from '../../components/admin/Users/UsersList/UsersList';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';

class UserListPage extends Component {
    showUsers(users) {
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <User
                        key={index}
                        user={user}
                        index={index}
                        //truyền props vào Useritem
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    //Ham goi API và xóa product
    onDelete = (user_id) => {
        this.props.onDeleteUser(user_id);
    }

    render() {
        //Lay Users tu store
        var { users } = this.props;
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
                                    Danh Sách Users
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
                                            <UsersList>
                                                {this.showUsers(users)}
                                            </UsersList>
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

// Lay product tu store
const mapStateToProps = state => {
    return {
        users: state.users
    }
};
// Luu products len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers: () => {
            dispatch(actFetchUsersRequest());
        },
        onDeleteUser: (user_id) => {
            dispatch(actDeleteUsersRequest(user_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
