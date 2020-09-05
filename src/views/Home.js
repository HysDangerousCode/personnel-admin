import React,{Component,Fragment} from 'react';
import "./aaa.scss";
// 按需引入antd组件
import {Button} from 'antd';
class Home extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        return(
            <Fragment>
                <Button type="danger">按钮</Button>
                <Button type="primary">我是个按钮</Button>
            </Fragment>
                
        )
    }
}
export default Home;