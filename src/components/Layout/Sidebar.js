import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import SidebarItem from '../SidebarItems/SidebarItem'
function Sidebar() {
    return (
        <div className='col s2 sidebar z-depth-5'>
            <div className="logo">
                <img src={logo} alt="logo"  />
            </div> 
          <NavLink to='/chicken'><SidebarItem title={'meat lovers'}/></NavLink>
          <NavLink to='/chinese'><SidebarItem title={'chinese'}/></NavLink>
          <NavLink to='/vegan'><SidebarItem title={'vegan'}/></NavLink> 
            
        </div>
    )
}

export default Sidebar
