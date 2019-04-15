import React, { Component } from 'react'
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import './mobile.css'
class Mobile extends Component {
  constructor(props) {
    super(props)
    this.onEntering = this.onEntering.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }

  onEntering() {
    this.setState({ status: 'Opening...' })
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }))
  }

  render() {
    return (
      <div>
        <div>
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: '1rem' }}>
            Orange
          </Button>
          <Collapse isOpen={this.state.collapse} onEntering={this.onEntering}>
            <Form>
              <FormGroup>
                <Label>Numarul de telefon</Label>
                <Input
                  type="text"
                  name="phone"
                  id="examplePhone"
                  placeholder="Introduceti numarul de telefon"
                />
              </FormGroup>
              <FormGroup>
                <Label>Suma</Label>
                <Input
                  type="text"
                  name="suma"
                  id="exampleSum"
                  placeholder="Introduceti suma spre achitare"
                />
              </FormGroup>
            </Form>
            <Button
              tag={Link}
              to="/achita"
              color="info"
              className="mt-2 mt-md-0 ml-md-2 description">
              Achita
            </Button>
          </Collapse>
        </div>
        <div>
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: '1rem' }}>
            Moldcell
          </Button>
          <Collapse isOpen={this.state.collapse} onEntering={this.onEntering}>
            <Form>
              <FormGroup>
                <Label>Numarul de telefon</Label>
                <Input
                  type="text"
                  name="phone"
                  id="examplePhone"
                  placeholder="Introduceti numarul de telefon"
                />
              </FormGroup>
              <FormGroup>
                <Label>Suma</Label>
                <Input
                  type="text"
                  name="suma"
                  id="exampleSum"
                  placeholder="Introduceti suma spre achitare"
                />
              </FormGroup>
            </Form>
            <Button
              tag={Link}
              to="/achita"
              color="info"
              className="mt-2 mt-md-0 ml-md-2">
              Achita
            </Button>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default Mobile
