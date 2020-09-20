import React, { Component, Fragment } from "react";
// antd组件引入
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
// 登录页样式
import "./index.scss";
// 正则验证文件
import { validate_passwords } from "../../utils/validate";
// 验证码组件
import Code from "../../components/code/code";
// 注册表单组件
class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            username: ""
        };
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    // 点击事件-注册和登录组件之间的切换
    toggleForm = () => {
        // 调用父级的方法
        this.props.switchForm("login");
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
        const { username } = this.state;
        return (
            <Fragment>
                <div className="form-header">
                    <h4 className="column">注册</h4>
                    <span onClick={this.toggleForm}>登录</span>
                </div>
                <div className="form-content">
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={() => this.onFinish}>
                        {/* 用户名 */}
                        <Form.Item name="username" rules={
                            [
                                { required: true, message: '邮箱不能为空！' },
                                { type: "email", message: "邮箱格式不正确！" }
                            ]
                        }>
                            <Input onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                        </Form.Item>
                        {/* 密码框 */}
                        <Form.Item name="password" rules={
                            [
                                { required: true, message: '密码不能为空！' },
                                ({ getFieldValue }) => ({
                                    validator(role, _value) {
                                        const passwords_value = getFieldValue("passwords");//再次输入密码的值
                                        if (!validate_passwords(_value)) {
                                            return Promise.reject("请输入大于6位小于20位的字母+数字！");
                                        }
                                        if (passwords_value && _value !== passwords_value) {
                                            return Promise.reject("两次密码不一致！");
                                        }
                                        return Promise.resolve();
                                    }
                                })
                            ]
                        }>
                            <Input type="password" prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                        </Form.Item>
                        {/* 密码框 */}
                        <Form.Item name="passwords" rules={
                            [
                                { required: true, message: '两次确认密码不能为空！' },
                                ({ getFieldValue }) => ({
                                    validator(role, _value) {
                                        if (_value !== getFieldValue("password")) {
                                            return Promise.reject("两次密码不一致！");
                                        }
                                        return Promise.resolve();
                                    }
                                })
                            ]
                        }>
                            <Input type="password" prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请再次输入密码" />
                        </Form.Item>
                        {/* 验证码 */}
                        <Form.Item name="Code" rules={[{ required: true, message: '请输入验证码！' }]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />
                                </Col>
                                <Col span={9}>
                                    <Code username={username} />
                                    {/* <Button type="danger" block>获取验证码</Button> */}
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>注册</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment >
        )
    }
}
// 导出注册表单组件
export default RegisterForm;