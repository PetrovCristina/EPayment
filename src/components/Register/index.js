import React from "react";
import {
  Form,
  Col,
  Row,
  Button,
  FormGroup,
  Label,
  Input,
  Container
} from "reactstrap";

class Register extends React.Component {
  state = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    country: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("Form is submited");
    console.log(this.state);
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, surname, phone, email, password, country } = this.state;

    return (
      <Container className="mt-3">
        <Form onSubmit={this.onSubmit}>
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
                  onChange={this.onChange}
                >
                  <option value="">Alege...</option>
                  <option value="MD">Republica Moldova</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Button color="success">Inregistrare</Button>
        </Form>
      </Container>
    );
  }
}

export default Register;
