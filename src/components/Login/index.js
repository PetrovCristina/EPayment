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
import axios from 'axios'

class Login extends React.Component {
  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/accounts/login')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  state = {
    phone: '',
    password: ''
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { phone, password } = this.state
    return (
      <Container className="mt-3">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col
              xs={12}
              sm={{ size: 8, offset: 2 }}
              md={{ size: 6, offset: 3 }}
              lg={{ size: 4, offset: 4 }}>
              <FormGroup>
                <Label>Telefon</Label>
                <Input
                  name="phone"
                  value={phone}
                  onChange={this.onChange}
                  placeholder="Introdu numarul de telefon"
                />
              </FormGroup>

              <FormGroup>
                <Label>Parola</Label>
                <Input
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
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
