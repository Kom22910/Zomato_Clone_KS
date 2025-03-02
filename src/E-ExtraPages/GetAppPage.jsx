



import React, { useState } from 'react';
import {useAuth} from '../UseContextStore/Auth.jsx';
import { NavLink } from 'react-router-dom';
import BodySection4 from '../C-BodySection/BodySection4.jsx';
import LoginPage from '../D-FORMS/LoginPage.jsx';
import SignUpPage from '../D-FORMS/SignUpPage.jsx';
import LayoutFooter from '../B-LayoutSection/LayoutFooter.jsx';

const GetAppPage = () => {

    let show_page = {
        login: false,
        sign: false
    }


    const { isLogin, userId } = useAuth();

    const [show, sethide] = useState(show_page);


    return (
        <>

            <div className="col-12 getapp pt-3">

                <div className="row">


                    {/* Section 1 */}
                    <div className="col-12 sec1">

                        <div className="row">

                            {/* part 1 */}
                            <div className="col-sm-6 col-4 pt-md-1 pt-2">
                                <div className="col-sm-3 col-10 ms-auto ">
                                    <NavLink to="/">
                                        <img src="MainPageAsset/10028.webp" alt="Zomato" className="d-block w-100 img1" />
                                    </NavLink>
                                </div>
                            </div>






                            {/* part2 */}

                            {
                                isLogin &&
                                (
                                    <div className="col-3 m-auto p-0 profile py-2">
                                        <div className="col-10 m-auto">
                                            <div className="row">
                                                <NavLink to={`/profile/${userId}`}>
                                                    <div className="col-2 ms-auto">
                                                        <img src="https://cdn.pixabay.com/photo/2024/03/08/19/58/ai-generated-8621512_1280.jpg" alt="" className="d-block w-100 rounded-pill" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }





                        </div>

                    </div>


                    {/* Section 2 */}
                    <div className="col-10 px-3 sec2">
                        <BodySection4 />
                    </div>
                </div>


                {/* Section 3 */}
                <div className="row">
                    <div className="col-12 sec3">
                        <LayoutFooter />
                    </div>
                </div>


                {
                    show.login && (
                        <LoginPage close={() => sethide({ login: false })} />
                    )
                }

                {
                    show.sign && (
                        <SignUpPage close={() => sethide({ sign: false })} />
                    )
                }


            </div>

        </>
    )
}

export default GetAppPage;