import React, { Component } from 'react';
class ReviewsList extends Component {
    render() {
        return (
            <div className="box-body">
                <table id="example2" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên User</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Đánh Giá</th>
                            <th>Chi Tiết</th>
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
export default ReviewsList;
