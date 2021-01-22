import React from 'react'
import logo from '../../assets/logo.png'
import SidebarItem from '../SidebarItems/SidebarItem'
function Sidebar() {
    return (
        <div className='col s2 sidebar z-depth-5'>
            <div className="logo">
                <img src={logo} alt="logo"  />
            </div> 
            <SidebarItem title={'menu #1'}/>
            <SidebarItem title={'menu #2'}/>
            <SidebarItem title={'menu #3'}/>
            
        </div>
    )
}

export default Sidebar
