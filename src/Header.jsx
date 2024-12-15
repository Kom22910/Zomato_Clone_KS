import { StrictMode, useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";



const HeaderSection = () => {


    let show_page = {
        login: false,
        sign: false
    }
    const [show, sethide] = useState(show_page);

    return (
        <StrictMode>
            <div className="col-12 p-4 hsection" >
                <div className="row">


                    {/* section 1 */}
                    <div className="col-md-10 col-12 m-auto hsection1">
                        <div className="row">

                            {/* part 1 */}
                            <div className="col-md-4 col-4 text-md-center part1">
                                <NavLink to="/mobile" className="nav-link">
                                    <p>
                                        <i class="bi bi-google-play"></i> Get the App
                                    </p>
                                </NavLink>
                            </div>

                            {/* part 2 */}
                            <div className="col-md-6 col-8 ms-auto part2">
                                <div className="row">

                                    <div className="col-md-5 col-6">
                                        <NavLink to="/invest" className="nav-link">
                                            <p className="p1">Investor Relations</p>
                                        </NavLink>
                                    </div>

                                    <div className="col-md-3 col-3">
                                        <p onClick={() => sethide({ login: true })} className="p1">Log in</p>
                                    </div>

                                    <div className="col-md-3 col-3">
                                        <p onClick={() => sethide({ sign: true })} className="p1">Sign Up</p>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>


                    {/* Section 2 */}

                    <div className="col-md-10 m-auto my-md-5 hsection2">


                        {/* part1 */}
                        <div className="col-md-4 col-sm-6 col-8 m-auto mt-md-4 part1">
                            <img src="MainPageAsset/10028.webp" alt="Zomato" className="d-block w-100" />
                        </div>

                        {/* part 2 */}
                        <div className="col-md-8 m-auto mt-4 part2">
                            <p className="text-center">Discover the best food & drinks in Pune</p>
                        </div>

                        {/* part 3*/}
                        <div className="col-md-8 col-12 m-auto mt-sm-4">
                            <div className="col-12 bg-white px-3 py-sm-2 py-1 part3">
                                <div className="row">

                                    {/* first element */}
                                    <div className="col-5 dis">
                                        <div className="row">

                                            <div className="col-2">
                                                <img src="MainPageAsset/10002.svg" alt="Location" />
                                            </div>

                                            <div className="col-8 ps-0 pe-0">
                                                <input type="text" placeholder="Pune" className="form-control" />
                                            </div>

                                            <div className="col-sm-1 col-2">
                                                <img src="MainPageAsset/10003.svg" alt="Location" />
                                            </div>

                                        </div>

                                    </div>

                                    {/* second element */}
                                    <div className="col-md-7 col-12">
                                        <div className="row">

                                            <div className=" col-1 e1">
                                                <img src="MainPageAsset/10005.svg" alt="Location" />
                                            </div>

                                            <div className="col-md-11 col-10">
                                                <input type="text" placeholder="Search for restaurant , cuisine or a dish" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>




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
        </StrictMode>
    )
}



export default HeaderSection;