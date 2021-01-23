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

    return (
        <div className={`${style.item} card `}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={photo} alt='food img' />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Southern Fried Chicken<i className="material-icons right">more_vert</i></span>
                <p> <a href="/chicken/1234" class="waves-effect waves-light btn-small">Φτιαξε τη Συνταγη!</a></p>
                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Southern Fried Chicken<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                <p>Here is some more information about this Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora rerum sint omnis aspernatur sunt labore? Alias aliquam ut iusto eos eius ad a repellat suscipit, incidunt possimus veritatis. Odio! product that is only revealed once clicked on.</p>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>


    )
}

export default Dashboarditem
