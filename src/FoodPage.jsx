



import React, { StrictMode, useEffect, useState } from 'react';
import './food.css';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Section5 from './Section5';
import FooterSec from './FooterSec';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import AddMoreProductForm from './AddMoreProductForm';

const FoodPage = () => {

    let show_page = {
        login: false,
        sign: false
    }
    const [show, sethide] = useState(show_page);

    const cardinfo = [
        {
            id: 1,
            path: "FoodPageAsset/10029.webp",
            p: "Pizza"
        },
        {
            id: 2,
            path: "FoodPageAsset/10030.webp",
            p: "Burger"
        },
        {
            id: 3,
            path: "FoodPageAsset/10031.webp",
            p: "Biryani"
        },
        {
            id: 4,
            path: "FoodPageAsset/10032.webp",
            p: "Cake"
        },
        {
            id: 5,
            path: "FoodPageAsset/10033.webp",
            p: "Sandwich"
        },
        {
            id: 6,
            path: "FoodPageAsset/10034.webp",
            p: "Chicken"
        },
    ]

    const brandinfo = [
        {
            id: 1,
            path: "FoodPageAsset/10035.webp",
            p: "McDonald's",
            min: 31,
            color: "#FFBC0D"
        },
        {
            id: 2,
            path: "FoodPageAsset/10036.png",
            p: "Burger King",
            min: 58,
            color: '#FFFFFF'
        },
        {
            id: 3,
            path: "FoodPageAsset/10037.webp",
            p: "KFC",
            min: 38,
            color: "#FFFFFF"
        },
        {
            id: 4,
            path: "FoodPageAsset/10038.webp",
            p: "Rolls Mania",
            min: 37,
            color: "#0B0708"
        },
        {
            id: 5,
            path: "FoodPageAsset/10039.webp",
            p: "Irani Cafe",
            min: 35,
            color: "#4B0000"
        },
        {
            id: 6,
            path: "FoodPageAsset/10040.webp",
            p: "Aroma's Hyderabad House",
            min: 40,
            color: "#FFFFFF"
        },
    ]


    // const cardinfo2 = [
    //     {
    //         id: 1,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "FoodPageAsset/10044.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;150 OFF</p>
    //         </div>,

    //         title: "Crazy Cheesy",
    //         star: 4.3,
    //         p1: "Pizza , Pasta , Burger ",
    //         price: 150,
    //         minute: 35
    //     },
    //     {
    //         id: 2,
    //         path: "FoodPageAsset/10042.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>10% OFF</p>
    //         </div>,

    //         title: "McDonald's",
    //         star: 4.3,
    //         p1: "Burger ,Fast Food ,Dessert ",
    //         price: 200,
    //         minute: 27
    //     },

    //     {
    //         id: 3,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "FoodPageAsset/10041.webp",
    //         w: 150,
    //         h: 100,
    //         offer: null,
    //         title: "KFC",
    //         star: 4.1,
    //         p1: "Burger , Rolls , Fast Food ",
    //         price: 200,
    //         minute: 31
    //     },
    //     {
    //         id: 4,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "FoodPageAsset/10045.webp",
    //         w: 130,
    //         h: 100,
    //         offer: null,
    //         title: "Pizza Hut",
    //         star: 3.9,
    //         p1: "Pizza , Pasta , Fast Food ",
    //         price: 100,
    //         minute: 38
    //     },
    //     {
    //         id: 5,
    //         promo: null,
    //         path: "FoodPageAsset/10047.webp",
    //         w: 110,
    //         h: 110,
    //         offer: null,
    //         title: "Garva Biryani",
    //         star: 3.8,
    //         p1: "Biryani ",
    //         price: 150,
    //         minute: 24
    //     },
    //     {
    //         id: 6,
    //         path: "FoodPageAsset/10043.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;200 OFF</p>
    //         </div>,

    //         title: "Rolls Mania",
    //         star: 4.4,
    //         p1: "Rolls ,Fast Food ,Wraps ",
    //         price: 150,
    //         minute: 34
    //     },
    //     {
    //         id: 7,
    //         promo: null,
    //         path: "FoodPageAsset/10052.webp",
    //         w: 150,
    //         h: 100,
    //         offer: null,
    //         title: "Burger King",
    //         star: 3.9,
    //         p1: "Burger , Fast Food , Beverages",
    //         price: 150,
    //         minute: 44
    //     },
    //     {
    //         id: 8,
    //         promo: null,
    //         path: "FoodPageAsset/10049.webp",
    //         w: 100,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;100 OFF</p>
    //         </div>,

    //         title: " Aroma's Hyderabad House",
    //         star: 4.3,
    //         p1: "Biryani, Kebab, North Indian,",
    //         price: 550,
    //         minute: 26
    //     },
    //     {
    //         id: 9,
    //         promo: null,
    //         path: "FoodPageAsset/10053.webp",
    //         w: 150,
    //         h: 100,
    //         offer: null,
    //         title: "Burger - Since 1989",
    //         star: 4.5,
    //         p1: "Burger , Fast Food ",
    //         price: 100,
    //         minute: 61
    //     },
    //     {
    //         id: 10,
    //         promo: null,
    //         path: "FoodPageAsset/10051.webp",
    //         w: 100,
    //         h: 100,
    //         offer: null,

    //         title: " Shahji's Parantha House",
    //         star: 4.4,
    //         p1: "North Indian,",
    //         price: 250,
    //         minute: 28
    //     },
    //     {
    //         id: 11,
    //         promo: null,
    //         path: "FoodPageAsset/10054.webp",
    //         w: 150,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>30% OFF</p>
    //         </div>,

    //         title: " Wendy's Burgers",
    //         star: 4.3,
    //         p1: "Burger, Fast Food, America Burger,",
    //         price: 200,
    //         minute: 31
    //     },
    //     {
    //         id: 12,
    //         promo: null,
    //         path: "FoodPageAsset/10058.webp",
    //         w: 120,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>10% OFF</p>
    //         </div>,

    //         title: " Faasos - Wraps, Rolls & Shawar",
    //         star: 4.4,
    //         p1: "Rolls, Wraps, Shawarma",
    //         price: 200,
    //         minute: 29
    //     },
    //     {
    //         id: 13,
    //         promo: null,
    //         path: "FoodPageAsset/10059.webp",
    //         w: 120,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;150 OFF</p>
    //         </div>,

    //         title: " Theobroma ",
    //         star: 4.4,
    //         p1: "Bakery, Desserts",
    //         price: 200,
    //         minute: 26
    //     },
    //     {
    //         id: 14,
    //         promo: null,
    //         path: "FoodPageAsset/10060.webp",
    //         w: 140,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;200 OFF</p>
    //         </div>,

    //         title: " Subway ",
    //         star: 4.2,
    //         p1: "Healthy Food, Sandwich, ",
    //         price: 200,
    //         minute: 32
    //     },
    //     {
    //         id: 15,
    //         promo: null,
    //         path: "FoodPageAsset/10061.webp",
    //         w: 100,
    //         h: 100,
    //         offer: null,

    //         title: " Chitale Bandhu Mithaiwale ",
    //         star: 4.6,
    //         p1: "Mithai, Street Food, Maharas",
    //         price: 150,
    //         minute: 34
    //     },

    //     {
    //         id: 16,
    //         promo: null,
    //         path: "FoodPageAsset/10062.webp",
    //         w: 100,
    //         h: 100,
    //         offer: null,

    //         title: "PK Biryani House",
    //         star: 4.2,
    //         p1: "Biryani, North Indian, Mughlai",
    //         price: 200,
    //         minute: 35
    //     },
    //     {
    //         id: 17,
    //         promo: null,
    //         path: "FoodPageAsset/10063.webp",
    //         w: 100,
    //         h: 100,
    //         offer: null,
    //         title: "Irani Cafe",
    //         star: 4.4,
    //         p1: "Iranian, Fast Food, Bakery, De",
    //         price: 150,
    //         minute: 32
    //     },
    //     {
    //         id: 18,
    //         promo: null,
    //         path: "FoodPageAsset/10064.webp",
    //         w: 150,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>75% OFF</p>
    //         </div>,

    //         title: "Hotel Al Zaika",
    //         star: 3.9,
    //         p1: "North Indian, Mughlai, Biryani,",
    //         price: 250,
    //         minute: 37
    //     },
    //     {
    //         id: 19,
    //         promo: null,
    //         path: "FoodPageAsset/10065.webp",
    //         w: 125,
    //         h: 100,
    //         offer: null,

    //         title: "Ganesh Bhel",
    //         star: 4.5,
    //         p1: "Street Food, Sandwich",
    //         price: 100,
    //         minute: 24
    //     },
    //     {
    //         id: 20,
    //         promo: null,
    //         path: "FoodPageAsset/10068.webp",
    //         w: 125,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;100 OFF</p>
    //         </div>,

    //         title: "Haldiram's",
    //         star: 4.3,
    //         p1: "Mithai, South Indian, North Ind",
    //         price: 200,
    //         minute: 32
    //     },
    //     {
    //         id: 21,
    //         promo: <p className='promotion'>Promoted</p>,
    //         path: "FoodPageAsset/10069.webp",
    //         w: 150,
    //         h: 100,
    //         offer: <div className="rate px-3">
    //             <p>&#8377;175 OFF</p>
    //         </div>,

    //         title: "Chaitanya Paranthas",
    //         star: 4.1,
    //         p1: "North Indian, Chinese, Biryani, Beverages",
    //         price: 200,
    //         minute: 41
    //     },
    //     {
    //         id: 22,
    //         promo: null,
    //         path: "FoodPageAsset/10070.webp",
    //         w: 150,
    //         h: 100,
    //         offer: null,

    //         title: "Lassi Wassi",
    //         star: 4.5,
    //         p1: "Beverages, Shake, Shawarm",
    //         price: 100,
    //         minute: 41
    //     },
    //     {
    //         id: 23,
    //         promo: null,
    //         path: "FoodPageAsset/10072.webp",
    //         w: 150,
    //         h: 100,
    //         offer: null,

    //         title: "Cafe Durga",
    //         star: 3.6,
    //         p1: "North Indian, South Indian, Sa",
    //         price: 150,
    //         minute: 29
    //     },
    //     {
    //         id: 24,
    //         promo: null,
    //         path: "FoodPageAsset/10074.webp",
    //         w: 150,
    //         h: 100,
    //         offer: null,

    //         title: "The Momo Panda",
    //         star: 3.9,
    //         p1: "Momos",
    //         price: 100,
    //         minute: 39
    //     },




    // ]


    const FetchPlaceData = async (id) => {
        let res = await axios.get(`http://localhost:3000/foodCard/${id}`);
        let data = res.data;
        axios.post("http://localhost:3000/cartFood", data)
            .then((response) => {
                setTimeout(() => {
                    alert("Add to Cart Successfully !! ");
                }, 100)
            })
            .catch((error) => {
                setTimeout(() => {
                    alert("Already Added in cart");
                }, 100)
            })
    }



    const [addmore, setAddmore] = useState(false);
    const [data, setData] = useState([]);


    const FetchFoodData = async () => {
        let res = await axios.get("http://localhost:3000/foodCard");
        setData(res.data);
    }

    useEffect(() => {
        FetchFoodData();
    }, [addmore])


    return (
        <StrictMode>

            <div className="container-fluid foodpage">
                <div className="row">

                    {/* header section  */}
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



                    {/* Section  */}
                    <section className='col-12 m-auto p-0 py-5 '>

                        {/* section 1 */}
                        <div className="col-12 p-2 py-sm-5 py-4 section1">
                            <div className="row">
                                <div className="col-sm-10 col-11 m-auto">


                                    {/* part 1 */}
                                    <div className="col-12 part1">
                                        <p>Inspiration for your first order</p>
                                    </div>

                                    {/* part 2 */}
                                    <div className="col-12 part2">
                                        <div className="row px-sm-5 my-sm-5">

                                            {
                                                cardinfo.map((val) => {
                                                    return (
                                                        <div className="col-sm-2 col-4 my-sm-0 my-1" key={val.id}>
                                                            <div className="col-12">
                                                                <img src={val.path} alt="" className='d-block w-100 rounded-pill' />
                                                            </div>
                                                            <div className="col-12 para my-sm-3">
                                                                <p className='text-center fs-sm-4 p1'>{val.p}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* section 2 */}
                        <div className="col-sm-10 col-11 p-2 py-sm-5 py-4 m-auto section2">

                            {/* part 1 */}
                            <div className="col-12 first">
                                <p>Inspiration for your Brands</p>
                            </div>

                            {/* part 2 */}
                            <div className="col-12 second">
                                <div className="row px-sm-5 my-sm-5 pb-sm-0 mb-sm-0">

                                    {
                                        brandinfo.map((val) => {
                                            return (
                                                <div className="col-sm-2 col-4 my-sm-0 my-2" key={val.id}>
                                                    <div className="col-12 image" style={{ backgroundColor: val.color }}>
                                                        <img src={val.path} alt="" className='d-block' />
                                                    </div>
                                                    <div className="col-12 para my-sm-3">
                                                        <p className='text-center fs-sm-5 mb-0 p1'>{val.p}</p>
                                                        <p className='text-center p2'>31 min</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                        {/* Section 3  */}
                        <div className="col-sm-10 col-11 p-2 py-sm-0 py-4 mt-sm-0 m-auto section3">

                            {/* part 1 */}
                            <div className="col-12 part1">
                                <p>Pune Restaurants</p>
                            </div>


                            <div className="col-12 part2">


                                {/* 1 - cards  */}
                                <div className="row px-sm-3">



                                    {/* cards */}

                                    {
                                        data.map((val) => {

                                            return (
                                                <div className="col-sm-4 col-10 m-sm-0  m-auto p-sm-3 my-sm-0 my-3" key={val.id}   >
                                                    <div className="col-12 card_part">

                                                        {/* card part 1 */}
                                                        <div className="col-12 image">
                                                            {val.promo}

                                                            <img src={val.path} alt="" style={{ width: val.w + "%", height: val.h + "%" }} />

                                                            {val.offer}
                                                        </div>

                                                        {/* card part 2 */}
                                                        <div className="col-12 px-3 card_part2 mt-2">

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
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <p className='a1'>{val.p1}</p>
                                                                </div>

                                                                <div className="col-sm-4 col-6 ms-auto text-end">
                                                                    <p>&#8377;{val.price} for one</p>
                                                                </div>
                                                            </div>

                                                            {/***************************************** * */}
                                                            <div className="col-12 text-end">
                                                                <p className='min'>{val.minute} min</p>
                                                            </div>


                                                            {/* **************************************** */}
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

                                {/* 2 - add more */}

                                <div className="col-12 px-2 py-2 mt-5 text-center">
                                    <button className='btn btn-success col-sm-3 col-8  py-2' onClick={() => setAddmore(true)} > Add Your Food </button>
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
                <div className="cart-icon">
                    <div className="card1">
                        <img src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                    </div>
                </div>
            </NavLink>





            {
                addmore && (
                    <AddMoreProductForm 
                            close={() => setAddmore(false)} 
                            />
                )
            }


        </StrictMode>

    )
}

export default FoodPage;