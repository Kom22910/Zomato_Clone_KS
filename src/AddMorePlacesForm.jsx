

import axios from 'axios';
import React, { StrictMode, useState } from 'react'


const AddMorePlacesForm = ({close , refresh}) => {
    const [data , setData] = useState({
        path: "",
        title:"",
        star:0,
        price:0,
        quantity:0,
        minute:0,
        p1:"",
        p2:""
    })



    const ChangeData=(e)=>{
        const {name , value} = e.target;
        setData({...data,[name]:value});
    }



    const SubmitDataToServer=async(e)=>{
        e.preventDefault();
        
        if(data.title==="" && data.minute===0 && data.p1==="" && data.path==="" && data.price===0 && data.quantity===0 && data.star===0){
            alert("Fill all fields of Form");
        }
        else{
            await axios.post("http://localhost:3000/placeCard",data);
            setTimeout(()=>{
                alert("Successfully Added");
            },100)
        }


        setTimeout(()=>{
            close();
        },200);
    }

    





    return (
        <StrictMode>

            <div className="col-12 addmoreproduct">
                <div className="row">


                    {/* section */}
                    <div className=" col-6 section p-5 pb-3 m-auto">
                        <div className="row">

                            {/* section header */}
                            <header className="col-12">
                                <div className="row">

                                    {/* part1 */}
                                    <div className="col-sm-9 col-5 p1 ">
                                        <h2>Add Resaurants / Bars etc</h2>
                                    </div>

                                    {/* part2 */}
                                    <div className="col-2 ms-auto p1">
                                        <img src="MainPageAsset/10020.svg" alt="" className='d-block w-sm-50'  onClick={close} />
                                    </div>

                                </div>
                            </header>

                            <form  onSubmit={(e)=> SubmitDataToServer(e)}>

                                {/* section 1 */}
                                <div className="col-12 sec1 my-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>Insert Resaurants / Bars Image Url : </label>
                                        <input type="text" placeholder='Url' className='form-control' value={data.path}  name='path'   onChange={(e)=>ChangeData(e)}   />
                                    </div>
                                </div>


                                {/* Section 2 */}
                                <div className="col-12 sec2 my-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>Enter Resaurant/Bars Name : </label>
                                        <input type="text" placeholder='Eg : Chota Vadapav' className='form-control' value={data.title} name='title' onChange={(e)=>ChangeData(e)}   />
                                    </div>
                                </div>

                                {/* section 3 */}
                                <div className="col-12 sec3 my-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>Enter Special food items name : </label>
                                        <input type="text" placeholder='Eg : Vadapav , idali , juice' className='form-control' value={data.p1} name='p1' onChange={(e)=>ChangeData(e)}   />
                                    </div>
                                </div>

                                {/* section 3 */}
                                <div className="col-12 sec3 my-3">
                                    <div className="form-group">
                                        <label className='fw-bold'>Enter Resurants/Bars Address : </label>
                                        <input type="text" placeholder='Eg : Pune' className='form-control' value={data.p2} name='p2' onChange={(e)=>ChangeData(e)}   />
                                    </div>
                                </div>

                                

                                {/* section 5 */}
                                <div className="col-12 sec4 mb-3 ">

                                    <div className="row">

                                        <div className="form-group col-4">
                                            <label className='fw-bold'>Enter Food Price  : </label>
                                            <input type="number" placeholder='Eg : 100' className='form-control' value={data.price} name='price'  onChange={(e)=>ChangeData(e)}  />
                                        </div>

                                        <div className="form-group col-4">
                                            <label className='fw-bold'>Enter Quantity : </label>
                                            <input type="number" placeholder='1' className='form-control' value={data.quantity} name='quantity'  onChange={(e)=>ChangeData(e)}  />
                                        </div>

                                        <div className="form-group col-4">
                                            <label className='fw-bold'>Enter Star rating : </label>
                                            <input type="number" placeholder='Eg : 4.3' className='form-control' value={data.star} name='star' onChange={(e)=>ChangeData(e)}   />
                                        </div>


                                        <div className="form-group col-4 my-3">
                                            <label className='fw-bold'>Distance in -- Km : </label>
                                            <input type="number" placeholder='Eg : 2' className='form-control' value={data.minute} name='minute' onChange={(e)=>ChangeData(e)}   />
                                        </div>

                                    </div>
                                </div>


                                {/* section 5 */}
                                <div className="col-12 sec5 text-center my-2">
                                    <button className='btn btn-success w-25'> Submit</button>
                                </div>



                            </form>
                        </div>

                    </div>



                </div>
            </div>

        </StrictMode >
    )
}

export default AddMorePlacesForm;