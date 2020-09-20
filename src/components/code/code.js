// 验证码组件
import React, { Component } from "react";
// antd组件导入
import { Button, message } from "antd";
// 登录API导入
import { GetCode } from "../../api/account";
// 正则验证文件
import { validate_email } from "../../utils/validate";
// 验证码按钮组件
class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            button_text: "获取验证码",
            button_loading: false,
            button_disabled: false
        }
    }
    componentWillReceiveProps({ username }) {
        let _this = this;
        _this.setState({
            username
        });
    }
    // 获取验证码
    getCode = () => {
        let _this = this;
        const username = _this.state.username;
        if (!username) {
            message.warning("用户名不能为空！", 1);
            return;
        }
        if (!validate_email(username)) {
            message.warning("邮箱格式不正确！", 1);
            return;
        }
        _this.setState({
            button_loading: true,
            button_text: "发送中"
        });
        const requestData = {
            username,
            module: "login"
        };
        GetCode(requestData).then(response => {
            // 执行倒计时
            let _this = this;
            _this.countDown();
            console.log(response);
        }).catch(error => {
            _this.setState({
                button_loading: false,
                button_text: "重新获取"
            });
            console.log(error);
        });
    }
    // 验证码倒计时
    countDown = () => {
        let _this = this;
        // 定时器
        let timer = null;
        // 倒计时时间
        let sec = 60;
        // 修改状态
        _this.setState({
            button_loading: false,
            button_disabled: true,
            button_text: `${sec}S`
        });
        timer = setInterval(() => {
            let _this = this;
            // 递减秒数
            sec--;
            if (sec <= 0) {
                _this.setState({
                    button_text: "重新获取",
                    button_disabled: false
                });
                clearInterval(timer);
                return;
            }
            _this.setState({
                button_text: `${sec}S`
            });
        }, 1000);
        // setInterval\clearInterval:不间断定时器
        // setTimeout()\clearTimeout:只执行一次
    }
    render() {
        return <Button type="danger" block onClick={this.getCode} disabled={this.state.button_disabled} loading={this.state.button_loading}>{this.state.button_text}</Button>;
    }
}
//
export default Code;