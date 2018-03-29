import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
//import logo from './logo.svg';
//import './App.css';

import Menu from './components/menu.js' // 顶部导航菜单
import Pandect from './components/pandect.js'// 总体运营
import Outpatient from './components/outpatient.js'// 门急诊
import Inhospital from './components/inhospital.js'// 住院

import './main.scss'

class App extends Component {
  render() {
    return (
      <div className="container">
           <Menu />
           <Switch>
              <Route path="/pandect" component = {Pandect} />
              <Route path="/outpatient" component = {Outpatient} />
              <Route path="/inhospital" component = {Inhospital} />
              <Redirect path = "/" to = "/pandect" />
          </Switch>
      </div>
    );
  }
}

export default App;
