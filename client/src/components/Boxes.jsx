import React from 'react'
import httpClient from '../httpClient'
import { Row, Col, Card, CardPanel, CardTitle, Icon } from 'react-materialize'


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
      <div className="bars">
      <h2>Your Boxes</h2><i className="edit"></i>
        {boxes.map((b) => {
          return (
            <Row>
              <div><h4>{b.name}</h4></div>
              <Col m={3}>
                <CardPanel className="z-depth-0 white lighten-4 black-text">
                  <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                </CardPanel>
              </Col>

              <Col  m={3}>
                <CardPanel className="teal lighten-4 black-text">
                  <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
              </CardPanel>
              </Col>

              <Col  m={3}>
                <CardPanel className="teal lighten-4 black-text">
                  <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
              </CardPanel>
              </Col>

              <Col  m={3}>
                <CardPanel className="teal lighten-4 black-text">
                  <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
              </CardPanel>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}

export default Boxes