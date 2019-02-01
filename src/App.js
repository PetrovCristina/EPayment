import React, { Component } from 'react'

import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Categories />
      </React.Fragment>
    )
  }
}

export default App
