import React from 'react'
import httpClient from '../httpClient.js'
import { Row, Col, CardPanel, Link } from 'react-materialize'

class UserProfile extends React.Component {

  state = {
    user: null,
    boxes: null
  }

  componentDidMount() {
    httpClient.getUser(this.props.match.params.id).then((serverResponse) => {
      this.setState({
        user: serverResponse.data
      })
    })
    // httpClient.getBoxes().then((serverResponse) => {
    //   this.setState({
    //     boxes: serverResponse.data
    //   })
    // })
  }

  render(){
    const { user, boxes } = this.state
    if(!user || !boxes) return <h1>Loading...</h1>
    return(
      <div className='user-profile'>
        <h1>{user.firstName}</h1>
        <div className="signup-form-holder">
          <form>
            <div class="row">
              <div class="input-field col s6">
                <input type="text" placeholder="Name" name="firstName" />
              </div>
              <div class="input-field col s6">
                <input type="text" placeholder="Last Name" name="lastName" />
              </div>
            </div>
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button className="btn">Update</button>
          </form>
        </div>
      <div className="boxes">
      <h2>Your Boxes</h2>
        {boxes.map((b) => {
          return (
            <Row>
              <div><Link to={`/boxes/${b._id}`}><h4>{b.name}</h4></Link></div>
              <Col m={3}>
                <CardPanel className="z-depth-0 white lighten-4 black-text">
                  <span>Add an artist, track or album!</span>
                </CardPanel>
              </Col>

              <Col  m={3}>
                <CardPanel className="teal lighten-4 black-text">
                  <span>Empty</span>
              </CardPanel>
              </Col>

              <Col  m={3}>
                <CardPanel className="teal lighten-4 black-text">
                  <span>Empty</span>
                </CardPanel>
              </Col>

              <Col  m={3}>
                <CardPanel className="teal lighten-4 black-text">
                  <span>Empty</span>              
                </CardPanel>
              </Col>
            </Row>
          )
        })}
      </div>



			</div>
    )
  }
}

export default UserProfile