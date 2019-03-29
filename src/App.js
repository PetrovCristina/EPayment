import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import Header from './components/Header'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import { Container } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'
import * as actions from './store/actions/auth'
import { Nav } from 'reactstrap'

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
  constructor(props) {
    super(props)
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    }
  }
  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://127.0.0.1:8000/accounts/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username })
        })
    }
  }
  //
  handle_login = (e, data) => {
    e.preventDefault()
    fetch('http://127.0.0.1:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token)
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        })
      })
  }

  handle_signup = (e, data) => {
    e.preventDefault()
    fetch('http://127.0.0.1:8000/accounts/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token)
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        })
      })
  }

  handle_logout = () => {
    localStorage.removeItem('token')
    this.setState({ logged_in: false, username: '' })
  }

  display_form = form => {
    this.setState({
      displayed_form: form
    })
  }

  render() {
    let form
    switch (this.state.displayed_form) {
      case 'login':
        form = <Login handle_login={this.handle_login} />
        break
      case 'signup':
        form = <Register handle_signup={this.handle_signup} />
        break
      default:
        form = null
    }
    return (
      <React.Fragment>
        <Header />

        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
        <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
        </h3>
        <Container>
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
