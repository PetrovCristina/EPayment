import React from 'react'
import logo from './logo.png'
import './header.css'
import {
  Button,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  FormText,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <ButtonDropdown
                isOpen={this.state.isOpen}
                toggle={this.toggle}
                className="lang">
                <DropdownToggle caret size="sm">
                  En
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Ro</DropdownItem>
                  <DropdownItem>Rus</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <Button outline color="info" className="register">
                Register
              </Button>
              <Button outline color="success" className="login">
                Log In
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
