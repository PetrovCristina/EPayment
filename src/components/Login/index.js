import React from 'react'
import {
  Form,
  Col,
  Row,
  Container,
  Button,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import PropTypes from 'prop-types'

class Login extends React.Component {
  state = {
    phone: '',
    password: ''
  }

  handle_change = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState(prevstate => {
      const newState = { ...prevstate }
      newState[name] = value
      return newState
    })
  }

  render() {
    return (
      <Container className="mt-3">
        <Form onSubmit={e => this.props.handle_login(e, this.state)}>
          <Row>
            <Col
              xs={12}
              sm={{ size: 8, offset: 2 }}
              md={{ size: 6, offset: 3 }}
              lg={{ size: 4, offset: 4 }}>
              <FormGroup>
                <Label>Telefon</Label>
                <Input
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handle_change}
                  placeholder="Introdu numarul de telefon"
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
      </Container>
    )
  }
}

export default Login

Login.propTypes = {
  handle_login: PropTypes.func.isRequired
}
