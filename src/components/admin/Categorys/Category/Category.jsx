import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
    onDelete = (cat_id) => {
        if (confirm('Bạn chắc chắn muốn xóa không')) { //eslint-disable-line
            this.props.onDelete(cat_id);
        }
    }
    render() {
        var { category, index } = this.props;
        // var statusName = category.status ? 'Còn Hàng' : 'Hết Hàng';
        // var statusClass = category.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{category.cat_name}</td>
                
                <td>
                    <Link to={`/category/${category.cat_id}/edit`}
                        className="btn btn-success"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        //xóa sản phẩm dựa trên id
                        onClick={() => this.onDelete(category.cat_id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default Category;
