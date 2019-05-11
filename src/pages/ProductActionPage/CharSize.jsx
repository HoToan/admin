import React, { Component } from 'react';
class CharSize extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtsize1: '',
            txtsize2: '',
            txtsize3: '',
            txtsize4: '',
            txtsize5: ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState = {
            [name]: value
        }
    }
    // onSubmit1 = (event) => {
    //     event.preventDefault();
    //     console.log(this.state);
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.onSave}>
                <table>
                    <tbody>
                        <tr>
                            <td>S: </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="txtsize1"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>M: </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="txtsize2"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>L: </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="txtsize3"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>XL: </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="txtsize4"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>XXL: </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="txtsize5"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div>
        );
    }
}
export default CharSize;
