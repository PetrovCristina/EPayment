import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const Login = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Telefon</Form.Label>
          <Form.Control placeholder="Introdu numarul de telefon" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Parola</Form.Label>
          <Form.Control type="password" placeholder="Parola" />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Logare
      </Button>
    </Form>
  )
}

export default Login
