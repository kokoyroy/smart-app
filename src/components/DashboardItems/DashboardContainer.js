import React, { useEffect, useState } from 'react'
import style from './DashboardContainer.module.css';
import Dashboarditem from './Dashboarditem';




function DashboardContainer(props) {
    //set the state
    const [items, setitems] = useState(null)
    //get the data array
    useEffect(() => {
        fetch(`https://us-central1-smartup-hr-test-frontend.cloudfunctions.net/categories/${props.foodType}`)
            .then(res => res.json()).then(res => setitems(res.items))
    }, [props.foodType])


    //see the data array in the console!
    if (items) console.log(items); 
    // ********************************

    return (
        <div className={`${style.dashboardcontainer}`}>
            <div className='row'>
            {/* make the dashboard items */}
                {items ? items.map(item => (
                    <div key={item.id} className='col s4'><Dashboarditem   {...item} /></div>
                )) : <div>loading</div>}
            </div>

        </ div>
    )
}

export default DashboardContainer
