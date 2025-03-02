

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../UseContextStore/Auth.jsx';
import Sec3Card from '../C-BodySectionCards/Sec3Card.jsx';


const BodySection3 = () => {

    const nav = useNavigate();

    const { Base_url } = useAuth();

    const cardInfo1 = [
        {
            id: 1,
            place: "Baner",
            count: "674 places"
        },
        {
            id: 2,
            place: "Viman Nagar",
            count: "674 places"
        },

        {
            id: 3,
            place: "Hinjawadi",
            count: "1361 places"
        },
        {
            id: 4,
            place: "Koregaon Park",
            count: "251 places"
        },
        {
            id: 5,
            place: "Wakad",
            count: "1004 places"
        },
        {
            id: 6,
            place: "Kothrud",
            count: "784 places"
        },
        {
            id: 7,
            place: "Kalyani Nagar",
            count: "170 places"
        },
        {
            id: 8,
            place: "Kharadi",
            count: "857 places"
        },
    ]

    const cardInfo2 = [
        {
            id: 1,
            place: "Baner",
            count: "674 places"
        },
        {
            id: 2,
            place: "Viman Nagar",
            count: "674 places"
        },

        {
            id: 3,
            place: "Hinjawadi",
            count: "1361 places"
        },
        {
            id: 4,
            place: "Koregaon Park",
            count: "251 places"
        },
        {
            id: 5,
            place: "Wakad",
            count: "1004 places"
        },
        {
            id: 6,
            place: "Kothrud",
            count: "784 places"
        },
        {
            id: 7,
            place: "Kalyani Nagar",
            count: "170 places"
        },
        {
            id: 8,
            place: "Kharadi",
            count: "857 places"
        },

        {
            id: 9,
            place: "Mundhwa",
            count: "197 places"
        },
        {
            id: 10,
            place: "Pimple Saudagar",
            count: "497 places"
        },
        {
            id: 11,
            place: "Aundh",
            count: "379 places"
        },
        {
            id: 12,
            place: "FC Road",
            count: "138 places"
        },
        {
            id: 13,
            place: "Hadapsar",
            count: "1084 places"
        },
        {
            id: 14,
            place: "Senapati Bapat Road",
            count: "174 places"
        },
        {
            id: 15,
            place: "Magarpatta",
            count: "297 places"
        },
        {
            id: 16,
            place: "Bavdhan",
            count: "336 places"
        },
        {
            id: 17,
            place: "Deccan Gymkhana",
            count: "111 places"
        },
        {
            id: 18,
            place: "Pashan",
            count: "146 places"
        },
        {
            id: 19,
            place: "Camp Area",
            count: "208 places"
        },
        {
            id: 20,
            place: "Chinchwad",
            count: "690 places"
        },
        {
            id: 21,
            place: "Shivaji Nagar",
            count: "212 places"
        },
        {
            id: 22,
            place: "Yerawada",
            count: "165 places"
        },
        {
            id: 23,
            place: "Sadashiv Peth",
            count: "317 places"
        },
        {
            id: 24,
            place: "JM Road",
            count: "88 places"
        },
        {
            id: 25,
            place: "NIBM Road",
            count: "189 places"
        },
        {
            id: 26,
            place: "Erandwane",
            count: "209 places"
        },
        {
            id: 27,
            place: "East Street",
            count: "42 places"
        },
        {
            id: 28,
            place: "Sinhgad Road",
            count: "742 places"
        },
        {
            id: 29,
            place: "Kondhwa",
            count: "496 places"
        },

    ]



    const name_path = {
        state: true,
        name: "More",
        path: <i className="bi bi-chevron-down"></i>
    }

    const name_path2 = {
        state: false,
        name: "Less",
        path: <i className="bi bi-chevron-up"></i>
    }

    const [card, setCard] = useState(cardInfo1);
    const [n, setN] = useState(name_path);




    const changeIcon = () => {

        if (n.state === true) {
            setCard(cardInfo2);
            setN(name_path2);
        }
        else {
            setCard(cardInfo1);
            setN(name_path)
        }
    }



    // Extra work related to section 3 cards

    const [showwork, setHidework] = useState(false);
    const [mystyle, setStyle] = useState({ right: '0vw' });

    const [dataofchild, setDataofchild] = useState('');
    const [food, setfood] = useState([]);


    const abc = (d) => {
        setDataofchild(d)
    }

    const funny = (d) => {
        setHidework(true);
        abc(d);
    }


    const FetchFoodData = async () => {
        let res = await axios.get(`${Base_url}/food/get`);
        setfood(res.data.Data);
    }

    useEffect(() => {
        FetchFoodData();
    }, [])



    return (
        <>

            <div className="col-12 mt-5 section3 ">
                <div className="row">


                    {/* part 1 */}
                    <div className="col-12 part1">
                        <h3>Popular Localities in and around Pune</h3>
                    </div>

                    {/* part 2 */}
                    <div className="col-12 part2 my-4">
                        <div className="row">

                            {
                                card.map((val) => {


                                    return (
                                        <Sec3Card
                                            key={val.id}
                                            title={val.place}
                                            places={val.count}
                                            fun={funny}
                                        />
                                    )
                                })
                            }

                            <div className="col-md-4 col-sm-6 col-10 m-auto px-2">
                                <div className="col-12 card1" onClick={() => changeIcon()}>

                                    <div className="row px-2">

                                        {/* element 1 */}
                                        <div className="col-8 ele1 py-3 px-3">
                                            <h4>See {n.name}</h4>
                                        </div>

                                        {/* element 2 */}
                                        <div className="col-1 ms-auto ele2 ele3">
                                            <p>{n.path}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>





            {/* Extra funny work   */}


            {
                showwork && (



                    <div className="col-6 places pt-0 ps-0 pe-0 pb-5" style={mystyle}>
                        <div className="col-12 realdeal">

                            <div className="col-12 r1">
                                <div className="row ">

                                    <div className="col-9 pt-3">
                                        <h1 className="ps-4">{dataofchild}</h1>
                                    </div>

                                    <div className="col-3 m-auto  p1 pe-5 pt-4">
                                        <p className="bg-danger ms-auto" onClick={() => { setHidework(false); setStyle({ right: '0vw' }) }}><i class="bi bi-x"></i></p>
                                    </div>

                                </div>
                            </div>


                            <div className="row r2 px-4 mt-4">

                                {
                                    food.map((val) => {
                                        return (
                                            <div className="col-6">
                                                <div className="card " onClick={() => { nav('/food') }}>
                                                    <div className="card-header p-0 col-12">
                                                        <img src={val.path} alt="" />
                                                    </div>

                                                    <div className="card-body">
                                                        <p className="text-center fs-5 fw-bold">{val.title}</p>
                                                        <button className="btn btn-success w-100 mb-2">See more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>



                )

            }


        </>
    )
}

export default BodySection3;