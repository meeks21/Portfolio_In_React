import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Greeter from './components/Greeter'

import './App.css';

function App() {
  return (
    <div className="app">
            <Header />
            <Greeter />
            <Main />
    </div>
  );
}

export default App;
