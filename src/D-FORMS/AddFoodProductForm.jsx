


import React, { useState } from 'react';
import { useAuth } from '../UseContextStore/Auth.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFoodProductForm = () => {

    const { Base_url } = useAuth();

    const nav = useNavigate();


    const [data, setData] = useState({
        title: "",
        star: 0,
        price: 0,
        quantity: 0,
        minute: 0,
        p1: "",
        food: "yes"
    });

    const [imageUpload, setImageUpload] = useState("");


    const ChangeFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImageUpload(reader.result);
            };

            reader.onerror = (err) => {
                console.error("Error Convering to Base : ", err);
            }

        } else {
            alert("File not selected");
        }
    };

    const ChangeData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };


    const SubmitDataToServer = (e) => {

        e.preventDefault();

        const formData = {
            title: data.title,
            star: data.star,
            price: data.price,
            quantity: data.quantity,
            minute: data.minute,
            p1: data.p1,
            image: imageUpload,
            food: data.food
        };


        console.log("Data to uploaded :: ", formData);


        const uploadfunc = async () => {
            try {
                let res = await axios.post(`${Base_url}/food/add-data`, formData);
                console.log(res.data);
                alert("Successfully Done !!!!");
                nav(-1);
            }
            catch (err) {
                console.log(err);
                alert(err);
            }
        }

        uploadfunc();

    }




    return (
        <>

            <div className="col-12 addmoreproduct">
                <div className="row">


                    {/* section */}
                    <div className=" col-sm-6 col-11 section px-3 py-3  p-sm-5 pb-3 m-auto ">
                        <div className="row">

                            {/* section header */}
                            <header className="col-12 header">
                                <div className="row">

                                    {/* part1 */}
                                    <div className="col-9 p1 ">
                                        <h2>Add New Food Shops</h2>
                                    </div>

                                    {/* part2 */}
                                    <div className="col-2 ms-auto p1">
                                        <img src="MainPageAsset/10020.svg" alt="" className='d-block w-sm-50' onClick={()=>nav(-1)} />
                                    </div>

                                </div>
                            </header>

                            <form onSubmit={(e) => SubmitDataToServer(e)}>

                                {/* section 1 */}
                                <div className="col-12 sec1 my-sm-4 my-2">
                                    <div className="form-group">
                                        <label className='fw-bold'>Insert Food Image : </label>
                                        <input type="file" placeholder='Url' className='form-control' name='avatar' onChange={(e) => ChangeFile(e)} />
                                    </div>
                                </div>


                                {/* Section 2 */}
                                <div className="col-12 sec2 my-sm-4 my-2">
                                    <div className="form-group">
                                        <label className='fw-bold'>Enter Shop Name : </label>
                                        <input type="text" placeholder='Eg : Chota Vadapav' className='form-control' value={data.title} name='title' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>

                                {/* section 3 */}
                                <div className="col-12 sec3 my-sm-4 my-2">
                                    <div className="form-group">
                                        <label className='fw-bold'>Enter food items name : </label>
                                        <input type="text" placeholder='Eg : Vadapav , idali , juice' className='form-control' value={data.p1} name='p1' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>



                                {/* section 4 */}
                                <div className="col-12 sec4 my-sm-5 my-2 mt-sm-4 mt-3">

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
                                            <label className='fw-bold'>Delivery in -- min : </label>
                                            <input type="number" placeholder='Eg : 2' className='form-control' value={data.minute} name='minute' onChange={(e) => ChangeData(e)} />
                                        </div>
                                    </div>
                                </div>


                                {/* section 5 */}
                                <div className="col-12 sec5 text-center my-4">
                                    <button className='btn btn-success w-25'> Submit</button>
                                </div>



                            </form>
                        </div>

                    </div>



                </div>
            </div>



        </>
    )
}

export default AddFoodProductForm;