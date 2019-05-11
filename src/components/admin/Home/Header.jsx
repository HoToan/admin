import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtemail: '',
            txtpassword: '',
            redirect: false
        };
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        sessionStorage.setItem("token", '');
        sessionStorage.setItem("txtemail", '');
        sessionStorage.setItem("role", '');
        sessionStorage.clear();
        this.setState({ redirect: true })
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/'} />)
        }

        return (
            <header className="main-header">
                <Link to="/home" className="logo">
                    <span className="logo-lg"><b>Trang Quản Lí</b></span>
                </Link>
                <nav className="navbar navbar-static-top">
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a className="dropdown-toggle" data-toggle="dropdown">
                                    <span className="hidden-xs">Xin chào, {sessionStorage.getItem('txtemail')} </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-footer">
                                        <div className="pull-right">
                                            <button type='button' className='button' onClick={this.logout}>
                                                Đăng xuất
                                        </button>

                                            {/* <Link to="/" className="btn btn-primary">
                                            Đăng xuất
                                        </Link> */}
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
