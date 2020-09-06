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
    render() {
        return (
            <div className="form-wrap">
                <div>
                    {this.state.formType === "login" ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}
                </div>
            </div>
        )
    }
}
// 导出到主入口
export default Login;