import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import SidebarItem from '../SidebarItems/SidebarItem'
function Sidebar() {
    //set the state
    const [links, setlinks] = useState(null)

    //get the sidebar links
    useEffect(() => {
        fetch('https://us-central1-smartup-hr-test-frontend.cloudfunctions.net/menu?fbclid=IwAR1nUT96UL7wDxPI9DTKNs0difUxuTyxOw9mIN7XdkrUVux5LmAFXdeheE0')
            .then(res => res.json()).then(res => {
                setlinks(res.categories)
            }).catch(err => console.log(err))
    }, [])




    //debug console log for the data fetched
    if (links) console.log(links);


    return (
        <div className='col s2 sidebar z-depth-5 '>
            {/* LOGO */}
            <div className="logo">
                <div>  <Link to='/'><img src={logo} alt="logo" /></Link></div>
            </div>
            {/* LINKS */}
            {links ? links.map(link => (
                <NavLink key={link.id} to={'/' + link.id}  ><SidebarItem title={link.title} /></NavLink>
            )) : <div>loading...</div>}

        </div>
    )
}

export default Sidebar
