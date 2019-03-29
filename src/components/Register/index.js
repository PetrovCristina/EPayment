import React from 'react'
import {
  Form,
  Col,
  Row,
  Button,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap'

import PropTypes from 'prop-types'

class Register extends React.Component {
  state = {
    name: '',
    surname: '',
    phone: '',
    email: '',
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
      <Container className="mt-3">
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
                  name="email"
                  placeholder="Introdu email-ul"
                  value={this.state.email}
                  onChange={this.handle_change}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="password">Prenume</Label>

                <Input
                  name="password"
                  placeholder="Introdu prenumele"
                  value={this.state.password}
                  onChange={this.handle_change}
                  type="password"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="country">Tara</Label>
                <Input
                  name="country"
                  type="select"
                  value={this.state.country}
                  onChange={this.handle_change}>
                  <option value="">Alege...</option>
                  <option value="MD">Republica Moldova</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Button color="success">Inregistrare</Button>
        </Form>
      </Container>
    )
  }
}

export default Register

Register.propTypes = {
  handle_signup: PropTypes.func.isRequired
}
