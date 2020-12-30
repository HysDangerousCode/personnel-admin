import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// 引用页面组件
import Login from './views/login/index';
import Index from './views/index/index';
// 私有组件方法
import PrivateRouter from './components/privateRouter/index';
// 自定义组件
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route component={Login} exact path="/" />
            <PrivateRouter component={Index} path="/index" />
          </Switch>
        </HashRouter>
      </div>

    )
  }
}
// exact:精准匹配路由
export default App;
