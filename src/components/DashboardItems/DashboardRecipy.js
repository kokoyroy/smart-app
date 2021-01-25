import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from './DashboardRecipy.module.css';


function DashboardRecipy() {
    const [state, setstate] = useState(null)

    const { id } = useParams();
    // console.log('ektypono props');
    console.log(id);
    useEffect(() => {
        fetch(`https://us-central1-smartup-hr-test-frontend.cloudfunctions.net/items/${id}`)
            .then(res => res.json()).then(res => {
                setstate(res)
            }).catch(err => console.log(err))
    }, [id])
    const randomtext = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat, in voluptatem quasi veniam praesentium maxime. Hic temporibus labore suscipit, iusto quod inventore accusantium aliquid iure vel blanditiis, soluta eaque sit provident ad at totam porro illum voluptates quas? Beatae magnam, atque odio, dolorem ipsum veniam dolores nam asperiores voluptates dicta aut! Laudantium eius dicta deserunt corrupti voluptates pariatur culpa'




    state && console.log(state);
    return (
        <div className={style.recipy}>
            {/* chenk if state almost everythink... */}
            <div className={style.aristera}>
                <div className={style.wrapper}>
                    {state && <img src={state.imageUrl} alt={state.title} />}
                </div>
                <h3>{state && state.title}</h3>
                <p>{state ? state.description : randomtext}</p>
                <div className={style.social}>

                    <div className="yt">
                        {/* if state initialise link */}
                        {/* if u tube link is broke i replaced it with utube start page */}
                        {state && <a href={style.youtubeUrl ? style.youtubeUrl : 'http://www.youtube.com'}> <i className="material-icons">play_circle_filled</i></a>}
                    </div>

                    <div className="web">
                        {/* if state initialise link */}
                        {state && <a href={state.websiteUrl} ><i class="material-icons">web</i></a>}

                    </div>
                </div>
            </div>


            <div className={style.deksia}>
        <h3>Υλικα</h3>
        <p>{state && state.ingredients}</p>
        <h3>Οδηγιες εκτέλεσης</h3>
        <p>{state && state.instructions}</p>
            </div>
        </div>
    )
}

export default DashboardRecipy
