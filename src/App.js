import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;