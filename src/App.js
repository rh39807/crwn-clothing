import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/homepage.component';

import './App.css';

const HatsPage = ()=> (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path='/shop/hats' component={HatsPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;