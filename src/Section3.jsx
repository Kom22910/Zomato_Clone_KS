import { StrictMode, useState } from "react"
import Sec3Card from "./Sec3Card";



const Section3 = () => {



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
        state:true,
        name:"More",
        path:<i class="bi bi-chevron-down"></i>
    }

    const name_path2 = {
        state:false,
        name:"Less",
        path:<i class="bi bi-chevron-up"></i>
    }

    const [card , setCard]=useState(cardInfo1);
    const[n , setN] = useState(name_path);




    const changeIcon=()=>{
        
        if(n.state === true){
            setCard(cardInfo2);
            setN(name_path2);
        }
        else{
            setCard(cardInfo1);
            setN(name_path)
        }
    }





    return (
        <StrictMode>

            <div className="col-12 mt-5 section3">
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
                                        />
                                    )
                                })
                            }

                            <div className="col-md-4 col-sm-6 col-10 m-auto px-2">
                                <div className="col-12 card1" onClick={()=>changeIcon()}>

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





        </StrictMode>
    )
}


export default Section3;