import React, { useEffect, useState } from 'react';
import '../A-GlobalStyle/Food.css';
import { useAuth } from '../UseContextStore/Auth.jsx';
import Loading from '../E-ExtraFunction/Loading.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import BodySection5 from '../C-BodySection/BodySection5.jsx';
import LayoutFooter from '../B-LayoutSection/LayoutFooter.jsx';
import axios from 'axios';


const FoodPage = () => {

    const { Base_url, isLogin, userId } = useAuth();
    const nav = useNavigate();

    let show_page = {
        login: false,
        sign: false
    }
    const [show, sethide] = useState(show_page);

    const cardinfo = [
        {
            id: 1,
            path: "/FoodPageAsset/10029.webp",
            p: "Pizza"
        },
        {
            id: 2,
            path: "/FoodPageAsset/10030.webp",
            p: "Burger"
        },
        {
            id: 3,
            path: "/FoodPageAsset/10031.webp",
            p: "Biryani"
        },
        {
            id: 4,
            path: "/FoodPageAsset/10032.webp",
            p: "Cake"
        },
        {
            id: 5,
            path: "/FoodPageAsset/10033.webp",
            p: "Sandwich"
        },
        {
            id: 6,
            path: "/FoodPageAsset/10034.webp",
            p: "Chicken"
        },
    ]

    const brandinfo = [
        {
            id: 1,
            path: "/FoodPageAsset/10035.webp",
            p: "McDonald's",
            min: 31,
            color: "#FFBC0D"
        },
        {
            id: 2,
            path: "/FoodPageAsset/10036.png",
            p: "Burger King",
            min: 58,
            color: '#FFFFFF'
        },
        {
            id: 3,
            path: "/FoodPageAsset/10037.webp",
            p: "KFC",
            min: 38,
            color: "#FFFFFF"
        },
        {
            id: 4,
            path: "/FoodPageAsset/10038.webp",
            p: "Rolls Mania",
            min: 37,
            color: "#0B0708"
        },
        {
            id: 5,
            path: "/FoodPageAsset/10039.webp",
            p: "Irani Cafe",
            min: 35,
            color: "#4B0000"
        },
        {
            id: 6,
            path: "/FoodPageAsset/10040.webp",
            p: "Aroma's Hyderabad House",
            min: 40,
            color: "#FFFFFF"
        },
    ]


    const [showdrop, sethidedrop] = useState(false);

    const [data, setData] = useState([]);


    const hiding = () => {
        sethidedrop(!showdrop);
    }


    const [loading, setLoading] = useState(false);


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
                })

        }
        catch (err) {
            alert(err);
            console.log(err);
        }
    }










    // ************************************ Add more funciton 
    const [addmore, setAddmore] = useState(false);


    const FetchFoodData = async () => {
        try {
            setLoading(true);
            let res = await axios.get(`${Base_url}/food/get`);
            setData(res.data.Data);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
        finally {
            setLoading(false);
        }
    }


    // **********

    // Delete card

    const DeleteCard1 = async (id) => {
        try {
            setLoading(true);

            await axios.delete(`${Base_url}/food/get/${id}`)
                .then((res) => {
                    alert(res.data.Message);
                    let newdata = data.filter((item) => item._id !== id);
                    setData(newdata);
                })
        }
        catch (err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }

    }


    const [showprofile, setHideProfile] = useState(false);



    // *********

    useEffect(() => {
        FetchFoodData();
    }, [addmore, showprofile]);




    return (
        <>
            <Loading loading={loading} />



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
                                                                <img src={val.path} alt="places" className='d-block w-100 rounded-pill' />
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
                                        data.map((val, index) => {

                                            return (
                                                <div className="col-sm-4 col-10 m-sm-0  m-auto p-sm-3 my-sm-0 my-3" key={index}   >
                                                    <div className="col-12 card_part">

                                                        {/* card part 1 */}
                                                        <div className="col-12 image">
                                                            <img src={val.path} alt="" />
                                                        </div>

                                                        {/* card part 2 */}
                                                        <div className="col-12 px-3 card_part2 mt-2">

                                                            {/* *********************** */}
                                                            <div className="row">
                                                                <div className="col-9">
                                                                    <p className='para a1'>{val.title}</p>
                                                                </div>

                                                                <div className="col-3 ms-auto text-end">
                                                                    <p className='badge bg-success ms-auto'>{val.star} <i className="bi bi-star-fill"></i> </p>
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
                                                                <button className='btn btn-warning w-100 addtocart' onClick={() => AddtoCart(val._id)}>Add to Cart</button>
                                                                {
                                                                    userId === "admindminmininm" &&
                                                                    <button className='btn btn-danger w-100 addtocart' onClick={() => DeleteCard1(val._id)}> Delete </button>
                                                                }
                                                            </div>



                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                                {/* 2 - add more */}
                                {
                                    userId === 'admindminmininm' &&
                                    <div className="col-12 px-2 py-2 mt-5 text-center">
                                        <button className='btn btn-success col-sm-3 col-10 py-2' onClick={() => nav('/addfood')} > Add Your Food </button>
                                    </div>
                                }
                            </div>

                        </div>

                        {/* section 4 */}
                        <div className="col-sm-10 col-12 m-auto">
                            <BodySection5 />
                        </div>


                    </section>

                    {/* footer */}
                    <LayoutFooter />

                </div>
            </div>


            <NavLink to='/cart'>
                <div className="cart-icon">
                    <div className="card1">
                        <img src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                    </div>
                </div>
            </NavLink>

        </>
    )
}

export default FoodPage;