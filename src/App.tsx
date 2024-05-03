import React from 'react';
import logo from './logo.svg';
import '/node_modules/primeflex/primeflex.css';
import './App.css';
import IndexPage from './modules/home/pages/index/Index';

function App() {
  return <div className="mock bg-no-repeat bg-center bg-top">
    <IndexPage />;
  </div>

}

export default App;
