

import React from 'react'
import {useNavigate} from 'react-router-dom';

const S1Card = ({ path, title, p, web }) => {
    const nav = useNavigate();


    return (
        <>

            <div className="col-md-4 col-sm-6 col-10 m-auto my-3">

                    <div className="col-12 card1" onClick={()=>nav(web)}>
                        <div className="col-12 part1">
                            <img src={path} alt="food" />
                        </div>

                        <div className="col-12 mt-3 part2 px-3">
                            <h5>{title}</h5>
                            <p>{p}</p>
                        </div>
                    </div>
            </div>



        </>
    )
}

export default S1Card