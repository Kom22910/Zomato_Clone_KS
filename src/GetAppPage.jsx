import { StrictMode, useState } from "react";
import './RestPage.css';
import Section4 from "./Section4";
import FooterSec from "./FooterSec";
import { NavLink } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";


const GetAppPage = () => {

    let show_page = {
        login: false,
        sign: false
    }

    const [show, sethide] = useState(show_page);


    return (
        <StrictMode>

            <div className="col-12 getapp pt-3">

                <div className="row">


                    {/* Section 1 */}
                    <div className="col-12 sec1">

                        <div className="row">

                            {/* part 1 */}
                            <div className="col-sm-6 col-4 pt-md-1 pt-2">
                                <div className="col-sm-3 col-10 ms-auto ">
                                    <NavLink to="/">
                                        <img src="MainPageAsset/10028.webp" alt="Zomato" className="d-block w-100" />
                                    </NavLink>
                                </div>
                            </div>

                            {/* part2 */}
                            <div className="col-sm-3 col-8 m-sm-auto ms-auto part2">
                                <div className="row">

                                    <div className="col-sm-4 col-6 text-sm-center text-end">
                                        <p className="btn fs-sm-5 fw-bold w-sm-100 text-center" onClick={() => sethide({ login: true })}>Log in</p>
                                    </div>

                                    <div className="col-sm-4 col-6 text-sm-center text-start">
                                        <p className="btn w-sm-100 fs-sm-5 fw-bold" onClick={() => sethide({ sign: true })}>Sign Up</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                    {/* Section 2 */}
                    <div className="col-10 px-3 sec2">
                        <Section4 />
                    </div>
                </div>


                <div className="row">
                    {/* Section 3 */}
                    <div className="col-12 sec3">
                        <FooterSec />
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

        </StrictMode>
    )
}

export default GetAppPage;