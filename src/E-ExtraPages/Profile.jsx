


import React, { useEffect, useState } from 'react'
import { useAuth } from '../UseContextStore/Auth.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {

    const nav = useNavigate();

    const { Base_url, RemoveToken, userId, RemoveUserID } = useAuth();

    const [data, setData] = useState([]);



    const FetchUserData = async () => {
        try {

            let result = await axios.get(`${Base_url}/user/${userId}`);
            setData(result.data.Data);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
    }


    if (userId !== "admindminmininm") {
        const FetchUserData = async () => {

        }
    }

    const Logout = () => {
        RemoveToken();
        RemoveUserID();
        nav('/');
    };



    useEffect(() => {
        if (userId !== "admindminmininm") {

            FetchUserData();

        }
        else {
            setData({
                name: "Admin",
                email: "admin@gmail.com"
            })
        }

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
                                    <button className='btn btn-danger py-2 mt-3' onClick={() => nav(-1)}>Go Back</button>
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