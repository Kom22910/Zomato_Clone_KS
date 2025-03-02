




const Isection2 = () => {


    const cardInfo = [
        {
            title: "Food delivery",
            p: "Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly",
            image: "InvestorPageAsset/10032.webp",
            p1: "Q2FY25",
            card: [
                {
                    ctitle: "INR 9,690 crore",
                    cp: "Food delivery GOV"
                },
                {
                    ctitle: "20.7 million",
                    cp: "Food delivery GOV"
                }
            ]

        },
        {
            title: "Quick commerce",
            p: "Quick commerce platform where customers can order everyday needs across thousands of products and have them delivered within minutes",
            image: "InvestorPageAsset/10030.png",
            p1: "Q2FY25",
            card: [
                {
                    ctitle: "INR 6,132 crore",
                    cp: "Quick commerce GOV"
                },
                {
                    ctitle: "8.9 million",
                    cp: "Avg. monthly transacting customers"
                }
            ]

        },
        {
            title: "Hyperpure",
            p: "Hyperpure is a B2B platform supplying high quality food ingredients and other products",
            image: "InvestorPageAsset/10031.webp",
            p1: "Q2FY25",
            card: [
                {
                    ctitle: "INR 1,473 crore",
                    cp: "Hyperpure revenue"
                },
                {
                    ctitle: "8",
                    cp: "# of cities present in"
                }
            ]

        },
        {
            title: "Going-out",
            p: "Going-out enables discovery and ticketing of offline experiences such as in-restaurant dining and live events such as Zomaland",
            image: "InvestorPageAsset/10032.webp",
            p1: "Q2FY25",
            card: [
                {
                    ctitle: "INR 1,849 crore",
                    cp: "Going-out GOV"
                },
                {
                    ctitle: "INR 154 crore",
                    cp: "Revenue"
                }
            ]

        },



    ]


    const cardInfo2 = [
        {
            img_link: "InvestorPageAsset/10033.webp",
            title: "Feeding India",
            p: "A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India"
        },
        {
            img_link: "InvestorPageAsset/10034.webp",
            title: "Net zero emissions",
            p: "Starting FY24, we have taken on a goal to achieve Net Zero emissions across Zomato’s food delivery value chain by 2033"
        },
        {
            img_link: "InvestorPageAsset/10035.webp",
            title: "Reducing plastic waste",
            p: "Trying to reduce Zomato’s plastic waste by ensuring completely plastic neutral deliveries since April 2022"
        },
    ]





    return (
        <>

            <div className="col-12 p-sm-5 isection2">


                <div className="col-sm-10 col-11 m-auto">
                    <p className='fw-bold fs-sm-1 fs-2'>Our core Offerings</p>

                    {/* part 1  */}
                    <div className="col-12 px-4">
                        <div className="row">

                            {/* card  */}
                            {
                                cardInfo.map((val) => {

                                    return (
                                        <div className="col-sm-6 col-12">
                                            <div className="col-12 card1 my-3">
                                                {/* element 1 */}

                                                <div className="row">

                                                    <div className="col-sm-9 col-8">
                                                        <p className='fw-bold fs-sm-4 my-2'>{val.title}</p>

                                                        <p className='p1 p2'>{val.p}</p>
                                                    </div>

                                                    <div className="col-sm-3 col-4 ms-auto">
                                                        <img src={val.image} alt="" className='d-block w-sm-75 w-100' />
                                                    </div>


                                                    <div className="col-12 mt-5">
                                                        <p className='p1'>{val.p1}</p>
                                                        <hr />
                                                    </div>
                                                </div>

                                                {/* element 2 */}
                                                <div className="row">

                                                    {
                                                        val.card.map((val) => {

                                                            return (
                                                                <div className="col-6">
                                                                    <p className='fs-sm-5 fw-bold mb-1'>{val.ctitle}</p>
                                                                    <p className='p'>{val.cp}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </div>

                                        </div>
                                    )
                                })
                            }



                        </div>
                    </div>


                    {/* part 2 */}
                    <div className="col-12 px-sm-4 my-4">
                        <p className='fw-bold fs-sm-1 fs-2'>Beyond business</p>
                        <p className='fs-sm-5 text-secondary px-sm-1 px-3' style={{ fontWeight: 500, wordSpacing: 5 }}>At Zomato, our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone. Some of our key sustainability initiatives include:</p>

                        <div className="row mt-4">

                            {
                                cardInfo2.map((val) => {

                                    return (
                                        <div className="col-sm-4 col-12 px-sm-1 px-4 my-sm-1 my-3">
                                            <div className="col-12 card2">

                                                <div className="col-12">
                                                    <img src={val.img_link} alt="" className='d-block w-100' />
                                                </div>

                                                <div className="col-12 py-2 pb-4 px-3 mt-2 card_body">
                                                    <p className='fs-4 mb-1' style={{ fontWeight: 500 }}>{val.title}</p>
                                                    <p className='text-secondary p1' style={{ fontWeight: 500, fontSize: 16.5 + 'px' }}>{val.p}</p>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <p className='text-danger mt-3 p1' style={{ fontWeight: 500, fontSize: 20 + "px" }}>See the Latest ESG update</p>
                    </div>

                </div>









            </div>





        </>
    )
}

export default Isection2;