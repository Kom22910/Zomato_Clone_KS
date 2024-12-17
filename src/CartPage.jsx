




import React, { StrictMode, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import axios from 'axios';

import './App.css';

const CartPage = () => {


    let show_page = {
        login: false,
        sign: false
    }

    const [show, sethide] = useState(show_page);

    // ********************** holding data declarre
    const [food, setFood] = useState([]);
    const [place, setPlace] = useState([]);



    // ********************* fetching 
    const FetchFoodData = async () => {
        let result = await axios.get("http://localhost:3000/cartFood");
        setFood(result.data);
    }

    const FetchPlaceData = async () => {
        let result2 = await axios.get("http://localhost:3000/cartPlace");
        setPlace(result2.data);
    }


    // *************** fetching initial data 

    useEffect(() => {
        FetchFoodData();
        FetchPlaceData();
    }, []);





    // calculation part

    // const [count, setCount] = useState(3);
    // const [quantity,setQuantity] = useState(null);

    // const dec=(a)=>{
    //     setCount(a);
    // }



    // ************************* operation on food part

    const Decrease = async(id) => {
        let res = [...food];
        let num = res.findIndex((item) => item.id === id);
        let value = res[num].quantity;

        if (num !== -1) {
            if (value > 0) {
                res[num].quantity -= 1;
                setFood(res);

                await axios.patch(`http://localhost:3000/cartFood/${id}`, {
                    quantity: value - 1
                });
            }
        }

    };

    const Increase = async (id) => {
        let res = [...food];
        let num = res.findIndex((item) => item.id === id);
        let value = res[num].quantity;
        console.log(value);

        if (num !== -1) {
            if (value >=0) {
                res[num].quantity = Number(value) + 1;
                setFood(res);

                await axios.patch(`http://localhost:3000/cartFood/${id}`, {
                    quantity: value + 1
                });
            }
        }
    };


    const DeleteCard1 = async (id) => {
        let newdata = food.filter((item) => item.id !== id);
        setFood(newdata);

        await axios.delete(`http://localhost:3000/cartFood/${id}`)
    }







    // ************************ operation on Place card

    const DecreaseP = async(id) => {
        let res = [...place];
        let num = res.findIndex((item) => item.id === id);
        let value = res[num].quantity;

        if (num !== -1) {
            if (value > 0) {
                res[num].quantity -= 1;
                setPlace(res);

                await axios.patch(`http://localhost:3000/cartPlace/${id}`, {
                    quantity: value -1
                });
            }
        }

    };

    const IncreaseP = async (id) => {
        let res = [...place];
        let num = res.findIndex((item) => item.id === id);
        let value = res[num].quantity;
        console.log(value);

        if (num !== -1) {
            if (value >=0) {
                res[num].quantity = Number(value) + 1;
                setPlace(res);

                await axios.patch(`http://localhost:3000/cartPlace/${id}`, {
                    quantity: value + 1
                });
            }
        }
    };

    const DeleteCard2 = async (id) => {
        let newdata = place.filter((item) => item.id !== id);
        setPlace(newdata);

        await axios.delete(`http://localhost:3000/cartPlace/${id}`)
    }


    // const updateQauntiy=async()=>{
    //     await axios.patch("http://localhost:3000/cartFood/1" , {

    //     })
    // }

    return (
        <StrictMode>

            <div className="container-fluid s cartpage" >
                <div className="row">




                    {/* header */}
                    <header className='col-sm-10 m-auto p-sm-4 p-3 '>
                        <div className="row">

                            {/* section 1 */}
                            <div className="col-sm-2 col-4 sec1">
                                <NavLink to='/'>
                                    <img src="MainPageAsset/10028.webp" alt="" className='d-block w-sm-75 w-100' />
                                </NavLink>
                            </div>

                            {/* section 2 */}
                            <div className="col-sm-7 col-8 dis  ">
                                <div className="col-12 py-2">
                                    <div className="col-12 bg-white px-sm-3 py-sm-2 part3">
                                        <div className="row">

                                            {/* first element */}
                                            <div className="col-5 dis">
                                                <div className="row">

                                                    <div className="col-2">
                                                        <img src="MainPageAsset/10002.svg" alt="Location" />
                                                    </div>

                                                    <div className="col-8 ps-0 pe-0">
                                                        <input type="text" placeholder="Pune" className="form-control border border-light" />
                                                    </div>

                                                    <div className="col-1">
                                                        <img src="MainPageAsset/10003.svg" alt="Location" />
                                                    </div>

                                                </div>

                                            </div>

                                            {/* second element */}
                                            <div className="col-sm-7 col-11 m-auto " >
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
                            <div className="col-sm-2 col-5 sec3 ms-auto me-sm-1 me-3 px-2  ">
                                <div className="row">

                                    <div className="col-sm-5 col-6 m-sm-auto fw-bold px-0 text-center pt-3">
                                        <p onClick={() => sethide({ login: true })} className=' p1'>Log in</p>
                                    </div>

                                    <div className="col-sm-5 col-6 fw-bold px-0 m-sm-auto text-center  pt-3">
                                        <p onClick={() => sethide({ sign: true })} className='p1'>Sign Up</p>
                                    </div>
                                </div>
                            </div>




                            {/* section 4 */}
                            <div className="col-sm-7 col-12 vis ">
                                <div className="col-12 py-sm-2">
                                    <div className="col-12 bg-white my-sm-0 my-3 px-sm-3 py-sm-2 py-1 part3">
                                        <div className="row">

                                            {/* first element */}
                                            <div className="col-5 ">
                                                <div className="row">

                                                    <div className="col-sm-2 col-3">
                                                        <img src="MainPageAsset/10002.svg" alt="Location" />
                                                    </div>

                                                    <div className="col-sm-8 col-6 ps-0 pe-0">
                                                        <input type="text" placeholder="Pune" className="form-control border border-light" />
                                                    </div>

                                                    <div className="col-sm-1 col-3">
                                                        <img src="MainPageAsset/10003.svg" alt="Location" />
                                                    </div>

                                                </div>

                                            </div>

                                            {/* second element */}
                                            <div className="col-7 m-auto " >
                                                <div className="row">

                                                    <div className="col-1 flex-karo">
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


                    {/* section  */}
                    <section className='py-5 px-3'>




                        {/* ************************** for Food cart */}
                        {/* section 1 */}

                        <div className="col-sm-10 m-auto mt-5 section1 py-3 bg-white">

                            <p className='fs-2 fw-bold'>Your Order</p>

                            <div className="col-12 sec1 py-2 px-sm-1 px-2">

                                {
                                    food.map((val) => {


                                        return (
                                            <div className="row px-sm-3 px-2 mb-4 cards pt-3">

                                                {/* part 1 */}
                                                <div className="col-sm-2 col-4 part1">
                                                    <img src={val.path} alt="" className='d-block' />
                                                </div>


                                                {/* part 2 */}
                                                <div className="col-sm-6 col-5 part2" >
                                                    <p className='p1 mb-2'>{val.title}</p>

                                                    <p className='h5 mt-sm-2 mt-0'>
                                                        <span class="badge bg-success">{val.star}</span>
                                                    </p>
                                                    <div className="col-sm-12 m-auto">
                                                        <div className="row">
                                                            <div className="col-sm-5 col-10 ">
                                                                <p className='p3 mt-3'>
                                                                    <div className="col-12">
                                                                        <div className="row text-center">

                                                                            <div className="col-4 flex-karo">
                                                                                <p onClick={() => Decrease(val.id)}>-</p>
                                                                            </div>
                                                                            <div className="col-4 flex-karo">
                                                                                <p>{val.quantity}</p>
                                                                            </div>
                                                                            <div className="col-4 flex-karo">
                                                                                <p onClick={() => Increase(val.id)}>+</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </p>
                                                            </div>

                                                            <div className="col-2">
                                                                <img src="delete.png" alt="" className='d-block w-100' onClick={() => DeleteCard1(val.id)} />
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


                        <div className="col-sm-10 m-auto mt-5 section1 py-3 bg-white">

                            <p className='fs-2 fw-bold' >Your Booking</p>

                            <div className="col-12 sec1 py-2 px-sm-1 px-2">

                                {
                                    place.map((val) => {



                                        return (
                                            <div className="row px-sm-3 px-2 mb-4 cards pt-3">

                                                {/* part 1 */}
                                                <div className="col-sm-2 col-4 part1">
                                                    <img src={val.path} alt="" className='d-block' />
                                                </div>


                                                {/* part 2 */}
                                                <div className="col-sm-6 col-5 part2">
                                                    <p className='p1 mb-2'>{val.title}</p>

                                                    <p className='h5 mt-sm-2 mt-0'>
                                                        <span class="badge bg-success">{val.star}</span>
                                                    </p>

                                                    <div className="col-11 m-auto">
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <p className='p3 mt-3'>
                                                                    <div className="col-12">
                                                                        <div className="row text-center">

                                                                            <div className="col-4 flex-karo">
                                                                                <p onClick={() => DecreaseP(val.id)}>-</p>
                                                                            </div>
                                                                            <div className="col-4 flex-karo">
                                                                                <p>{val.quantity}</p>
                                                                            </div>
                                                                            <div className="col-4 flex-karo">
                                                                                <p onClick={() => IncreaseP(val.id)}>+</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </p>
                                                            </div>

                                                            <div className="col-2">
                                                                <img src="delete.png" alt="" className='d-block w-100' onClick={() => DeleteCard2(val.id)} />
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

export default CartPage;