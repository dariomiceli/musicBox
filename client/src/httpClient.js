import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function(id) {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}

httpClient.getUser = function(id) {
  return this({method: 'get', url: `/api/users/${id}`})
}

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

httpClient.addBox = function(boxInfo) {
  return this({method: 'post', url: '/api/boxes', data: boxInfo})
}

httpClient.getBoxes = function() {
  return this({method: 'get', url: '/api/boxes'})
}

httpClient.getOneBox = function(id) {
  return this({method: 'get', url: `/api/boxes/${id}`})
}

httpClient.updateBox = function(id, fields) {
  return this({method: 'patch', url: `/api/boxes/${id}`, data: fields})
}

httpClient.deleteBox = function(id) {
  return this({method: 'delete', url: `/api/boxes/${id}`})
}

httpClient.getTrack = function(trackName){
  return this({method: 'get', url: `/api/search/${trackName}`})
}

// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient