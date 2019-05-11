import React, { Component } from 'react';

class Bill extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa không')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { bill, index } = this.props;
        // var statusName = category.status ? 'Còn Hàng' : 'Hết Hàng';
        // var statusClass = category.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{bill.bill_number}</td>
                <td>{bill.product.pro_name}</td>
                <td>{bill.quantity}</td>
                <td>{bill.quantity * bill.product.regular_price}</td>
                <td>{bill.product.regular_price}</td>
                <td>{bill.status}</td>


            </tr>
        );
    }
}
export default Bill;
