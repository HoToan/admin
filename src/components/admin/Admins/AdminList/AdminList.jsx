import React, { Component } from 'react';
class AdminList extends Component {
    render() {
        return (
            <div className="box-body">
                <table id="example2" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>UserName</th>
                            <th>FullName</th>
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
export default AdminList;
