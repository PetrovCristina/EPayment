import React, { Component } from 'react'

import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Register from './components/Register'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

library.add(faHome, faEnvelope, faPhone)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/register" component={Register} />
          <Categories />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
