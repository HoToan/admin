import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bill from '../../components/admin/Bills/Bill/Bill';
import { Link } from 'react-router-dom';
import { actFetchBillsRequest, actDeleteBillsRequest } from './../../actions/actBill';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';
import BillList from '../../components/admin/Bills/BillList/BillList';

class BillListPage extends Component {
    showAdmins(bills) {
        var result = null;
        if (bills.length > 0) {
            result = bills.map((bill, index) => {
                return (
                    <Bill
                        key={index}
                        bill={bill}
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
        var sto_id = sessionStorage.getItem('sto_id');
        this.props.fetchAllBills(sto_id);
    }
    //Ham goi API và xóa admin
    onDelete = (id) => {
        this.props.onDeleteAdmin(id);
    }

    render() {
        var { bills } = this.props;
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
                                            <BillList>
                                                {this.showAdmins(bills)}
                                            </BillList>
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
        bills: state.bills
    }
};
// Luu admins len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllBills: (sto_id) => {
            dispatch(actFetchBillsRequest(sto_id));
        },
        onDeleteBill: (id) => {
            dispatch(actDeleteBillsRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BillListPage);
