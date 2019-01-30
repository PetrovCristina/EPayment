import React from 'react'
import logo from './logo.png'
import './header.css'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,

  DropdownToggle,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import { l10n } from '../../l10n'

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
                  {l10n('languages.ro')}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>{l10n('languages.en')}</DropdownItem>
                  <DropdownItem>{l10n('languages.ru')}</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <Button outline color="info" className="register">
                {l10n('label.register')}
              </Button>
              <Button outline color="success" className="login">
                {l10n('label.login')}
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
