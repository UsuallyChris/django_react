import React, {Fragment} from 'react';
import './App.css';

import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <div className="content">
          <Dashboard />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
