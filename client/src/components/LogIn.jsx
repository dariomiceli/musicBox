import React from 'react'
import httpClient from '../httpClient'
import {Row, Button, Input} from 'react-materialize'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
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
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<Row>
          <h1>Log In</h1>
          <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
            <Input name="email" type="email" label="Email" s={12} value={email} icon="email"/>
            <Input name="password" type="password" label="password" s={12} value={password} icon="donut_large" />
            <Button className="z-depth-0 light-blue accent-2" waves='light'>button</Button>
          </form>
        </Row>
			</div>
		)
	}
}

export default LogIn