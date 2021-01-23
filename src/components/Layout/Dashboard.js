import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardContainer from '../DashboardItems/DashboardContainer'
import DashboardHeader from '../DashboardItems/DashboardHeader'

function Dashboard() {
    return (
        <div className='col s10 dashboard grey lighten-2'>
            <DashboardHeader />

            <Switch>
                <Route path='/chicken' render={() =>  <DashboardContainer foodType='chicken' /> } />
                <Route path='/vegan' render={() =>  <DashboardContainer foodType='vegan' /> } />
                <Route path='/chinese' render={() =>  <DashboardContainer foodType='chinese' /> } />
                <Route path='/' exact component={DashboardContainer} />
            </Switch>


        </div>
    )
}

export default Dashboard
