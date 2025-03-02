

import React, { useState } from 'react';
import Sec5Line from '../C-BodySectionCards/Sec5Line.jsx';

const BodySection5 = () => {

    const i1 = {
        state: true,
        icon1: <i className="bi bi-chevron-down"></i>,
    }

    const i2 = {
        state: false,
        icon1: <i className="bi bi-chevron-up"></i>
    }

    const [state, setState] = useState(null);

    const lineInfo = [
        {
            id: 1,
            p: "Popular Cuisines Near Me",
            li: ["Beverages near me", "Biryani near me", "Burger near me", "Chinese near me", "Coffee near me", "Desserts near me", "Ice Cream near me", "Kebab near me", "Maharashtrain near me", "Momos near me", "Mughlai near me", "North Indian near me", "Pizza near me", "Rolls near me", "Sandwich near me", "Seafood near me", "Shake near me", "Sichuan near me", "South Indian near me", "Street near me"]
        },
        {
            id: 2,
            p: "Popular Restaruant Types Near Me",
            li: ["Bakeries near me", "Bar near me", "Beverage Shops near me", "Bhojanalya near me", "Cafes near me", "Casual Dinning near me", "Clubs near me", "Cocktail Bars near me", "Confectioneries near me", "Dessert Parlors near me", "Dhabas near me", "Fine Dinning near me", "Food Courts near me", "Food Trucks near me", "Irani Cafes near me", "Kiosks near me", "Lounges near me", "Microbreweries near me", "Paan Shop near me", "Pubs near me", "Quick Bites near me", "Sweet Shops near me"]
        },
        {
            id: 3,
            p: "Top Restaurant Chains",
            li: ["Burger Singh", "Domino's", "Dunkin' Donuts", "Faasos", "KFC", "McDonald's", "Paradise Biryani Subway", "WOW! Momo"]
        },
        {
            id: 4,
            p: "Cities We Deliver To",
            li: ["Delhi NCR", "Kolkata", "Mumbai", "Bengaluru", "Pune", "Hyderabad", "Chennai", "Lucknow", "Kochi", "Jaipur", "Ahmedabad", "Chandigarh", "Goa", "Indore", "Gangtok", "Nashik", "Ooty", "Shimla", "Ludhiana", "Guwahati", "Amritsar", "Kanpur", "Allahabad", "Aurangabad", "Bhopal", "Ranchi", "Visakhapatnam", "Bhubaneswar", "Combatore", "Mangalore", "Vadodara", "Nagpur", "Agra", "Dehradun", "Mysore", "Puducherry", "Surat", "Varanasi"]
        }
    ]


    const change_icon = (id) => {
        setState(state === id ? null : id);
    }


    return (
        <>

            <div className="col-12 mt-5 section5 p-md-3 px-4">
                <h3>Explore options near me</h3>

                <div className="row px-md-2 px-3">

                    {/* first line */}
                    {
                        lineInfo.map((val) => {

                            return (
                                <Sec5Line
                                    key={val.id}
                                    p={val.p}
                                    path={state === val.id ? i2.icon1 : i1.icon1}
                                    list={val.li}
                                    s={state === val.id ? i1.state : i2.state}
                                    fun={() => change_icon(val.id)}
                                />
                            )
                        })
                    }



                </div>
            </div>


        </>
    )
}

export default BodySection5;