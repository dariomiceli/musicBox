import React from 'react'
import httpClient from '../httpClient'
import {Button} from 'react-materialize'

// sign up form behaves almost identically to log in form. 
// We could create a flexible Form component to use for both 
// actions, but for now we'll separate the two:
class SignUp extends React.Component {
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

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { firstName: '', lastName: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { firstName, lastName, email, password } = this.state.fields
		return (
			<div className='SignUp'>
        <h1>Sign Up</h1>
        <div className="signup-form-holder">
          <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
          <div class="row">
            <div class="input-field col s6">
            <input type="text" placeholder="Name" name="firstName" value={firstName} />
            </div>
            <div class="input-field col s6">
            <input type="text" placeholder="Last Name" name="lastName" value={lastName} />
            </div>
            </div>
            <input type="text" placeholder="Email" name="email" value={email} />
            <input type="password" placeholder="Password" name="password" value={password} />
            <button className="btn">Sign Up</button>
          </form>
        </div>
			</div>
		)
	}
}

export default SignUp