import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Admin extends Component {
    onDelete = (admin_id) => {
        if (confirm('Bạn chắc chắn muốn xóa không')) { //eslint-disable-line
            this.props.onDelete(admin_id);
        }
    }
    render() {
        var { admin, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{admin.username}</td>
                <td>{admin.fullname}</td>
                <td>
                    <Link to={`/admin/${admin.admin_id}/edit`}
                        className="btn btn-success"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        //xóa sản phẩm dựa trên id
                        onClick={() => this.onDelete(admin.admin_id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default Admin;
