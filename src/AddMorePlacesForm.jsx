

import axios from 'axios';
import React, {useState } from 'react';

const Base_url = process.env.REACT_APP_BACKEND_URL;


const AddMorePlacesForm = ({ close, fun }) => {
    const [data, setData] = useState({
        title: "",
        star: 0,
        price: 0,
        quantity: 0,
        minute: 0,
        p1: "",
        p2: "",
        food: "no"
    })

    const [File, setFile] = useState("");

    const ChangeFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
        }
        else {
            alert("File not selected");
        }
    }


    const ChangeData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }



    const SubmitDataToServer = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('star', data.star);
        formData.append('price', data.price);
        formData.append('quantity', data.quantity);
        formData.append('minute', data.minute);
        formData.append('p1', data.p1);
        formData.append('p2', data.p2);
        formData.append('path', File);
        formData.append('food', data.food);


        fun(true);

        await axios.post(`${Base_url}/place/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                setTimeout(() => {
                    alert("Successfully Added");
                    fun(false);
                }, 100);

                setTimeout(() => {
                    close();
                }, 200);
            })
            .catch((err) => {
                alert(err);
                console.log(err);
                fun(false);
            })


    }







    return (
        <>

            <div className="col-12 addmoreplaces">
                <div className="row">


                    {/* section */}
                    <div className=" col-sm-6 col-11 section p-sm-5 px-3 py-4 pb-sm-3 m-auto">
                        <div className="row">

                            {/* section header */}
                            <header className="col-12">
                                <div className="row">

                                    {/* part1 */}
                                    <div className="col-sm-9 col-10 p1 ">
                                        <h2>Add Resaurants / Bars etc</h2>
                                    </div>

                                    {/* part2 */}
                                    <div className="col-2 ms-auto p1">
                                        <img src="MainPageAsset/10020.svg" alt="" className='d-block w-sm-50' onClick={close} />
                                    </div>

                                </div>
                            </header>

                            <form onSubmit={(e) => SubmitDataToServer(e)}>

                                {/* section 1 */}
                                <div className="col-12 sec1 my-sm-3 mt-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>Insert Resaurants / Bars Image Url : </label>
                                        <input type="file" placeholder='Url' className='form-control' onChange={(e) => ChangeFile(e)} />
                                    </div>
                                </div>


                                {/* Section 2 */}
                                <div className="col-12 sec2 my-sm-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>Enter Resaurant/Bars Name : </label>
                                        <input type="text" placeholder='Eg : Chota Vadapav' className='form-control' value={data.title} name='title' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>

                                {/* section 3 */}
                                <div className="col-12 sec3 my-sm-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>Enter Special food items name : </label>
                                        <input type="text" placeholder='Eg : Vadapav , idali , juice' className='form-control' value={data.p1} name='p1' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>

                                {/* section 3 */}
                                <div className="col-12 sec3 my-sm-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>Enter Resurants/Bars Address : </label>
                                        <input type="text" placeholder='Eg : Pune' className='form-control' value={data.p2} name='p2' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>



                                {/* section 5 */}
                                <div className="col-12 sec4 mb-sm-3 ">

                                    <div className="row">

                                        <div className="form-group col-sm-4 col-6">
                                            <label className='fw-bold'>Enter Food Price  : </label>
                                            <input type="number" placeholder='Eg : 100' className='form-control' value={data.price} name='price' onChange={(e) => ChangeData(e)} />
                                        </div>

                                        <div className="form-group col-sm-4 col-6">
                                            <label className='fw-bold'>Enter Quantity : </label>
                                            <input type="number" placeholder='1' className='form-control' value={data.quantity} name='quantity' onChange={(e) => ChangeData(e)} />
                                        </div>

                                        <div className="form-group col-sm-4 col-6">
                                            <label className='fw-bold'>Enter Star rating : </label>
                                            <input type="number" placeholder='Eg : 4.3' className='form-control' value={data.star} name='star' onChange={(e) => ChangeData(e)} />
                                        </div>


                                        <div className="form-group col-sm-4 col-6 my-sm-3">
                                            <label className='fw-bold'>Distance in -- Km : </label>
                                            <input type="number" placeholder='Eg : 2' className='form-control' value={data.minute} name='minute' onChange={(e) => ChangeData(e)} />
                                        </div>

                                    </div>
                                </div>


                                {/* section 5 */}
                                <div className="col-12 sec5 text-center mt-sm-2 mt-3">
                                    <button className='btn btn-success w-25'> Submit</button>
                                </div>



                            </form>
                        </div>

                    </div>



                </div>
            </div>

        </ >
    )
}

export default AddMorePlacesForm;