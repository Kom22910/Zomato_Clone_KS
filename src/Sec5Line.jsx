


import React, { StrictMode } from 'react'

const Sec5Line = ({ p, path, fun, list, s }) => {


    return (
        <StrictMode>

            <div className="col-12 firstLine mt-4 px-sm-1 px-3" onClick={fun}>
                <div className="row">

                    <div className="col-8 part1">
                        <p>{p}</p>
                    </div>

                    <div className="col-1 ms-auto part2">
                        <p>{path}</p>
                    </div>
                </div>


                <div className="row part2">

                    {
                        s && (

                            <ul className='col-12 px-sm-5 px-4'>
                                {

                                    list.map((val) => {
                                        return (
                                            <li className='col-sm-2 col-6 my-sm-2 my-1'>
                                                <span>{val}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    }
                </div>
            </div>





        </StrictMode>
    )
}

export default Sec5Line;