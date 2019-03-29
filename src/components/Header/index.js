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

import PropTypes from 'prop-types'

function Header(props) {
  const logged_out_nav = (
    <div>
      <Button
        tag={Link}
        to="/login"
        outline
        color="success"
        className="mt-2 mt-md-0 ml-md-2"
        onClick={() => props.display_form('login')}>
        {l10n('label.login')}
      </Button>
      <Button
        tag={Link}
        to="/register"
        outline
        color="info"
        className="mt-2 mt-md-0 ml-md-2"
        onClick={() => props.display_form('signup')}>
        {l10n('label.register')}
      </Button>
    </div>
  )

  const logged_in_nav = (
    <Button
      tag={Link}
      to="/logout"
      outline
      color="info"
      className="mt-2 mt-md-0 ml-md-2"
      onClick={props.handle_logout}>
      {l10n('label.logout')}
    </Button>
  )
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
            <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
}
