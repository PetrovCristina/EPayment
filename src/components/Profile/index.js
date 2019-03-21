import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../Header/logo.png'
import './profile.css'
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
import { Redirect } from 'react-router'
import { l10n } from '../../l10n'
import Avatar from 'react-avatar'

export default class Profile extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })
  render() {
    return (
      <div>
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
                    {l10n('languages.ro')}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>{l10n('languages.en')}</DropdownItem>
                    <DropdownItem>{l10n('languages.ru')}</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <Button variant="primary" type="submit">
                  Iesire
                </Button>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <div className="clearfix">
          <Avatar
            className="avatar"
            facebookId="100002063356654"
            size="80"
            round="50%"
          />
          <p className="welcome">Bine ai venit!</p>
        </div>
        <div className="operations">
          <Button outline color="success" className="pay">
            <FontAwesomeIcon className="icon" icon="file-invoice-dollar" />
            Efectueaza plati
          </Button>
          <Button outline color="success" className="pay">
            <FontAwesomeIcon className="icon" icon="sync-alt" />
            Schimba valuta
          </Button>
          <Button outline color="success" className="pay">
            <FontAwesomeIcon className="icon" icon="file-word" />
            Retrage bani
          </Button>
          <Button outline color="success" className="pay">
            <FontAwesomeIcon className="icon" icon="handshake" />
            Transfera bani
          </Button>
          <Button outline color="success" className="pay">
            <FontAwesomeIcon className="icon" icon="sort-amount-up" />
            Suplineste contul
          </Button>
        </div>
        <div>
          <p className="images">Imagini</p>
          <p className="description">
            Aici vei incarca pozele (de la 2 pina la 4) pentru autentificarea
            beneficiarului prin recunoastere faciala:
          </p>
          <ul className="restrictions">
            <li>cerinta 1</li>
            <li>cerinta 2</li>
            <li>cerinta 3</li>
          </ul>
        </div>
        <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
          <hr />
          <MDBContainer className="text-center text-md-left">
            <MDBRow className="text-center text-md-left mt-3 pb-3">
              <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  MoneyPay
                </h6>
                <p>
                  Acum achitarea serviciilor va fi mai usoara, mai rapida si mai
                  accesibila! Achita cu MoneyPay!
                </p>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Servicii
                </h6>
                <p>
                  <a href="#!">Telefonie mobila</a>
                </p>
                <p>
                  <a href="#!">Internet</a>
                </p>
                <p>
                  <a href="#!">Televiziune</a>
                </p>
                <p>
                  <a href="#!">Servicii comunale</a>
                </p>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Link-uri utile
                </h6>
                <p>
                  <a href="#!">Pagina de profil</a>
                </p>
                <p>
                  <a href="#!">Intrebari frecvente</a>
                </p>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contacteaza-ne
                </h6>
                <p>
                  <FontAwesomeIcon icon="home" /> Republica Moldova, Chisinau
                </p>
                <p>
                  <FontAwesomeIcon icon="envelope" /> moneypay@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon="phone" /> + 373 123 456 78
                </p>
              </MDBCol>
            </MDBRow>
            <hr />
          </MDBContainer>
        </MDBFooter>
      </div>
    )
  }
}
