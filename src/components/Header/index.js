import React from 'react'
import logo from './logo.png'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  Container,
  DropdownItem
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { l10n } from '../../l10n'

function Header({ logged_in, handle_logout }) {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand to="/" tag={Link}>
          <img src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle caret nav>
                {l10n('languages.ro')}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>{l10n('languages.en')}</DropdownItem>
                <DropdownItem>{l10n('languages.ru')}</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {logged_in ? (
              <LoggedInNav handle_logout={handle_logout} />
            ) : (
              <LoggedOutNav />
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

function LoggedOutNav() {
  return (
    <React.Fragment>
      <Button
        tag={Link}
        to="/login"
        outline
        color="success"
        className="mt-2 mt-md-0 ml-md-2">
        {l10n('label.login')}
      </Button>
      <Button
        tag={Link}
        to="/register"
        outline
        color="info"
        className="mt-2 mt-md-0 ml-md-2">
        {l10n('label.register')}
      </Button>
    </React.Fragment>
  )
}

function LoggedInNav({ handle_logout }) {
  return (
    <Button
      outline
      color="info"
      className="mt-2 mt-md-0 ml-md-2"
      onClick={handle_logout}>
      {l10n('label.logout')}
    </Button>
  )
}
