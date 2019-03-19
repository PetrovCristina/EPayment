import React from "react";
import {
  Form,
  Col,
  Row,
  Container,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("Form submited");
    console.log(this.state);
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container className="mt-3">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col
              xs={12}
              sm={{ size: 8, offset: 2 }}
              md={{ size: 6, offset: 3 }}
              lg={{ size: 4, offset: 4 }}
            >
              <FormGroup>
                <Label>Telefon</Label>
                <Input
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  placeholder="Introdu numarul de telefon"
                  autoComplete="email"
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
    );
  }
}

export default Login;
