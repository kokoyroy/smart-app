import React from 'react'
import { Link } from 'react-router-dom';
import style from './Dashboarditem.module.css';


function Dashboarditem({description,imageUrl,title,id}) {
   

    return (
        <div className={`${style.item} card `}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={imageUrl} alt='food img' />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
                <p> <Link to={`/recipy/${id}`} className="waves-effect waves-light btn-small">Φτιαξε τη Συνταγη!</Link></p>
                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                <p>{description}</p>
                
            </div>
        </div>


    )
}

export default Dashboarditem




