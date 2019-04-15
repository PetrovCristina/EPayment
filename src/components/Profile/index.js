import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './profile.css'
import { Button } from 'reactstrap'
import Avatar from 'react-avatar'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profilePic: null
    }
    this.inputElement = null
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('/accounts/images', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.text())
      .then(data => {
        console.log(data)
        this.setState({ images: data })
      })
  }

  handleChange(e) {
    this.setState({ profilePic: e.target.files[0] })
  }
  handleSubmit() {
    let formData = new FormData()
    formData.append('image', this.state.profilePic, this.state.profilePic.name)
    fetch('/accounts/images/', {
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
        <div className="clearfix">
          <Avatar
            className="avatar"
            facebookId="100002063356654"
            size="80"
            round="50%"
          />
          <p className="welcome">Bine ai venit</p>
        </div>
        <div className="operations">
          <Button
            outline
            color="success"
            className="pay"
            tag={Link}
            to="/plati">
            <FontAwesomeIcon className="icon" icon="file-invoice-dollar" />
            Efectueaza plati
          </Button>
          <Button
            outline
            color="success"
            className="pay"
            tag={Link}
            to="/valuta">
            <FontAwesomeIcon className="icon" icon="sync-alt" />
            Schimba valuta
          </Button>
          <Button
            outline
            color="success"
            className="pay"
            tag={Link}
            to="/transfera">
            <FontAwesomeIcon className="icon" icon="handshake" />
            Transfera bani
          </Button>
        </div>
        <div>
          <p className="images">Imagini</p>
          <p className="description">
            Aici veti incarca pozele (de la 2 pina la 4) pentru autentificarea
            prin recunoastere faciala.
          </p>
          <p className="description">Cerinte: </p>
          <ul className="restrictions">
            <li>Asigurati-va ca pozele sunt de calitate inalta.</li>
            <li>Incarcati poze in care iluminarea este foarte buna.</li>
            <li>In poze trebuie sa fie vazuta clar fata.</li>
            <li>Pozele trebuie sa fie in format ".jpg", ".jpeg" sau ".png".</li>
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
            <Button
              onClick={this.handleSubmit}
              color="success"
              className="mt-2 mt-md-0 ml-md-2">
              Submit
            </Button>
            {/*  <div>
              {images.map(i => (
                <img src={i.image} alt="" />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile

Profile.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
