import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './profile.css'
import { Button, Navbar, Container } from 'reactstrap'
import Avatar from 'react-avatar'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profilePic: null
    }
    this.inpuElement = null
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ profilePic: e.target.files[0] })
  }
  handleSubmit() {
    let formData = new FormData()
    formData.append('profile_pic', this.state.profilePic)
    fetch('http://127.0.0.1:8000/accounts/profile-pic/', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*'
      },
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

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
            <Button variant="primary" type="submit">
              Iesire
            </Button>
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
          <div>
            <input
              type="file"
              multiple={false}
              ref={input => {
                this.inputElement = input
              }}
              accept=".jpg,.jpeg,.png"
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
