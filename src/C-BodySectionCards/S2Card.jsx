import { useNavigate } from "react-router-dom";



const S2Card = ({ path, para1, para2, web }) => {

    const nav = useNavigate();



    return (
        <>


            <div className="col-md-3 col-sm-6 col-10 m-auto p-md-1 p-2 my-sm-1 my-2">

                <div className="col-12 card1 p-0" style={{ backgroundImage: path }} onClick={()=>nav(web)}>
                    <div className="col-12">
                        <div className="detail">
                            <p className='p1'>{para1}</p>
                            <p className='p2'>{para2} <i class="bi bi-caret-right-fill"></i></p>
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}

export default S2Card;