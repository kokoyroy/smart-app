import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'

export class Layout extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Sidebar/>
                    <Dashboard/>
                </div>
            </div>
        )
    }
}

export default Layout
