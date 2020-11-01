import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Collection from './pages/collection/collection.component';
import Homepage from './pages/homepage.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/shop/:collection" component={Collection} />
      <Route path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
