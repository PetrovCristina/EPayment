import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Categories />
        </div>
      </div>
    )
  }
}

export default App
