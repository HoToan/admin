import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryList from '../../components/admin/Categorys/CategoryList/CategoryList';
import Category from '../../components/admin/Categorys/Category/Category';
import { Link } from 'react-router-dom';
import { actFetchCategorysRequest, actDeleteCategorysRequest } from './../../actions/actCategory';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';


class CategoryListPage extends Component {
    showCategorys(categorys) {
        var result = null;
        if (categorys.length > 0) {
            result = categorys.map((category, index) => {
                return (
                    <Category
                        key={index}
                        category={category}
                        index={index}
                        //truyền props vào Category
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
    componentDidMount() {
        this.props.fetchAllCategorys();
    }
    //Ham goi API và xóa Category
    onDelete = (category_id) => {
        this.props.onDeleteCategory(category_id);
    }

    render() {
        var { categorys } = this.props;
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
                                    Danh Sách Danh Mục
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
                                            <Link to="/Category/add" className="btn btn-info">
                                                Thêm Danh Mục
                                            </Link>
                                            <CategoryList>
                                                {this.showCategorys(categorys)}
                                            </CategoryList>
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

// Lay Category tu store
const mapStateToProps = state => {
    return {
        categorys: state.categorys
    }
};
// Luu Categorys len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategorys: () => {
            dispatch(actFetchCategorysRequest());
        },
        onDeleteCategory: (id) => {
            dispatch(actDeleteCategorysRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryListPage);
