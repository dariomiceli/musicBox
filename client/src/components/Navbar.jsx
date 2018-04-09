import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Button, NavItem, Icon } from 'react-materialize'

const Navbar = (props) => {
    return (
      <div className="nav-bar">
        <div className="nav-bar-dropdown">
          <Dropdown trigger={
            <Button className="z-depth-0 light-blue accent-1 btn-large" waves='light' icon="">Dario Miceli</Button>
          }>
            <NavItem>Profile</NavItem>
            <NavItem><Link to={"/boxes/new"}>Add Box</Link></NavItem>
            <NavItem>Log Out</NavItem>
          </Dropdown>
        </div>
      </div>
    )
}

export default Navbar