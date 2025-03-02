import S2Card from "../C-BodySectionCards/S2Card.jsx";

const BodySection2 = () => {

    const cardInfo = [
        {
            id: 1,
            path: "url('MainPageAsset/10041.webp')",
            p1: "Top Trending Spots",
            p2: "25 Places",
            web: "/places"
        },
        {
            id: 2,
            path: "url('MainPageAsset/10043.webp')",
            p1: "Newly Opened Placed",
            p2: "18 Places",
            web: "/places"
        },
        {
            id: 3,
            path: "url('MainPageAsset/10044.webp')",
            p1: "Best Rooftop Places",
            p2: "18 Places",
            web: "/places"
        },
        {
            id: 4,
            path: "url('MainPageAsset/10042.webp')",
            p1: "Best Insta-worthy Places",
            p2: "29 Places",
            web: "/places"
        }
    ]


    return (
        <>
            <div className="col-12 p-2 section2 mt-5">

                <div className="col-12">
                    <div className="row">

                        {/* part 1 */}
                        <div className="col-12 part1">
                            <h3>Collections</h3>
                            <div className="row dis">


                                <div className="col-md-9 col-8">

                                    <p>Explore Curated lists of top restaurants , cafes , pubs , and bars in Pune, based on trends</p>

                                </div>

                                <div className="col-md-3 col-4 text-end">
                                    <p className='text-danger'>All Collections in Pune <i class="bi bi-caret-right-fill"></i></p>
                                </div>

                            </div>
                        </div>


                        {/* part 2 */}
                        <div className="col-12 part2 mt-4">
                            <div className="row">

                                {/* card 1 */}
                                {
                                    cardInfo.map((val) => {

                                        return (
                                            <S2Card
                                                key={val.id}
                                                path={val.path}
                                                para1={val.p1}
                                                para2={val.p2}
                                                web={val.web}
                                            />
                                        )
                                    })
                                }



                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default BodySection2;