import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa không')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;

        var statusName = product.active ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.active ? 'warning' : 'default';

        var statusHot = product.hot_product ? 'HOT' : '';
        var statusClass1 = product.hot_product ? 'warning' : 'default';

        var statusSale = product.sale_product ? 'SALE' : '';
        var statusClass2 = product.sale_product ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.pro_name}</td>
                <td>{product.regular_price}</td>
                <td>{product.sale_price}</td>
                <td>{product.color}</td>
                <td>{product.materials}</td>
                <td>{product.made_in}</td>
                <td>{product.count_view}</td>
                <td>{product.count_selled}</td>
                {/* <td>{product.hot_product}</td>
                <td>{product.sale_product}</td> */}
                <td>
                    <span className={`label label-${statusClass1}`}>
                        {statusHot}
                    </span>
                </td>

                <td>
                    <span className={`label label-${statusClass2}`}>
                        {statusSale}
                    </span>
                </td>

                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>

                <td>
                    <Link to={`/product/${product.id}/edit`}
                        className="btn btn-success"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        //xóa sản phẩm dựa trên id
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;
