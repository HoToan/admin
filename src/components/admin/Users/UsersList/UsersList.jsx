import React, { Component } from 'react';


class UsersList extends Component {
    render() {
        return (
            <div className="box-body">
                <table id="example2" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Email</th>
                            <th>Full Name</th>
                            <th>Avatar</th>
                            <th>Phone</th>
                            <th>Address</th>
                            
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
export default UsersList;
