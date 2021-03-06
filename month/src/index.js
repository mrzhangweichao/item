import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import FastClick from 'fastclick'
import Es6Promise from 'es6-promise'

import registerServiceWorker from './registerServiceWorker';

//路由
import App from './App';
import Pandect from './components/pandect.js'

FastClick.attach(document.body)
Es6Promise.polyfill()

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

ReactDOM.render(<ErrorBoundary>
    <Router>
        <Switch>
           <Route path = "/" component = {App} />
        </Switch>
    </Router>
</ErrorBoundary>, document.getElementById("app"));





// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

