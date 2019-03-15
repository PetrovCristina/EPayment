import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const Register = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nume</Form.Label>
          <Form.Control placeholder="Introdu numele" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Prenume</Form.Label>
          <Form.Control placeholder="Introdu prenumele" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Telefon</Form.Label>
          <Form.Control placeholder="Introdu numarul de telefon" />
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
        <Form.Group as={Col} controlId="formGridCountry">
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
