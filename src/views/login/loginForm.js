import React, { Component, Fragment } from "react";
// antd组件引入
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
// 登录页样式
import "./index.scss";
// 正则验证文件
import { validate_password } from "../../utils/validate";
// 登录API导入
import { Login } from "../../api/account";
// 验证码组件
import Code from "../../components/code/code";
// 登录表单组件
class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            module: "login"
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
        // code_button_loading, code_button_text, code_button_disabled
        const { username, module } = this.state;
        // const _this = this;
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
                                { type: "email", message: "邮箱格式不正确！" }
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
                            <Input type="password" prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="字母+密码，大于6位 小于20位" />
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
                                    <Code username={username} module={module} />
                                    {/* <Button type="danger" block disabled={code_button_disabled} onClick={this.getCode} loading={code_button_loading}>{code_button_text}</Button> */}
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