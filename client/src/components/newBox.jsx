import React from 'react'
import httpClient from '../httpClient'
import {Button, Input} from 'react-materialize'

class NewBox extends React.Component {

  state = {
    fields: {name: ''}
  }

  onFormChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }
                 
  handleFormSubmit(evt) {
    evt.preventDefault()
    httpClient.addBox(this.state.fields).then((serverResponse) => {
      // send users to new box page
      this.props.history.push("/boxes")
    })
  }

  render() {
    const { name } = this.state.fields
    return (
      <div className="add-box-container">
        <form onChange={this.onFormChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}>
            <h4>Name</h4>
            I'll use this box while I am
            <div class="input-field inline s12">
            <Input type="text" placeholder="Studying, Jogging, etc." id="box-name" name = "name" value={name}/>
            <Button className="z-depth-0 light-blue accent-2 button-outline">Create Box</Button>
            </div>
        </form>
      </div>
    )
  }
}

export default NewBox