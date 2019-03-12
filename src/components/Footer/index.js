import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <hr />
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">MoneyPay</h6>
            <p>
              Acum achitarea serviciilor va fi mai usoara, mai rapida si mai
              accesibila! Achita cu MoneyPay!
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Servicii</h6>
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
  )
}

export default Footer
