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
import axios from 'axios'

class Register extends React.Component {
  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/accounts/register')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleFormSubmit = (event, requestType, profileID) => {
    event.preventDefault()
    const name = event.target.elements.name.value
    const surname = event.target.elements.surname.value
    const phone = event.target.elements.phone.value
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    const country = event.target.elements.country.value

    switch (requestType) {
      case 'post':
        return axios
          .post('http://127.0.0.1:8000/accounts/register', {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            password: password,
            country: country
          })
          .then(response => console.log(response))
          .catch(error => console.err(error))
      case 'put':
        return axios
          .put(`http://127.0.0.1:8000/accounts/${profileID}/`, {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            password: password,
            country: country
          })
          .then(response => console.log(response))
          .catch(error => console.log(error))
    }
  }

  state = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    country: ''
  }
  onSubmit = e => {
    e.preventDefault()
    console.log('Form is submited')
    console.log(this.state)
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, surname, phone, email, password, country } = this.state

    return (
      <Container className="mt-3">
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.profileID
            ).bind(this)
          }>
          <Row>
            <Col>
              <FormGroup>
                <Label>Nume</Label>
                <Input
                  name="name"
                  placeholder="Introdu numele"
                  value={name}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Prenume</Label>
                <Input
                  name="surname"
                  placeholder="Introdu prenumele"
                  value={surname}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label>Telefon</Label>
                <Input
                  name="phone"
                  placeholder="Introdu numarul de telefon"
                  value={phone}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Introdu email"
                  autoComplete="email"
                  value={email}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label>Parola</Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="Parola"
                  autoComplete="current-password"
                  value={password}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Tara</Label>
                <Input
                  name="country"
                  type="select"
                  value={country}
                  onChange={this.onChange}>
                  <option value="">Alege...</option>
                  <option value="MD">Republica Moldova</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Button color="success" onClick={this.handleFormSubmit.bind(this)}>
            Inregistrare
          </Button>
        </Form>
      </Container>
    )
  }
}

export default Register
