import React, { Component } from 'react'

import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faEnvelope,
  faPhone,
  faFileInvoiceDollar,
  faSyncAlt,
  faHandshake,
  faFileWord,
  faSortAmountUp
} from '@fortawesome/free-solid-svg-icons'
import { Route, Switch } from 'react-router-dom'

library.add(
  faHome,
  faEnvelope,
  faPhone,
  faFileInvoiceDollar,
  faSyncAlt,
  faHandshake,
  faFileWord,
  faSortAmountUp
)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Categories />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
