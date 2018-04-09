import React from 'react' 
import Boxes from './Boxes.jsx'

class Home extends React.Component {

  state = {
    showModal: false
  }
  handleHideModalClick() {
    this.setState({
      showModal: false
    })
  }

  handleShowModalClick(h) {
    this.setState({
      showModal: true
    })
  }

  render() {
    return (
      <div>
      <h2>Your boxes</h2>
      <Boxes />
      </div>
    )
  }
  
}

export default Home