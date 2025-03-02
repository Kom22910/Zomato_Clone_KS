const Isection5 = () => {
    return (
        <>

            <div className="col-12 isection5">
                <div className="col-sm-10 col-11 py-5 px-sm-1 px-3 m-auto">

                    <div className="row">

                        {/* part1  */}
                        <div className="col-sm-6 col-12 m-auto part1">
                            <p className='fs-sm-1 fs-3 fw-bold'>Subscribe to our email alerts</p>
                            <p className='p1'>Get regular updates through email</p>

                            <div className="col-sm-8 col-11">
                                <input type="text" placeholder='Email' className='form-control p1' />
                                <button className='py-2 p1 px-3 w-50 btn btn-danger mt-4'>Subscribe</button>
                            </div>
                        </div>


                        <div className="col-sm-6 col-12 m-auto mt-sm-2 mt-5 part2">
                            <p className='fs-sm-1 fs-3 fw-bold'>Have question ?</p>
                            <p className='p1'>Reach out to us by emailing at <span className='text-danger'>shareholders@zomato.com</span> , and we'll get back to you.</p>

                            <div className="col-sm-8 col-10 mt-4">
                                <button className='btn btn-danger p1 w-50 py-2'>Contact Us</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>





        </>
    )
}

export default Isection5;