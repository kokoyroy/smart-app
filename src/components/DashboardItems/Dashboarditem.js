import React from 'react'
import style from './Dashboarditem.module.css';
import food from '../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg'
import china from '../../assets/hanxiao-WoerPHfLIWQ-unsplash.jpg'
import chicken from '../../assets/mark-deyoung-mjcJ0FFgdWI-unsplash.jpg'
import vegan from '../../assets/matthew-smith-Rfflri94rs8-unsplash.jpg'


function Dashboarditem(props) {
    let photo = null
    if (props.foodType === 'chicken') { photo = chicken }
    else if (props.foodType === 'vegan') { photo = vegan }
    else if (props.foodType === 'chinese') { photo = china }
    else { photo = food }
console.log(props);

    return (
        <div className={`${style.item} card `}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={photo} alt='food img' />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                <p><a href="/">This is a link</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>


    )
}

export default Dashboarditem
