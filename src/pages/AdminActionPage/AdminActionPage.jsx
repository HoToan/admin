import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddAdminRequest, actGetAdminRequest, actUpdateAdminRequest } from './../../actions/actAdmin';
import { connect } from 'react-redux';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';


class AdminActionPage extends Component {
    constructor(props) {
        super(props);
        //Lay ngày tháng năm và set cho txtDatecreate
        var date = new Date();
        var month = date.getMonth() + 1;
        var a = date.getFullYear() + "-" + month + "-" + date.getDate();
        var b = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var c = a + " " + b;
        this.state = {
            admin_id: '',
            txtUserName: '',
            txtPassWord: '',
            txtFullName: '',
            txtDatecreate: c,
            txtRole: ''
        };
    }
    //edit, hiện thị dữ liệu của admin cần chỉnh sửa
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var admin_id = match.params.id;
            this.props.onEditAdmin(admin_id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                admin_id: itemEditing.admin_id,
                txtUserName: itemEditing.username,
                txtPassWord: itemEditing.password,
                txtFullName: itemEditing.fullname,
                txtDatecreate: itemEditing.date_create,
                txtRole: itemEditing.role
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
        var { admin_id, txtUserName, txtPassWord, txtFullName, txtDatecreate, txtRole } = this.state;
        var { history } = this.props;
        var admin = {
            admin_id: admin_id,
            username: txtUserName,
            password: txtPassWord,
            fullname: txtFullName,
            date_create: txtDatecreate,
            role: txtRole
        };
        //cập nhật
        if (admin_id) {
            this.props.onUpdateAdmin(admin);
            history.goBack();
            //thêm mới
        } else {
            this.props.onAddAdmin(admin);
            history.goBack();
        }
    }

    render() {
        var data = JSON.parse(sessionStorage.getItem('userData'));
        //khoi tao cac bien de lay du lieu
        var { txtUserName, txtPassWord, txtFullName, txtDatecreate, txtRole } = this.state;
        if (data.txtemail === 'admin') {
            var menu = <MenuAdmin data={data} />
        }
        else {
            menu = <MenuStore data={data} />
        }
        return (
            <div>
                <Header data={data} />
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
                                                        <label>Username: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtUserName"
                                                            value={txtUserName}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtPassWord"
                                                            value={txtPassWord}
                                                            onChange={this.onChange}    //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Fullname: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtFullName"
                                                            value={txtFullName}
                                                            onChange={this.onChange}    //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ngày Tạo: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtDatecreate"
                                                            value={txtDatecreate}
                                                            onChange={this.onChange}    //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Role: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtRole"
                                                            value={txtRole}
                                                            onChange={this.onChange}    //lay du lieu
                                                        />
                                                    </div>

                                                    <Link to="/admin-list" className="btn btn-danger mr-10"  >
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
        onAddAdmin: (admin) => {
            dispatch(actAddAdminRequest(admin));
        },
        onEditAdmin: (admin_id) => {
            dispatch(actGetAdminRequest(admin_id));
        },
        onUpdateAdmin: (admin) => {
            dispatch(actUpdateAdminRequest(admin));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminActionPage);
