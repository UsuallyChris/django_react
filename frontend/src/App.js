import React, {Fragment} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from '../src/store';

import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Fragment>
          <Header />
          <div className="content">
            <Dashboard />
          </div>
        </Fragment>
      </div>
    </Provider>
  );
}

export default App;
