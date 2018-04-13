import React from 'react'
import { Link } from 'react-router-dom'
import { SideNav, Button, SideNavItem } from 'react-materialize'
import defaultPic from './default-user-pic.png'

const Navbar = (props) => {
  const { currentUser, boxes } = props
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
                <li><Link to={`/users/${currentUser._id}`}>{currentUser.firstName} {currentUser.lastName}</Link></li>
                <li><Link to="/boxes">All Boxes</Link></li>
                {/* {boxes.map((b) => {
                  return <li><Link to="/logout">{b.name}</Link></li>
                })} */}
                <li><Link to="/boxes/new">Add Box</Link></li>
                <li><Link to="/logout">Log Out</Link></li>
                <SideNavItem className="userView" userView
                  user={{
                  background: defaultPic
                  }}
                />
              </SideNav>
            )
            : null
          }    
        </div>
      </div>
    )
}

export default Navbar


