import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardContainer from '../DashboardItems/DashboardContainer'
import DashboardHeader from '../DashboardItems/DashboardHeader'
import DashboardRecipy from '../DashboardItems/DashboardRecipy'

function Dashboard(props) {
    return (
        <div className='col s10 dashboard grey lighten-2'>
            <DashboardHeader />

            <Switch>
                <Route path='/menu_option_1' exact render={() => <DashboardContainer foodType='menu_option_1' />} />
                <Route path='/menu_option_2' exact render={() => <DashboardContainer foodType='menu_option_2' />} />
                <Route path='/menu_option_3' exact render={() => <DashboardContainer foodType='menu_option_3' />} />
                <Route path='/test' exact render={() => <DashboardContainer foodType='test' />} />
                <Route path='/recipy/:id' component={DashboardRecipy}/>
                <Route path='/' exact component={DashboardContainer} />
            </Switch>


        </div>
    )
}

export default Dashboard
