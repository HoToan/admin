import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import callApi02 from '../../Utils/apiCaller02';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtemail: '',
            role: 'admin',
            redirect: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        var { txtemail, txtpassword } = this.state;

        callApi02('admin/login', 'POST', {
            username: txtemail,
            password: txtpassword
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    redirect: true
                })
            }
            sessionStorage.setItem("token", res.data.accessToken);
            sessionStorage.setItem("txtemail", this.state.txtemail);
            sessionStorage.setItem("role", this.state.role);

            

        }).catch(res => {
            alert("Nhập sai Email hoặc Password");
        })
    }

    render() {
        var { txtemail, txtpassword } = this.state;
        if (this.state.redirect) {
            return (<Redirect to={'/home'} />)
        }
        return (
            <div className="container">
                <h1 className="text-center">Đăng nhập ADMIN</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 well well-sm col-md-offset-4">
                        <legend><a href="#">
                            <i className="glyphicon glyphicon-globe" /></a> Đăng nhập
                        </legend>
                        <form onSubmit={this.onSave}>
                            <input
                                className="form-control"
                                name="txtemail"
                                value={txtemail}
                                placeholder="Email"
                                type="text"
                                onChange={this.onChange}
                            />
                            <input
                                className="form-control"
                                name="txtpassword"
                                value={txtpassword}
                                //placeholder="password"
                                type="password"
                                onChange={this.onChange}
                            />
                            <br />
                            <button
                                className="btn btn-lg btn-primary btn-block"
                                type="submit">
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginPage;