import React from 'react'
import { Link } from 'react-router-dom'
import { SideNav, Button, SideNavItem } from 'react-materialize'
import brunoPic from './bruno.jpeg'

const Navbar = (props) => {
  const { currentUser } = props
    return (
      <div className="nav-bar">
        <div className="nav-bar-dropdown">
          {currentUser
            ? (
              <SideNav
                trigger={<Button className="z-depth-0 light-blue accent-1 btn-large" 
                waves='light'>{currentUser.firstName} {currentUser.lastName}</Button>}
                options={{ closeOnClick: true }}
              >
                <SideNavItem className="userView" userView
                  user={{
                  background: brunoPic,
                  name: `${currentUser.firstName} ${currentUser.lastName}`,
                  email: `${currentUser.email}`
                  }}
                />
                <SideNavItem className="MaterialSideNav"><Link to="/users/{5acbd7c37490814e865dc986}">Profile</Link></SideNavItem>
                <SideNavItem className="MaterialSideNav"><Link to="/boxes">All Boxes</Link></SideNavItem>
                <SideNavItem className="MaterialSideNav"><Link to="/logout"> - box 1</Link></SideNavItem>
                <SideNavItem className="MaterialSideNav"><Link to="/logout"> - box 2</Link></SideNavItem>
                <SideNavItem className="MaterialSideNav"><Link to="/logout"> - box 3</Link></SideNavItem>
                <SideNavItem className="MaterialSideNav"><Link to="/boxes/new">Add Box</Link></SideNavItem>
                <SideNavItem className="MaterialSideNav"><Link to="/logout">Log Out</Link></SideNavItem>
              </SideNav>
            )
            : null
          }    
        </div>
      </div>
    )
}

export default Navbar


