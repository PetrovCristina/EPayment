import React from 'react'
import { Form, Col, Row, Button, FormGroup, Label, Input } from 'reactstrap'

import PropTypes from 'prop-types'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handle_change = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState(prevstate => ({ ...prevstate, [name]: value }))
  }

  handle_login = e => {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.handle_login(this.state)
    }
  }

  render() {
    return (
      <Form onSubmit={this.handle_login}>
        <Row>
          <Col
            xs={12}
            sm={{ size: 8, offset: 2 }}
            md={{ size: 6, offset: 3 }}
            lg={{ size: 4, offset: 4 }}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handle_change}
                placeholder="Introdu email"
              />
            </FormGroup>

            <FormGroup>
              <Label>Parola</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handle_change}
                placeholder="Parola"
                autoComplete="current-password"
              />
            </FormGroup>

            <Button color="success">Logare</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Login

Login.propTypes = {
  handle_login: PropTypes.func.isRequired
}
