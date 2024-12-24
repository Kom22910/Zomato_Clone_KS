

import axios from 'axios';
import React, { StrictMode, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const Profile = () => {

    const [data, setData] = useState([]);

    let { id } = useParams();

    const FetchUserData = async () => {
        let res = await axios.get(`http://localhost:3000/SignupInfo/${id}`);
        setData(res.data);
    }




    const Logout=()=>{
        axios.put("http://localhost:3000/Login" ,{ show : false})
    }


    useEffect(() => {
        FetchUserData();
    }, []);


    return (
        <>

            <div className="container-fluid p-0 profile-container">
                <div className="col-4 profile-page bg-white py-5 m-auto px-3">
                    <div className="row">

                        {/* first section */}
                        <div className="col-4 m-auto">
                            <img src="https://cdn.pixabay.com/photo/2024/03/08/19/58/ai-generated-8621512_1280.jpg" alt="" className="d-block w-100 rounded-pill" />
                        </div>

                        {/* second section */}
                        <div className="col-12 text-center mt-3 sec2">
                            <p >{data.name}</p>
                            <p className='p2'>{data.email}</p>
                        </div>


                        {/* third section  */}
                        <div className="col-8 m-auto">
                            <div className="row">

                                <div className="col-4 ms-auto text-center">
                                    <NavLink to='/'>
                                        <button className='btn btn-primary py-2 mt-3'  onClick={()=>Logout()}>Sign Out</button>
                                    </NavLink>
                                </div>

                                <div className="col-4 me-auto">
                                    <NavLink to='/'>
                                        <button className='btn btn-danger py-2 mt-3'>Close</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default Profile;