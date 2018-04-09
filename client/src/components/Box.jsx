import React from 'react'
import { Row, Col, Card, CardPanel, CardTitle } from 'react-materialize'

class Box extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <div className="box-container">
          <Row>
            <h3>My Friday Box</h3>
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
        </div>

        <div className="box-container">
          <Row>
            <h3>My Road Trip Box</h3>
            <Col m={3}>
              <CardPanel className="z-depth-0 light-blue accent-2 lighten-4 black-text">
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
        </div>
      </div>
    )
  }
}

export default Box