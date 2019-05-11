import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddUserRequest, actGetUserRequest, actUpdateUserRequest } from './../../actions/actUser';
import { connect } from 'react-redux';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';

class UserActionPage extends Component {
    constructor(props) {
        super(props);

        var date = new Date();
        var month = date.getMonth() + 1;
        var a = date.getFullYear() + "-" + month + "-" + date.getDate();
        var b = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var c = a + " " + b;

        this.state = {
            user_id: '',
            txtEmail: '',
            txtPassword: '',
            txtFullName: '',
            txtAvatar: '',
            txtPhone: '',
            txtAddress: '',
            txtDatecreate: c,
            txtEnable: ''
        };
    }
    //edit, hiện thị dữ liệu của product cần chỉnh sửa
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var user_id = match.params.id;
            this.props.onEditUser(user_id);

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                user_id: itemEditing.user_id,
                txtEmail: itemEditing.email,
                txtPassword: itemEditing.password,
                txtFullName: itemEditing.fullname,
                txtAvatar: itemEditing.avatar,
                txtPhone: itemEditing.phone,
                txtAddress: itemEditing.address,
                txtDatecreate: itemEditing.date_create,
                txtEnable: itemEditing.enable
            });
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }


    onSave = (e) => {
        //chong load lai trang
        e.preventDefault();
        var data = JSON.parse(sessionStorage.getItem('userData'));
        var { user_id, txtEmail, txtPassword, txtFullName, txtPhone, txtAvatar, txtAddress,
            txtDatecreate, txtEnable } = this.state;
        var { history } = this.props;
        var user = {
            user_id: user_id,
            email: txtEmail,
            password: txtPassword,
            fullname: txtFullName,
            avatar: txtAvatar,
            phone: txtPhone,
            address: txtAddress,
            date_create: txtDatecreate,
            enable: txtEnable
        };

        //cập nhật và thêm mới
        if (user_id) {
            this.props.onUpdateUser(user);
            history.goBack();
        } else {
            this.props.onAddUser(user);
            history.goBack();
        }
    }

    render() {
        //khoi tao cac bien de lay du lieu
        var { txtEmail, txtPassword, txtFullName, txtPhone, txtAddress, txtDatecreate, txtEnable, txtAvatar } = this.state;
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
                                    Data Tables
                             <small>advanced tables</small>
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a><i className="fa fa-dashboard" /> Home</a></li>
                                    <li><a>Tables</a></li>
                                    <li className="active">Data tables</li>
                                </ol>
                            </section>
                            {/* Main content */}
                            <section className="content">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <form onSubmit={this.onSave}>
                                                    <div className="form-group">
                                                        <br />
                                                        <label>Email: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtEmail"
                                                            value={txtEmail}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>PassWord: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtPassword"
                                                            value={txtPassword}
                                                            onChange={this.onChange}    //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <br />
                                                        <label>Full Name: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtFullName"
                                                            value={txtFullName}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <br />
                                                        <label>Avatar: </label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            name="txtAvatar"
                                                            value={txtAvatar}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <br />
                                                        <label>Phone: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtPhone"
                                                            value={txtPhone}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <br />
                                                        <label>Address: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtAddress"
                                                            value={txtAddress}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <br />
                                                        <label>Date Create: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtDatecreate"
                                                            value={txtDatecreate}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <br />
                                                        <label>Enable: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtEnable"
                                                            value={txtEnable}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>

                                                    <Link to="/user-list" className="btn btn-danger mr-10"  >
                                                        Trở lại
                                                    </Link>
                                                    <button type="submit" className="btn btn-primary"  >
                                                        Lưu lại
                                                    </button>
                                                </form>
                                            </div>
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

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: (user) => {
            dispatch(actAddUserRequest(user));
        },
        onEditUser: (user_id) => {
            dispatch(actGetUserRequest(user_id));
        },
        onUpdateUser: (user) => {
            dispatch(actUpdateUserRequest(user));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserActionPage);
