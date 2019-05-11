import React, { Component } from 'react';

class Review extends Component {
    onDelete = (review_id) => {
        if (confirm('Bạn chắc chắn muốn xóa không')) { //eslint-disable-line
            this.props.onDelete(review_id);
        }
    }
    render() {
        var { review, index } = this.props;

        return (
            console.log(this.props);
            <tr>
                <td>{index + 1}</td>
                <td>{review.user.email}</td>
                <td>{review.product.pro_name}</td>
                <td>{review.star_number}</td>
                <td>{review.detail}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        //xóa sản phẩm dựa trên id
                        onClick={() => this.onDelete(review.review_id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default Review;
