import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import httpClient from './httpClient';
import './index.css'

// Component Imports
import Navbar from './components/Navbar.jsx'
import Boxes from './components/Boxes.jsx'
import NewBox from './components/newBox.jsx'
import BoxDetail from './components/BoxDetail.jsx'
import UserProfile from './components/UserProfile.jsx'
import LogOut from './components/LogOut.jsx'
import SignUpLogIn from './components/SignUpLogIn.jsx'

class App extends Component {
  state = { 
    currentUser: httpClient.getCurrentUser(),
    boxes: httpClient.getBoxes()
  }

	onLoginSuccess(user) {
		this.setState({currentUser: httpClient.getCurrentUser()})
  }

  logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}
  
  render() {
    const { currentUser, boxes } = this.state
    return (
      <div className="App">
      <Navbar currentUser={currentUser} boxes={boxes}/>
      <div className="App container">
        
        
        <Switch>

          <Route path="/login" render={(props) => {
						return <SignUpLogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

          <Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

          <Route path="/users/:id" render={(props) => {
            return <UserProfile {...props} currentUser={currentUser} />
            }} />

          <Route path="/boxes/new" render={(routeProps) => {
            return currentUser
            ? <NewBox {...routeProps} />
            : <Redirect to="/login" />
          }} />

          <Route path='/boxes/:id' component={BoxDetail} />
          
          <Route path="/" render={(routeProps) => {
            return currentUser
            ? <Boxes />
            : <Redirect to="/login" />
          }} />

        </Switch>
      </div>
      </div>
    )
  }
}

export default App;