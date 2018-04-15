import React from 'react'
import { Link } from 'react-router-dom'
import { SideNav, Button, SideNavItem } from 'react-materialize'
import defaultPic from './default-user-pic.png'

const Navbar = (props) => {
  console.log(props.boxes)
  const { currentUser, boxes } = props
    return (
      <div className="nav-bar">
        <div className="nav-bar-dropdown">
          {currentUser
            ? (
              <SideNav
                trigger={<Button className="z-depth-0 transparent btn-large" 
                waves='light'>{currentUser.firstName} {currentUser.lastName}</Button>}
                options={{ closeOnClick: true }}
              >
                <li className="side-nav-links"><Link to="/"><h4>musicBox</h4></Link></li>
                <SideNavItem divider />
                <li className="side-nav-links"><Link to={`/users/${currentUser._id}`}>{currentUser.firstName} {currentUser.lastName}</Link></li>
                <li><Link to="/boxes">All Boxes</Link></li>
                {boxes.map((b) => {
                  return <li className="box-list"><Link to={`/boxes/${b._id}`}> - {b.name}</Link></li>
                })} 
                <li><Link to="/boxes/new">Add Box</Link></li>
                <li><Link to="/logout">Log Out</Link></li>
                {/* Profile picture */}
                {/* <SideNavItem className="userView" userView
                  user={{
                  background: defaultPic
                  }}
                /> */}
              </SideNav>
            )
            : null
          }
        </div>
      </div>
    )
}

export default Navbar