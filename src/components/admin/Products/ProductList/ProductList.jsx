import React, { Component } from 'react';
class ProductList extends Component {
    render() {
        return (
            <div className="box-body">
                <table id="example2" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Giá Sale</th>
                            <th>Màu</th>
                            <th>Chất Vải</th>
                            <th>Xuất Xứ</th>
                            <th>Lượt Xem</th>
                            <th>Lượt Mua</th>
                            <th>Sản Phẩm Hot</th>
                            <th>Sản Phẩm Sale</th>
                            <th>Trạng Thái</th>
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
export default ProductList;
