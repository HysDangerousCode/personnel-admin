import React, { Component } from "react";
// 登录页样式
import "./index.scss";
// antd组件引入
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';
// 页面组件引入
import LoginName from './loginForm';
// 登录页
class Login extends Component {
    constructor() {
        super();
        this.state = {};
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
            <div className="form-wrap">
                <div>
                    <div className="form-header">
                        <h4 className="column">登录</h4>
                        <span>账号注册</span>
                    </div>
                    <div className="form-content">
                        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={() => this.onFinish}>
                            {/* 用户名 */}
                            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            {/* 密码框 */}
                            <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
                                <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Password" />
                            </Form.Item>
                            {/* 验证码 */}
                            <Form.Item name="Code" rules={[{ required: true, message: '请输入验证码！' }]}>
                                <Row gutter={13}>
                                    <Col span={15}>
                                        <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Code" />
                                    </Col>
                                    <Col span={9}>
                                        <Button type="danger" block>获取验证码</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
// 导出到主入口
export default Login;