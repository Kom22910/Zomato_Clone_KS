
import React, { useEffect, useState } from 'react';
import './food.css';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Section5 from './Section5';
import FooterSec from './FooterSec';
import { NavLink } from 'react-router-dom';
import Section2 from './Section2';
import axios from 'axios';
import AddMorePlacesForm from './AddMorePlacesForm';
import { useAuth } from './Auth.jsx';


const Base_url = process.env.REACT_APP_BACKEND_URL;



const PlacesPage = () => {

    let show_page = {
        login: false,
        sign: false
    }
    const [show, sethide] = useState(show_page);

    const {isLogin ,  userId} = useAuth();


    const AddtoCart = async (id) => {
        try {

            setLoading(true);

            let newData = data.filter((item) => {
                return item._id === id
            });

            await axios.post(`${Base_url}/cart/info`, newData[0])
                .then(r => {
                    alert(r.data.Message);
                    setLoading(false);
                })
                .catch(err => {
                    alert(err);
                    console.log(err);
                    setLoading(false)
                })

        }
        catch (err) {
            alert(err);
            console.log(err);

        }
    }





    const [addmore, setAddmore] = useState(false);
    const [data, setData] = useState([]);




    const [loading, setLoading] = useState(false);


    const stillLoading = (s) => {
        s === true ? setLoading(true) : setLoading(false)
    }



    const [showdrop, sethidedrop] = useState(false);


    const hiding = () => {
        sethidedrop(!showdrop);
    }


    // ************************* success or already added in cart alert

    const [modal, setModal] = useState({
        success: false,
        warning: false
    });




    // ************************************** 

    // fetching data 
    const FetchWholePlaceData = async () => {
        try {
            setLoading(true)
            let res = await axios.get(`${Base_url}/place/get`)
            setData(res.data.Data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    // ****

    const [showprofile, setHideProfile] = useState(false);
    const FetchLoginShow = () => {
        // let res = await axios.get("http://localhost:3000/Login")
        // .catch(err=> console.log(err))
        setHideProfile(true)
    }



    useEffect(() => {
        FetchWholePlaceData();
        FetchLoginShow();
        // FetchId();
    }, [addmore, showprofile])








    return (
        <>

            {
                loading &&
                <div className="col-12 loading">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            <div className="container-fluid">
                <div className="row">

                    {/* header section  */}
                    <header className='col-sm-10 m-auto p-sm-4 p-3 py-1'>
                        <div className="row">

                            {/* section 1 */}
                            <div className="col-sm-2 col-4 sec1">
                                <NavLink to='/'>
                                    <img src="MainPageAsset/10028.webp" alt="" className='d-block w-sm-75 w-100' />
                                </NavLink>
                            </div>

                            {/* section 2 */}
                            <div className="col-sm-7 col-8  dis my-sm-1 ">
                                <div className="col-12 py-2">
                                    <div className="col-12 bg-white px-sm-3 py-sm-2 part3">
                                        <div className="row">

                                            {/* first element */}
                                            <div className="col-5 dis isko">
                                                <div className="row">

                                                    <div className="col-2">
                                                        <img src="MainPageAsset/10002.svg" alt="Location" />
                                                    </div>

                                                    <div className="col-8 ps-0 pe-0">
                                                        <input type="text" placeholder="Pune" className="form-control border border-light" />
                                                    </div>

                                                    <div className="col-1">
                                                        <img src="MainPageAsset/10003.svg" alt="Location" onClick={() => hiding()} />
                                                    </div>

                                                </div>

                                                {
                                                    showdrop &&
                                                    <div className="col-12 py-2 hiddencol">
                                                        <div className="col-12" onClick={() => hiding()}>
                                                            <p>Pune</p>
                                                            <p>Baner</p>
                                                            <p>Moshi</p>
                                                            <p>Chakan</p>
                                                            <p>Wakad</p>
                                                            <p>Wagholi</p>
                                                        </div>
                                                    </div>
                                                }

                                            </div>

                                            {/* second element */}
                                            <div className="col-sm-7 col-11 m-auto ">
                                                <div className="row">

                                                    <div className="col-sm-1 col-2 flex-karo">
                                                        <img src="MainPageAsset/10005.svg" alt="Location" />
                                                    </div>

                                                    <div className="col-sm-11 col-10  px-sm-2 px-0">
                                                        <input type="text" placeholder="Search for restaurant , cuisine or a dish" className="form-control border border-light" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* section 3 */}

                            {

                                isLogin &&
                                    (
                                        <div className="col-3  ms-auto p-0 profile py-2">
                                            <div className="col-12 ms-auto">
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





                            {/* section 4 */}
                            <div className="col-sm-7 col-12 vis">
                                <div className="col-12 py-2">
                                    <div className="col-12 bg-white px-sm-3 py-sm-2 py-1 part3">
                                        <div className="row">

                                            {/* first element */}
                                            <div className="col-5">
                                                <div className="row">

                                                    <div className="col-sm-2 col-3">
                                                        <img src="MainPageAsset/10002.svg" alt="Location" />
                                                    </div>

                                                    <div className="col-sm-8 col-6 ps-0 pe-0">
                                                        <input type="text" placeholder="Pune" className="form-control border border-light" />
                                                    </div>

                                                    <div className="col-sm-1 col-2">
                                                        <img src="MainPageAsset/10003.svg" alt="Location" />
                                                    </div>

                                                </div>

                                            </div>

                                            {/* second element */}
                                            <div className="col-7 m-auto ">
                                                <div className="row">

                                                    <div className="col-sm-1 col-2 flex-karo">
                                                        <img src="MainPageAsset/10005.svg" alt="Location" />
                                                    </div>

                                                    <div className="col-sm-11 col-10  px-sm-2 px-0">
                                                        <input type="text" placeholder="Search for restaurant , cuisine or a dish" className="form-control border border-light" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>






                        </div>
                    </header>



                    {/* Section  */}
                    <section className='col-12 m-auto p-0 py-5'>

                        {/* section 1 */}
                        <div className="col-12 p-2 py-sm-5 section1">
                            <div className="row">
                                <div className="col-sm-10 col-11 m-auto pb-sm-5">
                                    <Section2 />
                                </div>

                            </div>
                        </div>

                        {/* Section 2  */}
                        <div className="col-sm-10 col-11 p-2 py-sm-5 py-4 m-auto section3 pb-5">

                            {/* part 1 */}
                            <div className="col-12 part1">
                                <p>Restaurants in Pune</p>
                            </div>


                            <div className="col-12 part2">

                                {/* 1 - cards */}

                                <div className="row px-sm-3">




                                    {
                                        data &&
                                        data.map((val) => {

                                            return (
                                                <div className="col-sm-4 col-11 m-sm-0 m-auto p-sm-3 my-sm-0 my-3" key={val.id} >
                                                    <div className="col-12 card_part">

                                                        {/* card part 1 */}
                                                        <div className="col-12 image">
                                                            {val.promo}

                                                            <img src={val.path} alt="" style={{ width: val.w + "%", height: val.h + "%" }} />

                                                            {val.offer}
                                                        </div>

                                                        {/* card part 2 */}
                                                        <div className="col-12 px-sm-3 px-2 card_part2 mt-2">

                                                            {/* *********************** */}
                                                            <div className="row">
                                                                <div className="col-9">
                                                                    <p className='para a1'>{val.title}</p>
                                                                </div>

                                                                <div className="col-3 ms-auto text-end">
                                                                    <p className='badge bg-success ms-auto'>{val.star} <i class="bi bi-star-fill"></i> </p>
                                                                </div>
                                                            </div>


                                                            {/* ************************ */}
                                                            <div className="row py-sm-0 py-1">
                                                                <div className="col-7">
                                                                    <p className='a1'>{val.p1}</p>
                                                                </div>

                                                                <div className="col-5 ms-auto text-end">
                                                                    <p>&#8377;{val.price} for two</p>
                                                                </div>
                                                            </div>

                                                            {/***************************************** * */}


                                                            <div className="row pb-sm-1 pb-2">

                                                                <div className="col-8">
                                                                    <p className='a1'>{val.p2}</p>
                                                                </div>

                                                                <div className="col-3 text-end ms-auto">
                                                                    <p className='min'>{val.minute} km</p>
                                                                </div>
                                                            </div>

                                                            {/* *********************************************** */}
                                                            <div className="col-12">
                                                                <button className='btn btn-warning w-100 addtocart' onClick={() => AddtoCart(val._id)} >Add to Cart</button>
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>



                                {/* 2 - add more place  */}

                                <div className="col-12 px-2 py-2 mt-5 text-center">
                                    <button className='btn btn-success col-sm-3 col-10 py-2' onClick={() => setAddmore(true)} > Add Your Resautrants </button>
                                </div>

                            </div>

                        </div>

                        {/* section 4 */}
                        <div className="col-sm-10 col-12 m-auto">
                            <Section5 />
                        </div>


                    </section>



                    {/* footer */}
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

            <NavLink to='/cart'>
                <div className="cart-icon" >
                    <div className="card1">
                        <img src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                    </div>
                </div>
            </NavLink>



            {/* {
                addmore && (
                    <AddMorePlacesForm
                        close={() => setAddmore(false)}
                        fun={stillLoading}
                    />
                )
            } */}





            {/* *************** successfully submitted alert */}

            {
                modal.success && (

                    < div className="col-12 modalforsuccess">
                        <div className="col-4  m-auto">
                            <div className="card card1">


                                {/* Card header */}
                                <div className="card-header py-2">
                                    <div className="row">
                                        <div className="col-sm-3 col-4 py-2 sec1">
                                            <NavLink to='/'>
                                                <img src="MainPageAsset/10028.webp" alt="" className='d-block w-sm-75 w-100' />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                {/* card body */}
                                <div className="card-body mt-2">
                                    <p className='fs-5 fw-bold p-green'>Successfully Added in Cart !!!</p>
                                </div>

                                {/* card footer */}
                                <div className="card-footer">
                                    <div className="col-4 ms-auto p1 text-end">
                                        <button className='btn btn-danger' onClick={() => setModal({ success: false, warning: false })}>Close</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                )
            }


            {/* *************** already submitted submitted alert */}
            {
                modal.warning && (

                    < div className="col-12 modalforsuccess">
                        <div className="col-4  m-auto">
                            <div className="card card2">


                                {/* Card header */}
                                <div className="card-header py-2">
                                    <div className="row">
                                        <div className="col-sm-3 col-4 py-2 sec1">
                                            <NavLink to='/'>
                                                <img src="MainPageAsset/10028.webp" alt="" className='d-block w-sm-75 w-100' />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                {/* card body */}
                                <div className="card-body mt-2">
                                    <p className='fs-5 fw-bold p-red'>Already Added in Cart !!!</p>
                                </div>

                                {/* card footer */}
                                <div className="card-footer">
                                    <div className="col-4 ms-auto p1 text-end">
                                        <button className='btn btn-danger' onClick={() => setModal({ success: false, warning: false })}>Close</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                )
            }



        </>
    )
}

export default PlacesPage;