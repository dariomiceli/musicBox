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
      this.props.history.push("/boxes")
    })
  }

  render() {
    const { name } = this.state.fields
    return (
      <div className="add-box-container">
        <form onChange={this.onFormChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}>
            <h4>Name</h4>
            <Input type="text" placeholder="Rainy Day" id="nameField" name = "name" value={name}/>
            <Button className="button button-outline">Create Box</Button>
        </form>
      </div>
    )
  }
}

export default NewBox