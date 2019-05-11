import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
class MenuMod extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p> {sessionStorage.getItem('txtemail')} </p>
                            <a><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu">
                        <li>
                            <NavLink to="/home">
                                <i className="fa fa-dashboard" /> <span>Trang chủ</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </NavLink>
                        </li>
                        <li className="active treeview">
                            <a>
                                <i className="fa fa-edit" /> <span>Quản Lí Sản Phẩm</span> <i className="fa fa-angle-left pull-right" />
                            </a>
                            <ul className="treeview-menu">
                                <li className="active">
                                    <NavLink to="/product-list">
                                        <i className="fa fa-circle-o" />Tất cả sản phẩm
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-list">
                                        <i className="fa fa-circle-o" />Sản phẩm hot
                                    </NavLink>
                                </li>
                                <li >
                                    <NavLink to="/product-list">
                                        <i className="fa fa-circle-o" />Sản phẩm sale
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/category-list">
                                <i className="fa fa-pie-chart" /> <span>Quản Lí danh mục</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bill-list">
                                <i className="fa fa-pie-chart" /> <span>Quản Lí Thanh Toán</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}
export default MenuMod;
