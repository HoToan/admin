import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchBillsAdminRequest, actDeleteBillsAdminRequest } from './../../actions/actBillAdmin';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';
import BillAdminList from '../../components/admin/BillAdmin/BillAdminList/BillAdminList';
import BillAdmin from '../../components/admin/BillAdmin/BillAdmin/BillAdmin';

class BillListAdminPage extends Component {
    showBillsAdmin(billsadmin) {
        var result = null;
        if (billsadmin.length > 0) {
            result = billsadmin.map((billadmin, index) => {
                return (
                    <BillAdmin
                        key={index}
                        billadmin={billadmin}
                        index={index}
                        //truyền props vào admin
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
    componentDidMount() {
        this.props.fetchAllBillsAdmin();
    }
    //Ham goi API và xóa admin
    onDelete = (id) => {
        this.props.onDeleteAdmin(id);
    }

    render() {
        var { billsadmin } = this.props;
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
                                    Danh Sách Thanh Toán
                                </h1>
                            </section>
                            {/* Main content */}
                            <section className="content">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <br />
                                            <BillAdminList>
                                                {this.showBillsAdmin(billsadmin)}
                                            </BillAdminList>
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

// Lay admin tu store
const mapStateToProps = state => {
    return {
        billsadmin: state.billsadmin
    }
};
// Luu admins len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllBillsAdmin: () => {
            dispatch(actFetchBillsAdminRequest());
        },
        onDeleteBill: (id) => {
            dispatch(actDeleteBillsAdminRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BillListAdminPage);
