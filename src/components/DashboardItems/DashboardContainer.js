import React from 'react'
import style from './DashboardContainer.module.css';
import Dashboarditem from './Dashboarditem';
function DashboardContainer() {
    return (
        <div className={`${style.dashboardcontainer}`}>
            <div className='row'>
                <div className="col s4"><Dashboarditem /></div>
                <div className="col s4"><Dashboarditem /></div>
                <div className="col s4"><Dashboarditem /></div>
                <div className="col s4"><Dashboarditem /></div>
                <div className="col s4"><Dashboarditem /></div>
                <div className="col s4"><Dashboarditem /></div>s 

            </div>
            <div className='row'>

            </div>
        </ div>
    )
}

export default DashboardContainer
