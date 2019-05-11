import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bill extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa không')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { billadmin, index } = this.props;
        // var statusName = category.status ? 'Còn Hàng' : 'Hết Hàng';
        // var statusClass = category.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{billadmin.store_name}</td>
                <td>{billadmin.store_address}</td>
                <td>{billadmin.store_phone}</td>
                <td>{billadmin.sum_cost}</td>
                <td>{billadmin.bank_name}</td>
                <td>{billadmin.bank_id}</td>


            </tr>
        );
    }
}
export default Bill;
