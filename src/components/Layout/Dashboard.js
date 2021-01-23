import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardContainer from '../DashboardItems/DashboardContainer'
import DashboardHeader from '../DashboardItems/DashboardHeader'
import DashboardRecipy from '../DashboardItems/DashboardRecipy'

function Dashboard() {
    return (
        <div className='col s10 dashboard grey lighten-2'>
            <DashboardHeader />

            <Switch>
                <Route path='/chicken' exact render={() => <DashboardContainer foodType='chicken' />} />
                <Route path='/vegan' exact render={() => <DashboardContainer foodType='vegan' />} />
                <Route path='/chinese' exact render={() => <DashboardContainer foodType='chinese' />} />
                <Route path='/chicken/:id' component={DashboardRecipy} />
                <Route path='/' exact component={DashboardContainer} />
            </Switch>


        </div>
    )
}

export default Dashboard
