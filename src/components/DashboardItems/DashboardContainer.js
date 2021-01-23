import React, { useEffect, useState } from 'react'
import style from './DashboardContainer.module.css';
import Dashboarditem from './Dashboarditem';




function DashboardContainer(props) {
   const [items, setitems] = useState(null)
    
   useEffect(() => {
       fetch(`https://us-central1-smartup-hr-test-frontend.cloudfunctions.net/categories/${props.foodType}`)
       .then(res=>res.json()).then(res=>setitems(res.items))
   },[props.foodType])
    


    if(items)console.log(items);
    return (
        <div className={`${style.dashboardcontainer}`}>
            <div className='row'>


            {items?items.map(item=>(
                <div key={item.id} className='col s4'><Dashboarditem   {...item}/></div>
            )) :<div>loading</div>}


















{/* 
                <div className="col s4"> foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div>
                <div className="col s4"><Dashboarditem foodType={props.foodType}/></div> */}

            </div>
            <div className='row'>

            </div>
        </ div>
    )
}

export default DashboardContainer
