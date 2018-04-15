import React from 'react'
import httpClient from '../httpClient'
import {Button, Input} from 'react-materialize'
import { Redirect } from 'react-router-dom';

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
      this.props.history.push('/boxes')
    })
  }

  render() {
    const { name } = this.state.fields
    return (
      <div className="add-box-container white-text">
        <form onChange={this.onFormChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}>
            <h4>Name your box:</h4>
            <div className="input-field inline">
              <Input type="text" placeholder="Box Name" id="box-name" name = "name" value={name}/>
              <Button className="z-depth-0 white black-text button-outline">Create Box</Button>
            </div>
        </form>
      </div>
    )
  }
}

export default NewBox