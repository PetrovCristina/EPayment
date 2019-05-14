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
import { Container } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'
import * as actions from './store/actions/auth'
import { ApiService } from './ApiService'
import Header from './components/Header'
import Cards from './components/Categories'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import Converter from './components/Currency'
import Comunale from './components/Comunale'
import Mobile from './components/Mobile'

import FAQ from './components/FAQ'

import Internet from './components/Internet'

import TV from './components/TV'

import Payments from './components/Payments'

import Pay from './components/Pay'
import ImageInput from './views/ImageInput'
import VideoInput from './views/VideoInput'

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
      submit_img: token ? true : false,
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
      .then(() => this.props.history.push('/profile'))
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
    const welcome = {
      marginLeft: '110px',
      marginTop: '20px',
      color: '#393232',
      fontSize: '30px'
    }
    return (
      <React.Fragment>
        <Header
          logged_in={this.state.logged_in}
          handle_logout={this.handle_logout}
        />
        <p style={welcome}>
          {this.state.logged_in
            ? `Acesta este profilul meu, ${this.state.username} :)`
            : ''}
        </p>
        <Container className="mt-3">
          <Switch>
            <Route exact path="/" component={Cards} />
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
            <Route
              exact
              path="/profile"
              render={() => <Profile handleSubmit={this.handleSubmit} />}
            />
            <Route exact path="/plati" component={Payments} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/mobile" component={Mobile} />
            <Route exact path="/comunale" component={Comunale} />
            <Route exact path="/tv" component={TV} />
            <Route exact path="/internet" component={Internet} />
            <Route exact path="/achita" component={Pay} />
            <Route exact path="/valuta" component={Converter} />
            <Route exact path="/photo" component={ImageInput} />
            <Route exact path="/camera" component={VideoInput} />
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
