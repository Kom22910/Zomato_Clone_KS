import { StrictMode } from "react"
import S1Card from "./S1Card";






const Section1 = () => {


    const cardInfo = [
        {
            id: 1,
            path: "MainPageAsset/10037.webp",
            title: "Order Online",
            p: "Stay home and order to your doorstep",
            web:"/food"
        },
        {
            id: 2,
            path: "MainPageAsset/10046.webp",
            title: "Dining",
            p: "View the city's favourite dining venues",
            web:"/places"
        },
        {
            id: 3,
            path: "MainPageAsset/10048.jpeg",
            title: "Live Events",
            p: "Discover India's best events & concerts",
            web:"/mobile"
        },

    ]






    return (
        <StrictMode>


            <div className="col-12 section1 my-5">
                <div className="row">

                    {/* card 1 */}
                    {
                        cardInfo.map((val) => {

                            return (
                                <S1Card
                                    key={val.id} 
                                    path={val.path}
                                    title={val.title}
                                    p={val.p}
                                    web={val.web} />
                            )
                        })
                    }


                </div>
            </div>



        </StrictMode>
    )
}

export default Section1;