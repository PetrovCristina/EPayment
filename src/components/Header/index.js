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
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'

const Header = (handleSubmit, state, toggle) => {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.phone, values.password)
      }
    })
    this.props.history.push('/profile')
  }
  state = {
    isOpen: false
  }

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })
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
            <Button
              tag={Link}
              to="/register"
              outline
              color="info"
              className="mt-2 mt-md-0 ml-md-2">
              {l10n('label.register')}
            </Button>
            <Button
              tag={Link}
              to="/login"
              outline
              color="success"
              className="mt-2 mt-md-0 ml-md-2">
              {l10n('label.login')}
            </Button>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (phone, password) => dispatch(actions.authLogin(phone, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
