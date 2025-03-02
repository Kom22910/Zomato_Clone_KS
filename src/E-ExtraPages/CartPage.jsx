


import React, { useEffect, useState } from 'react';
import '../A-GlobalStyle/App.css';
import { useAuth } from '../UseContextStore/Auth.jsx';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loading from '../E-ExtraFunction/Loading.jsx';

const CartPage = () => {

    const { Base_url, userId, isLogin } = useAuth();

    let show_page = {
        login: false,
        sign: false
    }

    const [show, sethide] = useState(show_page);
    const [loading, setLoading] = useState(false);


    // ********************** holding data declarre


    const [food, setFood] = useState([]);
    const [place, setPlace] = useState([]);


    // ********************* fetching 
    const FetchFoodData = async () => {
        try {
            setLoading(true);
            let res = await axios.get(`${Base_url}/cart/info/getFood`);
            setFood(res.data.Data);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
        finally {
            setLoading(false);
        }
    }

    const FetchPlaceData = async () => {
        try {
            setLoading(true);
            let res = await axios.get(`${Base_url}/cart/info/getPlace`);
            setPlace(res.data.Data);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
        finally {
            setLoading(false);
        }
    }

    // *************** fetching initial data 

    useEffect(() => {
        FetchFoodData();
        FetchPlaceData();
    }, []);


    // ************************* operation on food part

    const Decrease = async (id) => {

        let res = [...food];
        let newUpdate = res.filter((item) => item._id === id);
        let value = newUpdate[0].quantity;

        if (newUpdate[0]) {
            if (value > 0) {
                newUpdate[0].quantity -= 1;

                setFood(res);
                await axios.patch(`${Base_url}/cart/info/${id}`, {
                    quantity: value - 1
                })
                    .catch(err => console.log(err));
            }
        }

    };

    const Increase = async (id) => {
        let res = [...food];
        let newUpdate = res.filter((item) => item._id === id);
        let value = newUpdate[0].quantity;

        if (newUpdate[0]) {
            if (value >= 0) {
                newUpdate[0].quantity += 1;

                setFood(res);
                await axios.patch(`${Base_url}/cart/info/${id}`, {
                    quantity: value + 1
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => console.log(err));
            }
        }
    };


    const DeleteCard1 = async (id) => {

        await axios.delete(`${Base_url}/cart/info/${id}`)
            .then((res) => {
                alert(res.data.Message);
                let newdata = food.filter((item) => item._id !== id);
                setFood(newdata);
            })
            .catch(err => {
                console.log(err);
            })
    }







    // ************************ operation on Place card

    const DecreaseP = async (id) => {
        let res = [...place];
        let newUpdate = res.filter((item) => item._id === id);
        let value = newUpdate[0].quantity;

        if (newUpdate[0]) {
            if (value > 0) {
                newUpdate[0].quantity -= 1;
                setPlace(res);

                await axios.patch(`${Base_url}/cart/info/${id}`, {
                    quantity: value - 1
                })
                    .catch(err => console.log(err))
            }
        }

    };

    const IncreaseP = async (id) => {
        let res = [...place];
        let newUpdate = res.filter((item) => item._id === id);
        let value = newUpdate[0].quantity;

        if (newUpdate[0]) {
            if (value >= 0) {
                newUpdate[0].quantity = Number(value) + 1;
                setPlace(res);

                await axios.patch(`${Base_url}/cart/info/${id}`, {
                    quantity: value + 1
                })
                    .then(r => console.log(r))
                    .catch(err => console.log(err))
            }
        }
    };

    const DeleteCard2 = async (id) => {

        await axios.delete(`${Base_url}/cart/info/${id}`)
            .then((res) => {
                alert(res.data.Message);
                let newdata = place.filter((item) => item._id !== id);
                setPlace(newdata);
            })


    }


    const [showdrop, sethidedrop] = useState(false);


    const hiding = () => {
        sethidedrop(!showdrop);
    }




    return (
        <>

            <Loading loading={loading} />


            <div className="container-fluid s cartpage" >
                <div className="row">




                    {/* header */}
                    <header className='col-sm-10 m-auto p-sm-4 p-3 '>
                        <div className="row">

                            {/* section 1 */}
                            <div className="col-sm-2 col-4 sec1">
                                <NavLink to='/'>
                                    <img src="/MainPageAsset/10028.webp" alt="" className='d-block w-sm-75 w-100' />
                                </NavLink>
                            </div>

                            {/* section 2 */}
                            <div className="col-sm-7 col-8 dis m-auto ">
                                <div className="col-12 py-2">
                                    <div className="col-12 bg-white px-sm-3 py-sm-2 part3">
                                        <div className="row">

                                            {/* first element */}
                                            <div className="col-5 dis isko">
                                                <div className="row">

                                                    <div className="col-2">
                                                        <img src="/MainPageAsset/10002.svg" alt="Location" />
                                                    </div>

                                                    <div className="col-8 ps-0 pe-0">
                                                        <input type="text" placeholder="Pune" className="form-control border border-light" />
                                                    </div>

                                                    <div className="col-1">
                                                        <img src="/MainPageAsset/10003.svg" alt="Location" onClick={() => hiding()} />
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
                                            <div className="col-sm-7 col-11 m-auto " >
                                                <div className="row">

                                                    <div className="col-sm-1 col-2 flex-karo">
                                                        <img src="/MainPageAsset/10005.svg" alt="Location" />
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
                                    <div className="col-md-3 col-8 ms-auto part2">
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
                            <div className="col-sm-7 col-12 vis ">
                                <div className="col-12 py-sm-2">
                                    <div className="col-12 bg-white my-sm-0 my-3 px-sm-3 py-sm-2 py-1 part3">
                                        <div className="row">

                                            {/* first element */}
                                            <div className="col-5 ">
                                                <div className="row">

                                                    <div className="col-sm-2 col-3">
                                                        <img src="/MainPageAsset/10002.svg" alt="Location" />
                                                    </div>

                                                    <div className="col-sm-8 col-6 ps-0 pe-0">
                                                        <input type="text" placeholder="Pune" className="form-control border border-light" />
                                                    </div>

                                                    <div className="col-sm-1 col-3">
                                                        <img src="/MainPageAsset/10003.svg" alt="Location" />
                                                    </div>

                                                </div>

                                            </div>

                                            {/* second element */}
                                            <div className="col-7 m-auto " >
                                                <div className="row">

                                                    <div className="col-1 flex-karo">
                                                        <img src="/MainPageAsset/10005.svg" alt="Location" />
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


                    {/* section  */}
                    <section className='py-5 px-3'>

                        {/* ************************** for Food cart */}
                        {/* section 1 */}

                        <div className="col-sm-10 m-auto mt-5 section1 px-3 py-3 bg-white">

                            <p className='fs-2 fw-bold'>Your Order</p>

                            <div className=" col-sm-11 m-auto col-12 sec1 py-2 px-sm-1 px-2">

                                {
                                    food.map((val, index) => {
                                        return (
                                            <div className="row px-sm-3 px-2 mb-4 cards pt-3" key={index}>

                                                {/* part 1 */}
                                                <div className="col-sm-2 col-4 part1">
                                                    <img src={val.path} alt="" className='d-block' />
                                                </div>


                                                {/* part 2 */}
                                                <div className="col-sm-6 col-5 part2" >
                                                    <p className='p1 mb-2'>{val.title}</p>

                                                    <p className='h5 mt-sm-2 mt-0'>
                                                        <span class="badge bg-success">{val.star} <i className="bi bi-star-fill"></i></span>
                                                    </p>


                                                    <div className="col-sm-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-sm-5 col-10 ">
                                                                <div className='p3 mt-3'>
                                                                    <div className="col-12">
                                                                        <div className="row text-center">

                                                                            <div className="col-4 flex-karo">
                                                                                <p onClick={() => Decrease(val._id)}>-</p>
                                                                            </div>
                                                                            <div className="col-4 flex-karo">
                                                                                <p>{val.quantity}</p>
                                                                            </div>
                                                                            <div className="col-4 flex-karo">
                                                                                <p onClick={() => Increase(val._id)}>+</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-2">
                                                                <img src="https://cdn-icons-png.freepik.com/256/14978/14978684.png?ga=GA1.1.1701848800.1735364303&semt=ais_hybrid" alt="icon" className='d-block w-75' onClick={() => DeleteCard1(val._id)} />
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                                {/* part 3 */}
                                                <div className="col-sm-3 col-3 part3 text-end ">
                                                    <p>&#8377; {val.price}</p>
                                                    <p className='p2 dis'>Subtotal ( {val.quantity} item ) <span>&#8377; {val.price * val.quantity}</span></p>
                                                </div>

                                                <div className="col-sm-3 col-7 ms-auto part3 text-end vis">
                                                    <p className='p2'>Subtotal ( {val.quantity} item ) <span>&#8377; {val.price * val.quantity}</span></p>
                                                </div>

                                            </div>
                                        )
                                    }
                                    )
                                }


                            </div>


                        </div>

                        {/* ************************** for Place cart */}
                        {/* Section 2 */}


                        <div className="col-sm-10 m-auto mt-5 section1 px-3 py-3 bg-white">

                            <p className='fs-2 fw-bold' >Your Booking</p>

                            <div className=" col-sm-11 col-12 m-auto sec1 py-2 px-sm-1 px-2">

                                {
                                    place.map((val, index) => {



                                        return (
                                            <div className="row px-sm-3 px-2 mb-4 cards pt-3" key={index}>

                                                {/* part 1 */}
                                                <div className="col-sm-2 col-4 part1">
                                                    <img src={val.path} alt="" className='d-block' />
                                                </div>


                                                {/* part 2 */}
                                                <div className="col-sm-6 col-5 part2">
                                                    <p className='p1 mb-2'>{val.title}</p>

                                                    <p className='h5 mt-sm-2 mt-0'>
                                                        <span class="badge bg-success">{val.star} <i className="bi bi-star-fill"></i></span>
                                                    </p>

                                                    <div className="col-11 m-auto">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <div className='p3 mt-3'>
                                                                    <div className="col-12">
                                                                        <div className="row text-center">

                                                                            <div className="col-4 flex-karo">
                                                                                <p onClick={() => DecreaseP(val._id)} className='p1'>-</p>
                                                                            </div>
                                                                            <div className="col-4 flex-karo">
                                                                                <p>{val.quantity}</p>
                                                                            </div>
                                                                            <div className="col-4 flex-karo">
                                                                                <p onClick={() => IncreaseP(val._id)} className='p1'>+</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-2">
                                                                <img src="https://cdn-icons-png.freepik.com/256/14978/14978684.png?ga=GA1.1.1701848800.1735364303&semt=ais_hybrid" alt="icon" className='d-block w-75' onClick={() => DeleteCard2(val._id)} />
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                                {/* part 3 */}
                                                <div className="col-sm-3 col-3 ms-auto-0 ms-auto part3 text-end">
                                                    <p>&#8377; {val.price}</p>
                                                    <p className='p2 dis'>Subtotal ( {val.quantity} Table ) <span>&#8377; {val.price * val.quantity}</span></p>
                                                </div>

                                                <div className="col-sm-3 col-7 ms-auto part3 text-end vis">
                                                    <p className='p2'>Subtotal ( {val.quantity} item ) <span>&#8377; {val.price * val.quantity}</span></p>
                                                </div>

                                            </div>
                                        )
                                    }
                                    )
                                }


                            </div>


                        </div>

                    </section>
                </div>
            </div>







        </>
    )
}

export default CartPage;