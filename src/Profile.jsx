

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth.jsx';
const Base_url = process.env.REACT_APP_BACKEND_URL;

const Profile = () => {

    const [data, setData] = useState([]);

    const { RemoveToken } = useAuth();

    const token = localStorage.getItem('token');

    const FetchUserData = async () => {
        try {

            let res = await axios.get(`${Base_url}user/verify`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            let result = await axios.get(`${Base_url}user/${res.data.Data.id}`);
            setData(result.data.Data);
            console.log(result.data);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
    }

    const nav = useNavigate();

    const Redirection = () => {
        nav(-1)
    };




    const Logout = () => {
        RemoveToken();
        nav('/');
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
                                    <button className='btn btn-primary py-2 mt-3' onClick={() => Logout()}>Sign Out</button>
                                </div>

                                <div className="col-4 me-auto">
                                    <button className='btn btn-danger py-2 mt-3' onClick={Redirection}>Go Back</button>
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