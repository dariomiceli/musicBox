import React from 'react'
import httpClient from '../httpClient.js'
import { Row, Col, Button, Preloader, Input, Modal } from 'react-materialize'
import defaultTrackPic from './default-track-pic.png'


class BoxDetail extends React.Component {

  state = {
    box: null,
    trackDetails: null,
    form: false,
    track: null,
    searchResults: []
  }

  showSearchInput(trackNum) {
    this.setState((prevState) => {
      return {
        form: prevState.track === trackNum ? !prevState.form : true,
        track: trackNum
      }
    })
  }

  handleSearchResultClick(track){
    // take 'track' info and pass to httpClient to send in patch request
    const trackData= {}
    trackData['track'+this.state.track] = {
      name: track.name,
      aritst: track.artists[0].name,
      picture: track.album.images[1].url,
      link: track.external_urls.spotify
    }
    httpClient.updateBox(this.props.match.params.id, trackData).then(spotifyResponse => {
      this.setState({
        trackDetails: trackData
      }, () => {
        window.$('#search-results').modal('close')
        console.log(track)
        console.log(trackData)
      })
    })
  }

  handleTrackSearch(evt) {
    evt.preventDefault()
    httpClient.getTrack(evt.target[0].value).then(serverResponse => {
      this.setState({
        // box: [
        //   {artist: serverResponse.data.tracks.items["0"].artists["0"].name},
        //   {trackName: serverResponse.data.tracks.items["0"].artists["0"].name}
        // ],
        searchResults: serverResponse.data.tracks.items
      }, () => {
        window.$('#search-results').modal('open')
      })
    })
  }

  handleDeleteClick() {
    httpClient.deleteBox(this.props.match.params.id).then((serverResponse) => {
      this.props.history.push('/boxes')
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
                      {box.picture
                        ? (
                          <img src={this.state.box.track1.picture} alt="" />
                        )
                        : <img src={defaultTrackPic} alt="" />
                      }
                    </div>
                    <div className="card-content">
                      {/* Shows the track name or add-track message */}
                      {box.track1
                        ? (
                          <h5>{this.state.box.track1.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                      <a onClick={this.showSearchInput.bind(this, 1)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    {/* Shows track 1 artist */}
                    {box.track1
                      ? (
                        <span className="card-title black-text artist-name">{box.track1.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
                {/* Shows search-track input */}
                {form && track === 1
                  ? (
                    <form onSubmit={this.handleTrackSearch.bind(this)}>
                      <Input s={12} ref="trackName" label="Track Name"></Input>
                    </form>
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
                      {box.picture
                        ? (
                          <img src={this.state.box.track2.picture} alt="" />
                        )
                        : <img src={defaultTrackPic} alt="" />
                      }
                    </div>
                    <div className="card-content">
                      {/* Shows the track name or add-track message */}
                      {box.track2
                        ? (
                          <h5>{box.track2.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                      <a onClick={this.showSearchInput.bind(this, 2)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    {/* Shows track 2 aritist */}
                    {box.track2
                      ? (
                        <span className="card-title black-text artist-name">{box.track2.artist}</span>
                      )
                      : null
                    }
                  </div>
                </div>
                  {/* Shows search-track input */}
                  {form && track === 2
                    ? (
                      <form onSubmit={this.handleTrackSearch.bind(this)}>
                        <Input s={12} label="Track Name" validate></Input>
                      </form>                   
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
                      {box.picture
                        ? (
                          <img src={this.state.box.track1.picture} alt="" />
                        )
                        : <img src={defaultTrackPic} alt="" />
                      }
                    </div>
                    <div className="card-content">
                      {/* Shows the track name or add-track message */}
                      {box.track3
                        ? (
                          <h5>{box.track3.name}</h5>
                          )
                        : <h5>Add an artist, album or track!</h5>
                      }
                      <a onClick={this.showSearchInput.bind(this, 3)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    {/* Shows track 3 artist */}
                    {box.track3
                      ? (
                        <span className="card-title black-text artist-name">{box.track3.artist}</span>
                        )
                      : null
                    }
                  </div>
                </div>
                {/* Shows the track-search input */}
                {form && track === 3
                    ? (
                      <form>
                        <Input s={12} label="Track Name" validate></Input>
                      </form>
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
                      {box.picture
                        ? (
                          <img src={this.state.box.track1.picture} alt="" />
                        )
                        : <img src={defaultTrackPic} alt="" />
                      }
                    </div>
                    <div className="card-content">
                      {/* Shows the track name or add-track message */}
                      {box.track4
                        ? (
                          <h5>{box.track4.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                      <a onClick={this.showSearchInput.bind(this, 4)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                     {/* Shows track 4 artist */}
                    {box.track4
                      ? (
                        <span className="card-title black-text artist-name">{box.track4.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
                {/* Shows the track-search input */}
                {form && track === 4
                    ? (
                      <form>
                      <Input s={12} label="Track Name" validate></Input>
                      </form>
                    )
                    : null
                  }
              </div>
            </Col>
          </Row>
        </div>
        {/* <Button onClick={this.handleEditClick.bind(this)}>Edit</Button> */}
        <Modal
          actions={<Button className="z-depth-0 light-blue accent-2">No</Button>}
          trigger={<Button className="z-depth-0 light-blue accent-2">Click here to delete</Button>}>
          <span>You want to delete your {box.name} box?</span><br />
          <Button className="z-depth-0 light-blue accent-2" onClick={this.handleDeleteClick.bind(this)}>Yes!</Button>
        </Modal>

        <Modal id="search-results">
          {this.state.searchResults.map((s) => {
            return (
            <div className="search-result" onClick={this.handleSearchResultClick.bind(this, s)}>{s.name}</div>
            )
          })}
        </Modal>
      </div>
    )
  }
}

export default BoxDetail





