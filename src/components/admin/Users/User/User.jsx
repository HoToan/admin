import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
    onDelete = (user_id) => {
        if (confirm('Bạn chắc chắn muốn xóa không')) { //eslint-disable-line
            this.props.onDelete(user_id);
        }
    }
    render() {
        var { user, index } = this.props;
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.fullname}</td>
                <td>{user.avatar}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
               
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        //xóa sản phẩm dựa trên id
                        onClick={() => this.onDelete(user.user_id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default User;
