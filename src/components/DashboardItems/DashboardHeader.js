import React from 'react'
import style from './DashboardHeader.module.css';
function DashboardHeader() {
    return (
        <div className={`${style.header} grey darken-2 z-depth-3 `}>
            <h4>Επιλέξτε Μενού!</h4>
        </div>
    )
}

export default DashboardHeader
