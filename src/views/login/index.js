import React, { Component } from "react";
// 登录页样式
import "./index.scss";

// 页面组件引入
// 登录组件
import LoginForm from './loginForm';
// 注册组件
import RegisterForm from './registerForm';
// 登录页
class Login extends Component {
    constructor() {
        super();
        this.state = {
            formType: "login"
        };
    }
    // 切换登录和注册组件字段
    switchForm = (value) => {
        this.setState({
            formType: value
        });
        console.log(value);
    }
    render() {
        return (
            <div className="form-wrap">
                <div>
                    {this.state.formType === "login" ?
                        <LoginForm switchForm={this.switchForm}></LoginForm> :
                        <RegisterForm switchForm={this.switchForm}></RegisterForm>}
                </div>
            </div>
        )
    }
}
// 导出登录页
export default Login;