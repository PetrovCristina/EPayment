/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import './faq.css'
class FAQ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <div>
        <h2>Intrebari frecvente</h2>

        <div>
          <Button
            color="success"
            outline
            onClick={this.toggle}
            className="description">
            Care este destinatia MoneyPay?
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}>
            <ModalBody>
              MoneyPay a fost creat pentru simplificarea modului de achitare a
              platilor comunale. Astfel, nu veti mai fi nevoiti sa stati in
              rind, sau sa va grabiti sa achitati serviciile comunale la o data
              anumita. Datorita MoneyPay, veti putea achita serviciile comunale
              simplu, rapid, si cel mai important - sigur. Acum achitarea
              serviciilor va fi mai usoara, mai rapida si mai accesibila! Achita
              cu MoneyPay!
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Inchide
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div>
          <Button
            color="success"
            outline
            onClick={this.toggle}
            className="description">
            Ce servicii pot fi achitate prin intermediul MoneyPay?
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}>
            <ModalBody>dfgrtfyhrthtyf</ModalBody>
            <ModalFooter>
              <Button color="secondary" outline onClick={this.toggle}>
                Inchide
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div>
          <Button
            color="success"
            outline
            onClick={this.toggle}
            className="description">
            Cum ma pot inregistra in sistem?
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" outline onClick={this.toggle}>
                Inchide
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div>
          <Button
            color="success"
            outline
            onClick={this.toggle}
            className="description">
            Cum sunt securizate tranzactiile efectuate?
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" outline onClick={this.toggle}>
                Inchide
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div>
          <Button
            color="success"
            outline
            onClick={this.toggle}
            className="description">
            Ce date este necesar de a oferi la inregistrare?
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" outline onClick={this.toggle}>
                Inchide
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    )
  }
}

export default FAQ
