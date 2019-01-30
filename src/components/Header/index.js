import React from "react";
import logo from "./logo.png";
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
} from "reactstrap";

import { l10n } from "../../l10n";

export default class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={logo} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret nav>
                  {l10n("languages.ro")}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>{l10n("languages.en")}</DropdownItem>
                  <DropdownItem>{l10n("languages.ru")}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Button outline color="info" className="mt-2 mt-md-0 ml-md-2">
                {l10n("label.register")}
              </Button>
              <Button outline color="success" className="mt-2 mt-md-0 ml-md-2">
                {l10n("label.login")}
              </Button>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
