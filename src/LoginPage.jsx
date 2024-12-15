


import React, { StrictMode, useState } from 'react';
import './RestPage.css';
import SignUpPage from './SignUpPage';


const LoginPage = ({close}) => {

    const [show,setHide] = useState(false);




    return (

        <StrictMode>

            <div className="col-12 loginpage">

                <div className="col-sm-4 col-11 m-auto mt-5 login_container">

                    {/* Section 1 */}
                    <div className="col-12 section1">
                        <div className="row">

                            {/* part1 */}
                            <div className="col-sm-3 col-4 p1 ">
                                <h2>Login</h2>
                            </div>

                            {/* part2 */}
                            <div className="col-2 ms-auto p1" onClick={close}>
                                <img src="MainPageAsset/10020.svg" alt="" className='d-block w-sm-50' />
                            </div>

                        </div>
                    </div>


                    {/* section 2 */}

                    <div className="col-12 mt-sm-4 section2">

                        <div className="col-12 phone px-3 ">
                            <div className="row">


                                {/* part1 */}
                                <div className="col-sm-3 col-4 py-2 part1">
                                    <div className="row">
                                        <div className="col-5 p1">
                                            <img src="MainPageAsset/image.png" alt="" className='img-fluid' />
                                        </div>

                                        <div className="col-3 p1">
                                            +91
                                        </div>

                                        <div className="col-2 p1">
                                            <img src="MainPageAsset/10010.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                

                                {/* part2 */}
                                <div className="col-sm-9 col-8 ps-0 pe-0">
                                    <input type="number" placeholder='Phone' className='form-control py-2' />
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* Section 3 */}
                    <div className="col-12 mt-sm-4 section3">
                        <button className='btn btn-danger form-control'> Send One Time Password</button>
                    </div>


                    {/* Section 4 */}
                    <div className="col-12 mt-sm-3 section4">
                        <h5 className='text-center'>or</h5>
                    </div>


                    {/* Section 5 */}
                    <div className="col-12 mt-sm-4 section5">
                        <div className="col-12 email">
                            <div className="row">

                                <div className="col-sm-1 col-2 ">
                                    <img src="MainPageAsset/10022.svg" alt="" />
                                </div>

                                <div className="col-sm-5 col-8 part2">
                                    <p>Continue with Email</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Section 6 */}
                    <div className="col-12 mt-sm-4 section5">
                        <div className="col-12 email">
                            <div className="row">

                                <div className="col-sm-1 col-2">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                                </div>

                                <div className="col-sm-5 col-8 part2">
                                    <p>Sign in with Google</p>
                                </div>

                            </div>
                        </div>
                    </div>



                    {/* section 7 */}
                    <div className="col-12 px-3 mt-sm-4 section6">
                        <p>New to Zomato? <span className='text-danger' onClick={()=>setHide(true)}>Create account</span></p>
                    </div>




                </div>



                {
                    show && (<SignUpPage  close={()=>setHide(false)}  />)
                }

            </div>

        </StrictMode>

    )
}

export default LoginPage;