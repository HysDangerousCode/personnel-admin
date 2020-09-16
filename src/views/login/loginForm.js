import React, { Component, Fragment } from "react";
// antd组件引入
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
// 登录页样式
import "./index.scss";
// 正则验证文件
import { validate_password, validate_email } from "../../utils/validate";
// 登录API导入
import { Login, GetCode } from "../../api/account";
// 登录表单组件
class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            code_button_disabled: true
        };
    }
    // 登录
    onFinish = (values) => {
        Login().then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        console.log('Received values of form: ', values);
    };
    // 点击事件-登录和注册组件的切换
    toggleForm = () => {
        // 调用父级的方法
        this.props.switchForm("register");
    }
    // 获取验证码
    getCode = () => {
        let _this = this;
        if (!_this.state.username) {
            message.warning("用户名不能为空！", 1);
        }
        const requestData = {
            username: _this.state.username,
            module: "login"
        };
        GetCode(requestData).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
    // input输入处理
    inputChange = (e) => {
        let _this = this;
        let _value = e.target.value;
        _this.setState({
            username: _value
        });
        console.log(_value);
    }
    render() {
        const { username, code_button_disabled } = this.state;
        const _this = this;
        return (
            <Fragment>
                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={this.toggleForm}>账号注册</span>
                </div>
                <div className="form-content">
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish}>
                        {/* 用户名 */}
                        <Form.Item name="username" rules={
                            [
                                { required: true, message: '邮箱不能为空！' },
                                // { type: "email", message: "邮箱格式不正确！" }
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (validate_email(value)) {
                                            _this.setState({
                                                code_button_disabled: false
                                            });
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('邮箱格式不正确！');
                                    },
                                }),
                            ]
                        }>
                            <Input value={username} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" />
                        </Form.Item>
                        {/* 密码框 */}
                        <Form.Item name="password" rules={
                            [
                                { required: true, message: '密码不能为空！' },
                                // { min: 6, message: '不能小于6位！' },
                                // { max: 20, message: '不能小于20位！' },
                                { pattern: validate_password, message: '请输入大于6位小于20位的字母+数字！' }
                                // ({ getFieldValue }) => ({
                                //     validator(rule, value) {
                                //         if (value.length <= 6) {
                                //             return Promise.reject('不能小于6位！');
                                //         } else {
                                //             return Promise.resolve();
                                //         }
                                //     },
                                // }),
                            ]
                        }>
                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="字母+密码，大于6位 小于20位" />
                        </Form.Item>
                        {/* 验证码 */}
                        <Form.Item name="Code" rules={
                            [
                                { required: true, message: '验证码不能为空！' },
                                { len: 6, message: '请输入长度为6位的验证码！' }
                            ]
                        }>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="验证码" />
                                </Col>
                                <Col span={9}>
                                    <Button type="danger" block disabled={code_button_disabled} onClick={this.getCode}>获取验证码</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        )
    }
}
// 导出登录表单组件
export default LoginForm;