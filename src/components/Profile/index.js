import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './profile.css'
import { Button } from 'reactstrap'
import Avatar from 'react-avatar'
import PropTypes from 'prop-types'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profilePic: null,
      username: []
    }
    this.inputElement = null
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    fetch('/accounts/list', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ username: data })
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
          <p className="welcome">
            Bine ai venit,
            {this.state.username}
          </p>
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

Profile.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
