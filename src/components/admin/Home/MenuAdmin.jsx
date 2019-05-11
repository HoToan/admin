import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
class MeunuAdmin extends Component {
    render() {
        var {data} = this.props
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
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
                            <NavLink to="/admin-list">
                                <i className="fa fa-th" /> <span>Quản Lí Admin</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/store-list">
                                <i className="fa fa-pie-chart" /> <span>Quản Lí Store</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/user-list">
                                <i className="fa fa fa-laptop" /> <span>Quản Lí User</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/category-list">
                                <i className="fa fa-table" /> <span>Quản Lí Danh mục</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bill-list-admin">
                                <i className="fa fa-table" /> <span>Thống Kê</span>
                                <small className="label pull-right bg-yellow">12</small>
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}
export default MeunuAdmin;
