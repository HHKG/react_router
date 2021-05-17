import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
import RepeatMount from '../react_practice/index';

class RouterCenter extends Component{
  render(){
    return <Router>
          <Switch>
            <Route exact="/repeatMount" component={RepeatMount}></Route>
            <Redirect to="/" />
          </Switch>
    </Router>
  }
}
export default RouterCenter;