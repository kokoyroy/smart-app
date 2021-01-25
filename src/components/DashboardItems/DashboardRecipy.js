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





    state && console.log(state);
    return (
        <div className={style.recipy}>
            <div className={style.wrapper}>
                {state && <img src={state.imageUrl} alt={state.title} />}
            </div>



            <h3>{state && state.title}</h3>
            <div className={style.deksia}></div>
        </div>
    )
}

export default DashboardRecipy
