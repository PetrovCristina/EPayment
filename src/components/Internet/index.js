import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
class Internet extends Component {
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
        <Form>
          <FormGroup>
            <Label>Numarul contractului</Label>
            <Input
              type="text"
              name="phone"
              id="examplePhone"
              placeholder="Introduceti numarul contractului"
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
      </div>
    )
  }
}

export default Internet
