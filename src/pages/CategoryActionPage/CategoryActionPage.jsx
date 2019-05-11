import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddCategoryRequest, actGetCategoryRequest, actUpdateCategoryRequest } from './../../actions/actCategory';
import { connect } from 'react-redux';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';

class CategoryActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat_id: '',
            txtName: '',
            txtParent: ''
        };
    }
    //edit, hiện thị dữ liệu của Category cần chỉnh sửa
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var cat_id = match.params.id;
            this.props.onEditCategory(cat_id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                cat_id: itemEditing.cat_id,
                txtName: itemEditing.cat_name,
                txtParent: itemEditing.parent_id
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
        var { cat_id, txtName } = this.state;
        var { history } = this.props;
        var Category = {
            cat_id: cat_id,
            cat_name: txtName,
            parent_id: 1
        };
        //cập nhật
        var token = sessionStorage.getItem("token");
        if (cat_id) {
            this.props.onUpdateCategory(Category, token);
            history.goBack();
            //thêm mới
        } else {
            this.props.onAddCategory(Category);
            history.goBack();
        }
    }

    render() {
        var { txtName } = this.state;
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
                                                        <label>Tên Danh Mục: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtName"
                                                            value={txtName}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <Link to="/Category-list" className="btn btn-danger mr-10"  >
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
        onAddCategory: (category) => {
            dispatch(actAddCategoryRequest(category));
        },
        onEditCategory: (cat_id) => {
            dispatch(actGetCategoryRequest(cat_id));
        },
        onUpdateCategory: (category, token) => {
            dispatch(actUpdateCategoryRequest(category, token));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryActionPage);
