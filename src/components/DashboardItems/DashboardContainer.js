import React from 'react'
import style from './DashboardContainer.module.css';
import Dashboarditem from './Dashboarditem';




function DashboardContainer(props) {
    return (
        <div className={`${style.dashboardcontainer}`}>
            <div className='row'>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>s 

            </div>
            <div className='row'>

            </div>
        </ div>
    )
}

export default DashboardContainer
