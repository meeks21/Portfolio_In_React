import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Greeter from './components/Greeter'

import './App.css';


class App extends React.Component {


  render() {

    return (
      <div className="app">
        <Header />
        <Greeter />
        <Main />
      </div>

    )
  }
}

export default App;
