import React from 'react'
import style from './SidebarItem.module.css'
function SidebarItem(props) {
    return (
        <div className={style.item}>
            {props.title}
        </div>
    )
}

export default SidebarItem
