import React from 'react' 
import httpClient from '../httpClient.js'
import { Row, Input, Button, Modal } from 'react-materialize'

class SignUpLogIn extends React.Component {
  state = {
    fields: { firstName: '', lastName: '', email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onLogInFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '', firstName: '', lastName: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
  }

	onSignUpFormSubmit(evt) {
    evt.preventDefault()

		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { firstName: '', lastName: '', email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}

  render() {
    const {firstName, lastName, email, password} = this.state.fields
    return (
      <div className="sign-up-log-in-holder">
        <Modal
          trigger={<Button className="z-depth-0 light-blue accent-2" waves="light">Log In</Button>}>
            <Row>
              <h1>Log In</h1>
              <form onChange={this.onInputChange.bind(this)} onSubmit={this.onLogInFormSubmit.bind(this)}>
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
              <form onChange={this.onInputChange.bind(this)} onSubmit={this.onSignUpFormSubmit.bind(this)}>
                <Input s={6} type="text" label="First Name" name="firstName" value={firstName} />
                <Input s={6} type="text" label="Last Name" name="lastName" value={lastName} />
                <Input s={12} type="email" label="Email" name="email" value={email} id="email" className="validate" />
                <Input s={12} type="password" label="Password" name="password" value={password} />
                {/* <form action="#">
                  <div class="file-field input-field">
                    <div class="btn z-depth-0 black-text transparent">
                      <span>Upload</span>
                      <input className="file-submit" type="file" />
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text" placeholder="Profile Picture" />
                    </div>
                  </div>
                </form>*/}
                <Button className="z-depth-0 black-text transparent">Make Account</Button>
              </form>
            </Row>
        </Modal>
      </div>
    )
  }
}

export default SignUpLogIn