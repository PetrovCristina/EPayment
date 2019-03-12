import React, { Component } from 'react'

import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import Footer from './components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faEnvelope, faPhone)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Categories />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
