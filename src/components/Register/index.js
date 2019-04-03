import React from 'react'
import { Form, Col, Row, Button, FormGroup, Label, Input } from 'reactstrap'

import PropTypes from 'prop-types'

class Register extends React.Component {
  state = {
    name: '',
    surname: '',
    phone: '',
    username: '',
    password: '',
    country: ''
  }
  handle_change = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => {
      const newState = { ...prevState }
      newState[name] = value
      return newState
    })
  }

  render() {
    return (
      <Form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="name">Nume</Label>

              <Input
                type="text"
                name="name"
                placeholder="Introdu numele"
                value={this.state.name}
                onChange={this.handle_change}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="surname">Prenume</Label>

              <Input
                type="text"
                name="surname"
                placeholder="Introdu prenumele"
                value={this.state.surname}
                onChange={this.handle_change}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="phone">Telefon</Label>

              <Input
                type="text"
                name="phone"
                placeholder="Introdu numarul de telefon"
                value={this.state.phone}
                onChange={this.handle_change}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="email">Email</Label>

              <Input
                type="text"
                name="username"
                placeholder="Introdu email-ul"
                value={this.state.username}
                onChange={this.handle_change}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="password">Parola</Label>

              <Input
                name="password"
                placeholder="Parola"
                value={this.state.password}
                onChange={this.handle_change}
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>

        <Button color="success">Inregistrare</Button>
      </Form>
    )
  }
}

export default Register

Register.propTypes = {
  handle_signup: PropTypes.func.isRequired
}
