import React from 'react'
import httpClient from '../httpClient.js'
import { Row, Col, Button, Preloader, Input, Icon } from 'react-materialize'


class BoxDetail extends React.Component {

  state = {
    box: null,
    trackDetails: null,
    form: false,
    track: null
  }

  showSearchInput(trackNum) {
    this.setState((prevState) => {
      return {
        form: prevState.track === trackNum ? !prevState.form : true,
        track: trackNum
      }
    })
  }

  handleDeleteClick() {
    httpClient.deleteBox(this.props.match.params.id).then((serverResponse) => {
      this.props.history.push('/boxes')
    })
  }

  handleEditFormClick(evt) {
    evt.preventDefault()
    const {name} = this.refs
    const boxFormFields = {
      name: name.refs.name.value
    }

    httpClient.updateBox(this.props.match.params.id, boxFormFields).then((serverResponse) => {
      this.setState({
        box: serverResponse.data.box
      })
    })
  }

  componentDidMount() {
    httpClient.getOneBox(this.props.match.params.id).then((serverResponse) => {
      this.setState({
        box: serverResponse.data
      })
    })
  }

  render(){
    const {box, form, track} = this.state
    if(!box) return <Col s={4}><Preloader size='big'/></Col>
    return (
      <div>
        <div className="box-container">
          <Row>
            <h3>{box.name}</h3>
            {/* 1st track */}
            <Col  m={3}>
              <div className="row">
                <div className="col s12 m12">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/sample-1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      {box.track1
                        ? (
                          <h5>{box.track1.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                      <a onClick={this.showSearchInput.bind(this, 1)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    {box.track1
                      ? (
                        <span className="card-title black-text artist-name">{box.track1.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
                  {form && track === 1
                    ? (
                      <div>
                        <Input s={12} label="Track Name" validate></Input>
                        <Button></Button>
                        </div>
                    )
                    : null
                  }
              </div>
            </Col>
            {/* 2nd track */}
            <Col  m={3}>
              <div className="row">
                <div className="col s12 m12">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/sample-1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      {box.track2
                        ? (
                          <h5>{box.track2.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                      <a onClick={this.showSearchInput.bind(this, 2)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    {box.track2
                      ? (
                        <span className="card-title black-text artist-name">{box.track2.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
                {form && track === 2
                    ? (
                      <Input s={12} label="Track Name" validate></Input>
                    )
                    : null
                  }
              </div>
            </Col>
            {/* 3rd track */}
            <Col  m={3}>
              <div className="row">
                <div className="col s12 m12">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/sample-1.jpg"  alt=""/>
                    </div>
                    <div className="card-content">
                      {box.track3
                        ? (
                          <h5>{box.track3.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                      
                      <a onClick={this.showSearchInput.bind(this, 3)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    {box.track3
                      ? (
                        <span className="card-title black-text artist-name">{box.track3.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
                {form && track === 3
                    ? (
                      <Input s={12} label="Track Name" validate></Input>
                    )
                    : null
                  }
              </div>
            </Col>
            {/* 4th track */}
            <Col  m={3}>
              <div className="row">
                <div className="col s12 m12">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/sample-1.jpg" alt=""/>
                    </div>
                    <div className="card-content">
                      {box.track4
                        ? (
                          <h5>{box.track4.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                      
                      <a onClick={this.showSearchInput.bind(this, 4)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    {box.track4
                      ? (
                        <span className="card-title black-text artist-name">{box.track4.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
                {form && track === 4
                    ? (
                      <Input s={12} label="Track Name" validate></Input>
                    )
                    : null
                  }
              </div>
            </Col>
          </Row>
        </div>
        {/* <Button onClick={this.handleEditClick.bind(this)}>Edit</Button> */}
        <Button onClick={this.handleDeleteClick.bind(this)}>Delete</Button>
      </div>
    )
  }
}

export default BoxDetail





