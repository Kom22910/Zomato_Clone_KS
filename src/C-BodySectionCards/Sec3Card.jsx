


const Sec3Card = ({ title, places, fun }) => {



    return (
        <>


            <div className="col-md-4 col-sm-6 col-10 m-auto px-2 my-md-2" onClick={() => fun(title)}>
                <div className="col-12 card1 ">

                    <div className="row px-2 py-2 pb-0">

                        {/* element 1 */}
                        <div className="col-8 ele1">
                            <h4>{title}</h4>
                            <p>{places}</p>
                        </div>

                        {/* element 2 */}
                        <div className="col-1 ms-auto ele2">
                            <img src="MainPageAsset/10008.svg" alt="more" />
                        </div>
                    </div>


                </div>
            </div>



        </>
    )
}

export default Sec3Card;