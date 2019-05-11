import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/actProducts';
import { connect } from 'react-redux';
import callApi02 from '../../Utils/apiCaller02';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pro_id: '',
            txtName: '',
            txtCatid: '',
            txtStoreid: ''
        };
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
        var token = sessionStorage.getItem("token");
        var { txtName, txtCatid } = this.state;
        
        callApi02('admin/product/add', 'POST', {
            pro_name: txtName,
            cat_id: txtCatid,
            store_id: sessionStorage.getItem("sto_id")
        }, token).then(res => {
            console.log(res.data);
        })
    }
    render() {
       
        var { txtName, txtCatid } = this.state;
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
                                                        <label>Tên Sản Phẩm: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtName"
                                                            value={txtName}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <br />
                                                        <label>Cat_id: </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="txtCatid"
                                                            value={txtCatid}
                                                            onChange={this.onChange}     //lay du lieu
                                                        />
                                                    </div>
                                                    <Link to="/product-list" className="btn btn-danger"  >
                                                        Trở lại
                                                    </Link>
                                                    &nbsp;
                                                    <button type="submit" className="btn btn-danger"  >
                                                        Lưu lại
                                                    </button>
                                                    &nbsp;
                                                    <Link to="/product/add1" className="btn btn-primary"
                                                    >
                                                        Tiếp tục
                                                    </Link>
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
        itemEditing: state.itemEditing,
        categorys: state.categorys
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
