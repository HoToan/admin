import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchReviewsRequest, actDeleteReviewsRequest } from './../../actions/actReviews';
import Header from '../../components/admin/Home/Header';
import MenuAdmin from '../../components/admin/Home/MenuAdmin';
import MenuStore from '../../components/admin/Home/MenuStore';
import ReviewsList from '../../components/admin/Reviews/ReviewsList/ReviewsList';
import Review from '../../components/admin/Reviews/ReviewsList/ReviewsList';

class ReviewListPage extends Component {
    showReviews(reviews) {
        var result = null;
        if (reviews.length > 0) {
            result = reviews.map((review, index) => {
                return (
                    <Review
                        key={index}
                        review={review}
                        index={index}
                        //truyền props vào review
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
    componentDidMount() {
        var sto_id = sessionStorage.getItem('sto_id');
        this.props.fetchAllReviews(sto_id);
    }
    onDelete = (review_id) => {
        this.props.onDeleteReview(review_id);
    }
    render() {
        var { reviews } = this.props;
        if (sessionStorage.getItem('role') === 'store') {
            var menu = <MenuStore />;
        }
        else {
            menu = <MenuAdmin />
        }
        return (
            <div>
                <Header />
                {menu}
                <div className="wrapper">
                    <div className="wrapper">
                        <div className="content-wrapper">
                            {/* Content Header (Page header) */}
                            <section className="content-header">
                                <h1>
                                    Danh Sách Review
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                                    <li><a href="#">Tables</a></li>
                                    <li className="active">Data tables</li>
                                </ol>
                            </section>
                            {/* Main content */}
                            <section className="content">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box">
                                            <br />
                                            
                                            <ReviewsList>
                                                {this.showReviews(reviews)}
                                            </ReviewsList>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Lay review tu store
const mapStateToProps = state => {
    return {
        reviews: state.reviews
    }
};
// Luu reviews len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllReviews: (sto_id) => {
            dispatch(actFetchReviewsRequest(sto_id));
        },
        onDeleteReview: (review_id) => {
            dispatch(actDeleteReviewsRequest(review_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewListPage);
