import React from 'react'
import Webcam from 'react-webcam'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
class Verify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenshot: null,
      profilePic: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  screenshot() {
    var screenshot = this.refs.webcam.getScreenshot()
    this.setState({ screenshot: screenshot })
  }
  handleSubmit() {
    let formData = new FormData()
    formData.append('image', this.state.profilePic)
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
  render() {
    return (
      <div>
        <Webcam type="file" audio={false} ref="webcam" />
        <button onClick={this.screenshot.bind(this)}>Capture</button>
        {this.state.screenshot ? (
          <img src={this.state.screenshot} alt="" />
        ) : null}
        <Button
          onClick={this.handleSubmit}
          color="success"
          className="mt-2 mt-md-0 ml-md-2">
          Incarca
        </Button>
      </div>
    )
  }
}

export default Verify

Verify.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
