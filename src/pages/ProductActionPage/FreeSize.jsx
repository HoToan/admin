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
                            <td>FreeSize:</td>
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
                    </tbody>
                </table>
            </div>
        );
    }
}
export default CharSize;
