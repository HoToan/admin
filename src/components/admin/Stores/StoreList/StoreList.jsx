import React, { Component } from 'react';
class StoreList extends Component {
    render() {
        return (
            <div className="box-body">
                <table id="example2" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Store_id</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Storeowner_name</th>
                            <th>Store_name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Bank_name</th>
                            <th>Bank_id</th>
                            <th>Tùy Chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default StoreList;
