import React from 'react'
import style from './Dashboarditem.module.css';


function Dashboarditem({description,imageUrl,title}) {
   

    return (
        <div className={`${style.item} card `}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={imageUrl} alt='food img' />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
                <p> <a href="/menu_option_1/1234" className="waves-effect waves-light btn-small">Φτιαξε τη Συνταγη!</a></p>
                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                <p>{description}</p>
                
            </div>
        </div>


    )
}

export default Dashboarditem
