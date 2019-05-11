import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StoreItem extends Component {
    onDelete = (store_id) => {
        if (confirm('Bạn chắc chắn muốn xóa không')) { //eslint-disable-line
            this.props.onDelete(store_id);
        }
    }
    render() {
        var { store, index } = this.props;
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{store.store_id}</td>
                <td>{store.email}</td>
                <td>{store.password}</td>
                <td>{store.storeowner_name}</td>
                <td>{store.store_name}</td>
                <td>{store.address}</td>
                <td>{store.phone}</td>
                <td>{store.bank_name}</td>
                <td>{store.bank_id}</td>
               
                <td>
                    <Link to={`/store/${store.store_id}/edit`}
                        className="btn btn-success"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        //xóa sản phẩm dựa trên id
                        onClick={() => this.onDelete(store.store_id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default StoreItem;
