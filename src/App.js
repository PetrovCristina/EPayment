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
import { ApiService } from './ApiService'

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
    const token = localStorage.getItem('token')
    this.state = {
      token,
      logged_in: token ? true : false,
      username: ''
    }
  }

  componentDidMount() {
    if (this.state.logged_in) {
      ApiService.getMe(this.state.token)
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username })
        })
    }
  }

  handle_login = data => {
    ApiService.login(data)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token)
        this.setState({
          token: json.token,
          logged_in: true,
          username: json.user.username
        })
      })
      .then(() => this.props.history.push('/'))
      .catch(() => console.log('Invalid data'))
  }

  handle_signup = (e, data) => {
    e.preventDefault()
    ApiService.signUp(data)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token)
        this.setState({
          token: json.token,
          logged_in: true,
          username: json.username
        })
      })
      .then(() => this.props.history.push('/'))
  }

  handle_logout = () => {
    localStorage.removeItem('token')
    this.setState({ logged_in: false, username: '', token: null })
  }

  render() {
    return (
      <React.Fragment>
        <Header
          logged_in={this.state.logged_in}
          handle_logout={this.handle_logout}
        />

        <Container className="mt-3">
          <h3>
            {this.state.logged_in
              ? `Hello, ${this.state.username}`
              : 'Please Log In'}
          </h3>
        </Container>

        <Container className="mt-3">
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route
              exact
              path="/register"
              render={() => <Register handle_signup={this.handle_signup} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login handle_login={this.handle_login} />}
            />
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

const mapDispatchToProps = { onTryAutoSignup: actions.authCheckState }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
