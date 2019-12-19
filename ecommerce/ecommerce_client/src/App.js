import React from 'react';
import Router from './Router'
import './App.css';

import { HeaderCustomer, FooterCustomer } from './components/'

function App() {
  return (
    <div>
      <HeaderCustomer/>
      <FooterCustomer/>
      <Router/>
    </div>
  );
}

export default App;
