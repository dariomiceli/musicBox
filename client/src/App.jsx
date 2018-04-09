import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import httpClient from './httpClient';

// Component Imports
import LogIn from './components/LogIn.jsx'
import Home from './components/Home.jsx'
import SignUp from './components/SignUp.jsx'
import Navbar from './components/Navbar.jsx'
import Box from './components/Box.jsx'
import Boxes from './components/Boxes.jsx'
import NewBox from './components/newBox.jsx'

class App extends Component {
  state = { currentUser: httpClient.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
  }
  
  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
      <Navbar currentUser={currentUser}/>
      <div className="App container">
        
        
        <Switch>
        
          <Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} /> 

          <Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />

          <Route path="/boxes/new" render={(routeProps) => {
            return currentUser
            ? <NewBox {...routeProps} />
            : <Redirect to="/login" />
          }} />
          
          <Route path="/boxes" render={(props) => {
						return <Boxes />
					}} />

          <Route path="/" component={Home} />

        </Switch>
      </div>
      </div>
    )
  }
}

export default App;