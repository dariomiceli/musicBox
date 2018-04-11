import React from 'react'
import httpClient from '../httpClient'
import { Link } from 'react-router-dom'
import { Row, Col, CardPanel } from 'react-materialize'


class Boxes extends React.Component {
  // empty initial state
  state = {
    boxes: []
  }

  componentDidMount(){
    // make api call to get bars:
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
        {boxes.map((b) => {
          return (
            <Row>
              <div><Link to={`/boxes/${b._id}`}><h4>{b.name}</h4></Link></div>
              <Col  m={3}>
              <div className="row">
                <div className="col s12 m12">
                  <div className="card">
                    <div className="card-image">
                      <img src="images/sample-1.jpg" alt="" />
                    </div>
                    <div className="card-content">
                      {b.track1
                        ? (
                          <h5>{b.track1.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                    </div>
                    {b.track1
                      ? (
                        <span className="card-title black-text artist-name">{b.track1.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
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
                      {b.track2
                        ? (
                          <h5>{b.track2.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                    </div>
                    {b.track2
                      ? (
                        <span className="card-title black-text artist-name">{b.track2.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
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
                      {b.track3
                        ? (
                          <h5>{b.track3.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                    </div>
                    {b.track3
                      ? (
                        <span className="card-title black-text artist-name">{b.track3.artist}</span>
                      )
                      : null
                      }
                  </div>
                </div>
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
                      {b.track4
                        ? (
                          <h5>{b.track4.name}</h5>
                        )
                        : <h5>Add an artist, album or track!</h5>
                      }
                    </div>
                    {b.track4
                      ? (
                        <span className="card-title black-text artist-name">{b.track4.artist}</span>
                      )
                      : null
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