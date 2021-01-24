import React from 'react'
import style from './SidebarItem.module.css'
function SidebarItem(props) {
    return (
        <div className={style.item}>
            <span>{props.title}</span>
        </div>
    )
}

export default SidebarItem
