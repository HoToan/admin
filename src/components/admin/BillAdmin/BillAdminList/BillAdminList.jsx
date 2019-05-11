import React, { Component } from 'react';
class BillList extends Component {
    render() {
        return (
            <div className="box-body">
                <table id="example2" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Shop</th>
                            <th>Địa Chỉ</th>
                            <th>Số Điện Thoại</th>
                            <th>Đơn Giá</th>
                            <th>Bạnk</th>
                            <th>Số Tài Khoản</th>
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
export default BillList;
