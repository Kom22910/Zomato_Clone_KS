

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import { useAuth } from '../UseContextStore/Auth.jsx';
import '../A-GlobalStyle/Restpage.css';
import axios from 'axios';


const SignUpPage = ({ close }) => {


    const { Base_url } = useAuth();

    const [show, setHide] = useState(false);

    const [submit, setSubmit] = useState(false);


    const [Signdata, setSignData] = useState(
        {
            name: "",
            email: "",
            password: "",
        }
    )


    const SaveData = (e) => {
        const { name, value } = e.target;
        setSignData({ ...Signdata, [name]: value });
    }

    // Submitting form 
    const SubmitDatatoServer = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${Base_url}/user/signup`, Signdata)
                .then((res) => {
                    alert("Successfully Created account !! ");
                    setSubmit(false);
                    close();

                    setTimeout(() => {
                        setSignData({
                            name: "",
                            email: "",
                            password: ""
                        })
                    }, 100)
                })
        }
        catch (err) {
            alert(err);
            console.log(err);
        }

    }


    return (

        <>

            <div className="col-12 signupPage">

                <div className="col-sm-4 col-11 m-auto mt-5 login_container">

                    {/* Section 1 */}
                    <div className="col-12 section1">
                        <div className="row">

                            {/* part1 */}
                            <div className="col-sm-4 col-5 p1 ">
                                <h2>Sign up</h2>
                            </div>

                            {/* part2 */}
                            <div className="col-2 ms-auto p1" onClick={close}>
                                <img src="MainPageAsset/10020.svg" alt="" className='d-block w-sm-50' />
                            </div>

                        </div>
                    </div>

                    <form onSubmit={(e) => SubmitDatatoServer(e)}>
                        {/* section 2 */}

                        <div className="col-12 mt-sm-3 section2">

                            <div className="col-12 px-3 ">
                                <div className="row">
                                    <input type="text" placeholder='Full Name' className='form-control py-2' value={Signdata.name} name='name' onChange={(e) => SaveData(e)} />
                                </div>


                                <div className="row mt-3">
                                    <input type="email" placeholder='Email' className='form-control py-2' value={Signdata.email} name='email' onChange={(e) => SaveData(e)} />
                                </div>

                                <div className="row mt-3">
                                    <input type="password" placeholder='password' className='form-control py-2' value={Signdata.password} name='password' onChange={(e) => SaveData(e)} />
                                </div>
                            </div>
                        </div>


                        {/* Section 3 */}
                        <div className="col-12 mt-sm-1 section3">
                            <div className="row px-3">
                                <div className="col-1">
                                    <input type="checkbox" checked={submit} onClick={() => setSubmit(!submit)} />
                                </div>
                                <div className="col-11">
                                    <label>I agree to Zomato's <span>Terms of Service . Privacy Policy</span> and <span>Content Policies</span></label>
                                </div>
                            </div>
                        </div>


                        {/* Section 4 */}
                        <div className="col-12 mt-sm-1 section4">
                            {
                                submit ? (
                                    <button className='btn btn-success form-control py-2 active'>Create account</button>
                                ) : <button className='btn btn-secondary form-control py-2 disabled'>Create account</button>
                            }
                        </div>

                    </form>

                    {/* Section 5 */}
                    <div className="col-12 my-sm-1 section5">
                        <h5 className='text-center '>or</h5>
                    </div>


                    {/* Section 6 */}
                    <div className="col-12 mt-sm-1 section5">
                        <NavLink to="https://myaccount.google.com/" className='nav-link' target='_blank'>
                            <div className="col-12 email">
                                <div className="row">

                                    <div className="col-sm-1 col-2 part1">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                                    </div>

                                    <div className="col-sm-5 col-8">
                                        <p>Sign in with Google</p>
                                    </div>

                                </div>
                            </div>
                        </NavLink>
                    </div>



                    {/* section 7 */}
                    <div className="col-12 px-3 mt-3 section6">
                        <p>Already have an account? <span className='text-danger' onClick={() => setHide(true)}>Log in</span></p>
                    </div>




                </div>

                {
                    show && (<LoginPage close={() => setHide(false)} />)
                }
            </div>

        </ >

    )
}

export default SignUpPage;