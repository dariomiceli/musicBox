import React from 'react' 
import httpClient from '../httpClient.js'
import { Row, Input, Button, Modal } from 'react-materialize'

class SignUpLogIn extends React.Component {
  state = {
    logInFields: { email: '', password: ''},
    signUpFields: { firstName: '', lastName: '', signUpEmail: '', signUpPassword: ''}
	}

	onLogInInputChange(evt) {
		this.setState({
			logInFields: {
				...this.state.logInFields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onLogInFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.logInFields).then(user => {
			this.setState({ logInfields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
  }
  
  onSignUpInputChange(evt) {
		this.setState({
			signUpFields: {
				...this.state.signUpFields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onSignUpFormSubmit(evt) {
		evt.preventDefault()
		httpClient.signUp(this.state.signUpFields).then(user => {
			this.setState({ signUpFields: { firstName: '', lastName: '', signUpEmail: '', signUpPassword: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}

  render() {
    const {email, password} = this.state.logInFields
    const {firstName, lastName, signUpEmail, signUpPassword} = this.state.signUpFields
    return (
      <div className="sign-up-log-in-holder">
        <Modal
          trigger={<Button className="z-depth-0 light-blue accent-2" waves="light">Log In</Button>}>
            <Row>
              <h1>Log In</h1>
              <form onChange={this.onLogInInputChange.bind(this)} onSubmit={this.onLogInFormSubmit.bind(this)}>
                <Input type="email" name="email" label="Email" s={12} value={email} icon="email"/>
                <Input type="password" name="password" label="password" s={12} value={password} icon="donut_large" />
                <Button className="z-depth-0 light-blue accent-2" waves='light'>button</Button>
              </form>
            </Row>
        </Modal>
         <h4><hr></hr></h4>
        <Modal
          trigger={<Button className="z-depth-0 light-blue accent-2" waves="light">Sign Up</Button>}>
            <h1>Sign Up</h1>
            <Row className="signup-form-holder">
              <form onChange={this.onSignUpInputChange.bind(this)} onSubmit={this.onSignUpFormSubmit.bind(this)}>
                <Input s={6} type="text" label="First Name" name="firstName" value={firstName} />
                <Input s={6} type="text" label="Last Name" name="lastName" value={lastName} />
                <Input s={12} type="email" label="Email" name="signUpEmail" value={signUpEmail} id="email" className="validate" />
                <Input s={12} type="password" label="Password" name="signUpPassword" value={signUpPassword} />
                <Button className="z-depth-0 light-blue accent-2">Make Account</Button>
              </form>
            </Row>
        </Modal>
      </div>
    )
  }
  
}

export default SignUpLogIn