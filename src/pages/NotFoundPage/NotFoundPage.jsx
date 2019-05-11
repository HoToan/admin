import React, { Component } from 'react';
class NotfoundPage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="wrapper">
                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    NOT FOUND
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a><i className="fa fa-dashboard" /> Home</a></li>
                                    <li><a>Tables</a></li>
                                    <li className="active">Data tables</li>
                                </ol>
                            </section>
                            <div className="content-wrapper">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <strong>Không tìm thấy trang!</strong> .
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default NotfoundPage;

