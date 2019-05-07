import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './profile.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profilePic: null,
      items: [],
      users: []
    }
    this.inputElement = null
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getItems()
  }

  getItems() {
    fetch('/accounts/images/')
      .then(results => results.json())
      .then(results => this.setState({ items: results }))
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
        <div className="row">
          {this.state.users.map(function(user, index) {
            return <div className="column">{user.username}</div>
          })}
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
          <p className="description">
            *Dupa incarcarea pozelor, faceti refresh la pagina!{' '}
          </p>
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
              Incarca
            </Button>

            <div className="row">
              {this.state.items.map(function(item, index) {
                return (
                  <div className="column">
                    <img width="100%" alt="" src={item.image} />
                  </div>
                )
              })}
            </div>
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
