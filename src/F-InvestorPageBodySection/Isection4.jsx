const Isection4 = () => {


    const info = [
        {
            image: "InvestorPageAsset/10036.png",
            subtitle: "Restaurants",
            p: "Shurba Saha | 2 December 2024",
            title: "The Big Brand Theory | From Piano ..",
            p1: "Read more about the story of Chowman, a brand which is enchanting tastebuds with a flavorful and authentic take on Chinese cuisine"
        },
        {
            image: "InvestorPageAsset/10037.png",
            subtitle: "Technology",
            p: "Data Platform Team | 18 November 2024",
            title: "Apache Flink Journey @Zomato: From...",
            p1: "How we built a self-serve stream processing platform to empower real-time analytics"
        },
        {
            image: "InvestorPageAsset/10038.png",
            subtitle: "Restaurants",
            p: "Shurba Saha | 14 November 2024",
            title: "The Big Brand Theory | How Ma's Recipe...",
            p1: "Discover how childhood friends Ankit Gupta and Chirag Chhajer brought Burma’s hidden treasures to India through a unique dining experience."
        }
    ]





    return (

        <>

            <div className="col-12 isection4 py-1 pb-5">

                <div className="col-sm-10 col-11 m-auto py-5">

                    <p className='fs-sm-1 fs-3 fw-bold'>From our blogs</p>

                    <div className="row ps-sm-3">

                        {
                            info.map((val) => {
                                return (
                                    <div className="col-sm-4 col-11 m-auto p-3">
                                        <div className="col-12 card1 pb-3">



                                            {/* element1 */}
                                            <div className="col-12 ele1 mb-2">
                                                <img src={val.image} alt="" className='d-block w-100' />

                                                <p className='substitle btn'>{val.subtitle}</p>
                                            </div>

                                            {/* element 2 */}
                                            <div className="col-12 ele2 px-2">
                                                <p className='mb-2 p2'><small>{val.p}</small></p>
                                                <p className='fs-sm-4 p1' >{val.title}</p>
                                                <p className='p2' style={{ fontSize: 18 + "px" }}>{val.p1}</p>
                                            </div>


                                        </div>
                                    </div>

                                )
                            })
                        }


                    </div>


                    <div className="row">
                        <div className="col-sm-6 col-8 px-sm-0 px-4">
                            <button className='btn btn-danger py-2 w-sm-25'>Read our blogs</button>
                        </div>
                    </div>


                </div>



            </div>



        </>
    )
}

export default Isection4;