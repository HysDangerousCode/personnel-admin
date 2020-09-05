import React,{Component} from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.scss';
// 引用组件
import Home from './views/Home';
import About from './views/About';

// 自定义组件
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <h1>主入口</h1>
        <HashRouter>
        <Switch>
          <Route component={Home} exact path="/"/>
          <Route component={About} exact path="/about"/>
        </Switch>
      </HashRouter>
      </div>
      
    )
  }
}
// exact:精准匹配路由
export default App;
