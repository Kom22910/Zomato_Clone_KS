
import React, { StrictMode, useEffect, useState } from 'react';
import './food.css';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Section5 from './Section5';
import FooterSec from './FooterSec';
import { NavLink } from 'react-router-dom';
import Section2 from './Section2';
import axios from 'axios';
import AddMoreProductForm from './AddMoreProductForm';
import AddMorePlacesForm from './AddMorePlacesForm';



const PlacesPage = () => {

    let show_page = {
        login: false,
        sign: false
    }
    const [show, sethide] = useState(show_page);




    // const cardinfo2 = [
    //     {
    //         id: 1,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10006.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 50% OFF</p>
    //         </div>,

    //         title: "Crazy Cheesy",
    //         star: 4.3,
    //         p1: "Chinese, Salad, North Indian",
    //         p2: "Senapati Bapat Road, Pune",
    //         price: "1,800",
    //         minute: 3.2
    //     },
    //     {
    //         id: 2,
    //         path: "PlaceAsset/10007.webp",
    //         w: 100,
    //         h: 100,
    //         offer: null,

    //         title: "FC Road Social",
    //         star: 4.1,
    //         p1: "North Indian, Biryani, Pizza, St ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "1,500",
    //         minute: 1.7
    //     },

    //     {
    //         id: 3,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10008.webp",
    //         w: 150,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 50% OFF</p>
    //         </div>,
    //         title: "Plunge",
    //         star: 4.3,
    //         p1: "Bar Food, North Indian, Chines ",
    //         p2: "Koregaon Park, Pune",
    //         price: "2,500",
    //         minute: 2.7
    //     },
    //     {
    //         id: 4,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10009.webp",
    //         w: 150,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 20% OFF</p>
    //         </div>,
    //         title: "The Game Palacio",
    //         star: 4.5,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "The Mills, Bund Garden Road, Pune",
    //         price: "1,400",
    //         minute: 1.9
    //     },
    //     {
    //         id: 5,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10010.webp",
    //         w: 150,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 10% OFF</p>
    //         </div>,
    //         title: "Persian Darbar",
    //         star: 4.4,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Camp Area, Pune",
    //         price: "1,200",
    //         minute: 1.8
    //     },
    //     {
    //         id: 6,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10011.webp",
    //         w: 150,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 25% OFF</p>
    //         </div>,
    //         title: "Feast - Sheraton Grand",
    //         star: 4.3,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Sheraton Grand, Bund Garden Road, Pune",
    //         price: "1,000",
    //         minute: 1.8
    //     },
    //     {
    //         id: 7,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10012.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 15% OFF</p>
    //         </div>,
    //         title: "Millers - The Luxury Club",
    //         star: 4.3,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Sheraton Grand, Bund Garden Road, Pune",
    //         price: "1,000",
    //         minute: 2
    //     },
    //     {
    //         id: 8,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10013.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 10% OFF</p>
    //         </div>,
    //         title: "Mamagoto",
    //         star: 4.3,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "The Pavillion, Senapati Bapat Road, Pu",
    //         price: "1,200",
    //         minute: 2
    //     },
    //     {
    //         id: 9,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10014.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 10% OFF</p>
    //         </div>,
    //         title: "Ventana",
    //         star: 4.5,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "The Pavillion, Senapati Bapat Road, Pu",
    //         price: "1,200",
    //         minute: 7
    //     },
    //     {
    //         id: 10,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10015.webp",
    //         w: 100,
    //         h: 100,
    //         offer: null,
    //         title: "2BHK Diner & Key Club",
    //         star: 4.3,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "The Pavillion, Senapati Bapat Road, Pu",
    //         price: "3,000",
    //         minute: 2
    //     },
    //     {
    //         id: 11,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10016.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 30% OFF</p>
    //         </div>,
    //         title: "Fountain House",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "900",
    //         minute: 3
    //     },
    //     {
    //         id: 12,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10017.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 30% OFF</p>
    //         </div>,
    //         title: "Hakuna Matata",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "1,900",
    //         minute: 1.2
    //     },
    //     {
    //         id: 13,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10017.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 30% OFF</p>
    //         </div>,
    //         title: "Hakuna Matata",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "1,900",
    //         minute: 1.2
    //     },
    //     {
    //         id: 14,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10018.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 30% OFF</p>
    //         </div>,
    //         title: "360 Degree - The Revolving Fine",
    //         star: 4.0,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "1,400",
    //         minute: 1.9
    //     },
    //     {
    //         id: 15,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10019.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 25% OFF</p>
    //         </div>,
    //         title: "AMBARSARIYA - Authentic Am",
    //         star: 4.6,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "1,000",
    //         minute: 2.7
    //     },

    //     {
    //         id: 16,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10020.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 15% OFF</p>
    //         </div>,
    //         title: "Addah - The O Hotel",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.9
    //     },
    //     {
    //         id: 17,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10021.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;Flat 10% OFF</p>
    //         </div>,
    //         title: "Ava Artisan Kitchen & Bar",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.9
    //     },
    //     {
    //         id: 18,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10022.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 40% OFF</p>
    //         </div>,
    //         title: "Ava Artisan Kitchen & Bar",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.9
    //     },
    //     {
    //         id: 19,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10023.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 40% OFF</p>
    //         </div>,
    //         title: "Mask Club",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.9
    //     },
    //     {
    //         id: 20,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10024.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 20% OFF</p>
    //         </div>,
    //         title: "Cherie",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.9
    //     },
    //     {
    //         id: 21,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10025.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 10% OFF</p>
    //         </div>,
    //         title: "High Garden",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.9
    //     },
    //     {
    //         id: 22,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10026.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 10% OFF</p>
    //         </div>,
    //         title: "Klinq - Cocktails & Cuisinen",
    //         star: 4.2,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.9
    //     },
    //     {
    //         id: 23,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10033.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 30% OFF</p>
    //         </div>,
    //         title: "Publiq",
    //         star: 4.1,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.8
    //     },
    //     {
    //         id: 24,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10040.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 10% OFF</p>
    //         </div>,
    //         title: "Heads Up Rooftop Bar",
    //         star: 4.1,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.8
    //     },
    //     {
    //         id: 25,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10041.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 10% OFF</p>
    //         </div>,
    //         title: "Heads Up Rooftop Bar",
    //         star: 4.1,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.8
    //     },
    //     {
    //         id: 26,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10042.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 25% OFF</p>
    //         </div>,
    //         title: "Akasa Poolbar & Kitchen",
    //         star: 4.1,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.8
    //     },
    //     {
    //         id: 27,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "PlaceAsset/10043.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>Flat 25% OFF</p>
    //         </div>,
    //         title: "CHA",
    //         star: 4.1,
    //         p1: "Pizza, Sushi, Asian, Italian ",
    //         p2: "Shivaji Nagar, Pune",
    //         price: "3,000",
    //         minute: 2.8
    //     },




    // ]


    const FetchPlaceData = async (id) => {
        let res = await axios.get(`http://localhost:3000/placeCard/${id}`);
        let data = res.data;


        axios.post("http://localhost:3000/cartPlace", data)
        .then((res)=>{
            setTimeout(()=>{
                alert("Successfully Added to Cart");
            },100)
        })
        .catch((error)=>{
            setTimeout(()=>{
                alert("You Already Added !!!");
            },100)
        })
    }





    const [addmore, setAddmore] = useState(false);
    const [data, setData] = useState([]);


    const FetchWholePlaceData = async () => {
        let res = await axios.get("http://localhost:3000/placeCard");
        setData(res.data);
    }

    useEffect(() => {
        FetchWholePlaceData();
        }, [addmore])


    return (
        <StrictMode>

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
                            <div className="col-sm-3 col-4 sec3 ms-auto me-sm-0 me-3 px-2">
                                <div className="row">

                                    <div className="col-sm-5 col-6 m-sm-auto fw-bold px-0 text-center pt-3">
                                        <p onClick={() => sethide({ login: true })} className='py-2 p1'>Log in</p>
                                    </div>

                                    <div className="col-sm-5 col-6 fw-bold px-0 m-sm-auto text-center  pt-3">
                                        <p onClick={() => sethide({ sign: true })} className='p1'>Sign Up</p>
                                    </div>
                                </div>
                            </div>


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
                                                                <button className='btn btn-warning w-100 addtocart' onClick={() => FetchPlaceData(val.id)} >Add to Cart</button>
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
                                    <button className='btn btn-success w-25 py-2' onClick={() => setAddmore(true)} > Add Your Food </button>
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



            {
                addmore && (
                    <AddMorePlacesForm 
                            close={() => setAddmore(false)} 
                            />
                )
            }



        </StrictMode>
    )
}

export default PlacesPage;