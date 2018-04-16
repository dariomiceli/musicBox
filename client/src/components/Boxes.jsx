import React from 'react'
import httpClient from '../httpClient'
import { Link } from 'react-router-dom'
import { Row, Col} from 'react-materialize'
import defaultTrackPic from './default-track-pic.png'


class Boxes extends React.Component {
  // empty initial state
  state = {
    user: null,
    boxes: []
  }

  componentDidMount(){
    httpClient.getBoxes().then((serverResponse) => {
      this.setState({
        boxes: serverResponse.data
      })
    })
  }

  render() {
    const {boxes} = this.state
    return(
      <div className="boxes">
      <h2>Your Boxes</h2>
      <hr />
        {boxes.map((b) => {
          return (
            <Row key={b._id}>
              <div><Link to={`/boxes/${b._id}`}><h4>{b.name}</h4></Link></div>
              <Col  m={3}>
              <div className="row">
                <div className="card z-depth-0 transparent white-text">
                  <div className="card-image">
                    {b.track1
                        ? (
                          <img src={b.track1.picture} alt="" />
                        )
                        : <img src={defaultTrackPic} alt="" />
                      }
                  </div>
                  <div className="card-content">
                    {b.track1
                      ? (
                        <div>
                        <h5>{b.track1.name}</h5>
                        <span className="card-title white-text artist-name">{b.track1.artist}</span>
                        </div>
                      )
                      : <h5>Add an artist, album or track!</h5>
                    }
                  </div>
                </div>
              </div>
            </Col>
            {/* 2nd track */}
            <Col  m={3}>
              <div className="row">
                <div className="card z-depth-0 transparent white-text">
                  <div className="card-image">
                    {b.track2
                        ? (
                          <img src={b.track2.picture} alt="" />
                        )
                        : <img src={defaultTrackPic} alt="" />
                      }
                  </div>
                  <div className="card-content">
                    {b.track2
                      ? (
                        <div>
                        <h5>{b.track2.name}</h5>
                        <span className="card-title white-text artist-name">{b.track2.artist}</span>
                        </div>
                      )
                      : <h5>Add an artist, album or track!</h5>
                    }
                  </div>
                </div>
              </div>
            </Col>
            {/* 3rd track */}
            <Col  m={3}>
              <div className="row">
                <div className="card z-depth-0 transparent white-text">
                  <div className="card-image">
                    {b.track3
                        ? (
                          <img src={b.track3.picture} alt="" />
                        )
                        : <img src={defaultTrackPic} alt="" />
                      } 
                  </div>
                  <div className="card-content white-text">
                    {b.track3
                      ? (
                        <div>
                        <h5>{b.track3.name}</h5>
                        <span className="card-title white-text artist-name">{b.track3.artist}</span>
                        </div>
                      )
                      : <h5>Add an artist, album or track!</h5>
                    }
                  </div>
                </div>
              </div>
            </Col>
            {/* 4th track */}
            <Col  m={3}>
              <div className="row">
                <div className="card z-depth-0 transparent white-text">
                  <div className="card-image">
                    {b.track4
                        ? (
                          <img src={b.track4.picture} alt="" />
                        )
                        : <img src={defaultTrackPic} alt="" />
                      }
                  </div>
                  <div className="card-content">
                    {b.track4
                      ? (
                        <div>
                        <h5>{b.track4.name}</h5>
                        <span className="card-title white-text artist-name">{b.track4.artist}</span>
                        </div>
                      )
                      : <h5>Add an artist, album or track!</h5>
                    }
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          )
        })}
      </div>
    )
  }
}

export default Boxes