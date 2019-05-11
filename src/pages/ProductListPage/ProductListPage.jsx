import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../components/admin/Products/ProductItem/ProductItem';
import ProductList from '../../components/admin/Products/ProductList/ProductList';
import { Link } from 'react-router-dom';
import { astFetchProductsRequest, actDeleteProductsRequest } from './../../actions/actProducts';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';
class ProductListPage extends Component {
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        //truyền props vào ProductItem
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
    componentDidMount() {
        var token = sessionStorage.getItem("token");
        var sto_id = sessionStorage.getItem("sto_id");
        console.log(sessionStorage.getItem("sto_id"));


        this.props.fetchAllProducts(sto_id, token);
    }
    //Ham goi API và xóa product

    onDelete = (pro_id, token) => {
        token = sessionStorage.getItem("token");
        this.props.onDeleteProduct(pro_id, token);
    }
    render() {
        var { products } = this.props;
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
                                    Danh Sách Products
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
                                            <Link to="/product/add" className="btn btn-info">
                                                Thêm sản phẩm
                                            </Link>
                                            <ProductList>
                                                {this.showProducts(products)}
                                            </ProductList>
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
        products: state.products
    }
};
// Luu products len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: (sto_id, token) => {
            dispatch(astFetchProductsRequest(sto_id, token));
        },
        onDeleteProduct: (id, token) => {
            dispatch(actDeleteProductsRequest(id, token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
