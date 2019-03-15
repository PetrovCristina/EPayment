import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const Register = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nume</Form.Label>
          <Form.Control placeholder="Introdu numele" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Prenume</Form.Label>
          <Form.Control placeholder="Introdu prenumele" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Introdu email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Parola</Form.Label>
          <Form.Control type="password" placeholder="Parola" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Tara</Form.Label>
          <Form.Control as="select">
            <option>Alege...</option>
            <option>Republica Moldova</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Inregistrare
      </Button>
    </Form>
  )
}

export default Register
