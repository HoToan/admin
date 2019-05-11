import React, { Component } from 'react';
class CharSize extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size1: '',
            size2: '',
            size3: '',
            size4: '',
            size5: ''
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

                <table>
                    <tbody>
                        <tr>
                            <td>30: </td>
                            &nbsp;
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="size1"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>31: </td>
                            &nbsp;
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="size2"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>32: </td>
                            &nbsp;
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="size3"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>33: </td>
                            &nbsp;
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="size4"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>34: </td>
                            &nbsp;
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="size5"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div >
        );
    }
}
export default CharSize;
