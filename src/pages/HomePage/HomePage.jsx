import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';


class HomePage extends Component {
    render() {
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

// nhan product tu store
const mapStateToProps = state => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps, null)(HomePage);
