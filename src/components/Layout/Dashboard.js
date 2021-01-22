import React from 'react'
import DashboardContainer from '../DashboardItems/DashboardContainer'
import DashboardHeader from '../DashboardItems/DashboardHeader'

function Dashboard() {
    return (
        <div className='col s10 dashboard grey lighten-2'>
            <DashboardHeader/>
            <DashboardContainer/>
        </div>
    )
}

export default Dashboard
