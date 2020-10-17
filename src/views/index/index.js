// 首页
import React, { Component } from "react";
// layout组件
import Aside from "./components/aside";
// 样式引入
import "./layout.scss";
// antd引入
import { Layout } from "antd";
const { Sider, Header, Content } = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout className="layout-wrap">
                <Sider width="250px"><Aside/></Sider>
                <Layout>
                    <Header className="layout-header">头部</Header>
                    <Content className="layout-main">内容</Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;