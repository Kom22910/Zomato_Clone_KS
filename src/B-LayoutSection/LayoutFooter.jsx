

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../A-GlobalStyle/LayoutFooter.css';

const LayoutFooter = () => {

  const [show, sethide] = useState(false);

  const showFlags = () => {
    show ? sethide(false) : sethide(true);
  }



  const flags = [
    "FoodPageAsset/10096.webp",
    "FoodPageAsset/10097.webp",
    "FoodPageAsset/10100.webp",
    "FoodPageAsset/10102.webp",
    "FoodPageAsset/10105.webp",
    "FoodPageAsset/10106.webp",
    "FoodPageAsset/10107.png",
    "FoodPageAsset/10108.png",
    "FoodPageAsset/10110.webp",
    "FoodPageAsset/10111.webp",
    "FoodPageAsset/10112.webp",
    "FoodPageAsset/10113.webp",
    "FoodPageAsset/10114.png",
    "FoodPageAsset/10116.webp",
    "FoodPageAsset/10117.webp",
    "FoodPageAsset/10118.png",
    "FoodPageAsset/10119.webp",
    "FoodPageAsset/10120.png",
    "FoodPageAsset/10121.png",
    "FoodPageAsset/10122.webp",
    "FoodPageAsset/10123.webp",
    "FoodPageAsset/10124.webp",
    "FoodPageAsset/10125.webp",
    "FoodPageAsset/10126.webp",
    "FoodPageAsset/10127.webp",
    "FoodPageAsset/10128.webp",
    "FoodPageAsset/10129.webp",
    "FoodPageAsset/10130.webp",
    "FoodPageAsset/10131.webp",
    "FoodPageAsset/10132.webp",
    "FoodPageAsset/10133.webp",
    "FoodPageAsset/10134.webp",
    "FoodPageAsset/10135.webp",
    "FoodPageAsset/10136.webp",
    "FoodPageAsset/10137.webp",
    "FoodPageAsset/10138.webp",
    "FoodPageAsset/10141.webp",
    "FoodPageAsset/10142.webp",
    "FoodPageAsset/10144.webp",
    "FoodPageAsset/10145.webp",
    "FoodPageAsset/10148.webp",
    "FoodPageAsset/10149.webp",
    "FoodPageAsset/10151.webp",
    "FoodPageAsset/10152.webp",
    "FoodPageAsset/10153.webp",
    "FoodPageAsset/10154.webp",
    "FoodPageAsset/10155.webp",
    "FoodPageAsset/10156.webp",
    "FoodPageAsset/10161.png",
    "FoodPageAsset/10163.webp",
    "FoodPageAsset/10164.webp",
    "FoodPageAsset/10165.webp",
    "FoodPageAsset/10167.webp",
    "FoodPageAsset/10170.webp",
    "FoodPageAsset/10172.webp",
    "FoodPageAsset/10173.webp",
    "FoodPageAsset/10174.webp",
    "FoodPageAsset/10175.webp",
    "FoodPageAsset/10176.webp",
    "FoodPageAsset/10178.webp",
    "FoodPageAsset/10180.webp",
    "FoodPageAsset/10182.webp",
    "FoodPageAsset/10183.webp",
    "FoodPageAsset/10184.webp",
    "FoodPageAsset/10185.webp",
    "FoodPageAsset/10186.webp",
    "FoodPageAsset/10187.webp",
    "FoodPageAsset/10188.webp",
    "FoodPageAsset/10189.webp",
    "FoodPageAsset/10190.webp",
    "FoodPageAsset/10191.webp",
    "FoodPageAsset/10192.webp",
    "FoodPageAsset/10193.webp",
    "FoodPageAsset/10195.webp",
    "FoodPageAsset/10196.webp",
    "FoodPageAsset/10197.webp",
    "FoodPageAsset/10198.webp",
    "FoodPageAsset/10199.webp",
    "FoodPageAsset/10200.webp",
    "FoodPageAsset/10293.webp",
  ]

  const p1 = [
    "Who We Are",
    "Work With Us",
    "Investor Relations",
    "Report Fraud",
    "Press Kit",
    "Contact Us"
  ]


  const p2 = [
    "Zomato",
    "Blinkit",
    "District",
    "Feeding India",
    "Hyperpure",
    "Zomato Live",
    "Zomaland",
    "Weather Union",

  ]

  const p3 = ["Partner With Us", "Apps For You"];
  const p4 = ["Privacy", "Security", "Terms"];


  const icon = [
    "MainPageAsset/10013.svg",
    "MainPageAsset/10014.svg",
    "MainPageAsset/10015.svg",
    "MainPageAsset/10017.svg",
    "MainPageAsset/10018.svg"
  ]


  return (
    <>

      <div className="col-12 footer px-4 py-sm-2 py-4 ">
        <div className="col-md-10 col-12 m-auto mt-1 pt-5">
          <div className="row">


            {/* Section 1 */}
            <div className="col-12 section1 ">
              <div className="row">

                {/* part1 */}
                <div className="col-md-2 col-sm-3 col-4 part1">
                  <NavLink to="/">
                    <img src="/MainPageAsset/10028.webp" alt="" className='d-block w-100' />
                  </NavLink>
                </div>

                {/* part2 */}
                <div className="col-md-4 col-5 ms-auto part2">
                  <div className="row">

                    <div className="col-md-4 col-3 icon p-md-2 py-2 ms-auto me-4" onClick={() => showFlags()}>
                      <div className="row">


                        <div className="col-md-4 col-9 r1">
                          <img src="/MainPageAsset/image.png" alt="" className='d-block w-100' />
                        </div>

                        <div className="col-5 r1 dis">
                          India
                        </div>

                        <div className="col-2 r1 r2 dis">

                          <p>
                            {
                              show ? (
                                <i className="bi bi-chevron-up"></i>
                              ) : (<i className="bi bi-chevron-down"></i>)
                            }
                          </p>
                        </div>
                      </div>

                    </div>

                    <div className="col-md-4 col-3 icon py-2">
                      <div className="row pt-sm-2">
                        <div className="col-md-4 col-sm-7 col-8 r1">
                          <img src="MainPageAsset/10011.svg" alt="" className='d-block w-100' />
                        </div>

                        <div className="col-5 r1 dis">
                          English
                        </div>
                      </div>

                    </div>

                  </div>
                </div>



              </div>
            </div>



            {/* Section 2 */}
            <div className="col-12 section2 mt-5 ">
              <div className="row">


                {/* part1 */}
                <div className="col-md-2 col-sm-3 col-4 part1">
                  <h5>ABOUT ZOMATO</h5>

                  {
                    p1.map((val, index) => {

                      return (
                        <p key={index} >{val}</p>
                      )
                    })
                  }

                </div>

                {/* part 2 */}
                <div className="col-md-2 col-sm-3 col-4 part1">
                  <h5>ZOMAVERSE</h5>

                  {
                    p2.map((val, index) => {

                      return (
                        <p key={index}>{val}</p>
                      )
                    })
                  }

                </div>

                {/* part 3 */}
                <div className="col-md-2 col-sm-3 col-4 part1">
                  <h5>FOR RESTAURANT</h5>

                  {
                    p3.map((val, index) => {

                      return (
                        <p key={index}>{val}</p>
                      )
                    })
                  }

                </div>

                {/* part 4 */}
                <div className="col-md-2 col-sm-3 col-4 part1">
                  <h5>LEARN MORE</h5>

                  {
                    p4.map((val, index) => {

                      return (
                        <p key={index}>{val}</p>
                      )
                    })
                  }

                </div>


                {/* part 5 */}
                <div className="col-md-4 col-11 part1 icons  mt-sm-1 m-auto text-center py-md-0 py-2  ">
                  <h5 className='mb-3 para'>SOCIAL LINKS</h5>

                  {/* element 1 */}
                  <div className="col-8 ele1 m-auto imp ps-sm-4">
                    <div className="row">
                      {
                        icon.map((val, index) => {

                          return (
                            <div className="col-2" key={index}>
                              <img src={val} alt="Linkedin" className='d-block' />
                            </div>
                          )
                        })
                      }



                    </div>
                  </div>

                  {/* element 2 */}
                  <div className="col-md-5 col-sm-4 col-5 mt-3 m-auto">
                    <img src="MainPageAsset/10035.webp" alt="" className='d-block w-md-75 w-100' />
                  </div>


                  {/* element 3 */}
                  <div className="col-md-5 col-sm-4 col-5 mt-3 m-auto">
                    <img src="MainPageAsset/10034.webp" alt="" className='d-block w-md-75 w-100' />
                  </div>

                </div>


              </div>
            </div>
            <hr />




            {/* section 3 */}
            <div className="col-12 mt-md-5 mt-0 section3">
              <p className='text-center'>&copy; Designed By Keshav Semwal .</p>
            </div>

          </div>

        </div>



        {
          show &&

          <div className="col-sm-5 col-11 bg-white py-4 px-4 lang">
            <div className="row">

              {
                flags.map((val, index) => {

                  return (
                    <div className="col-1 p-sm-2 p-1 my-1 card1" key={index}>
                      <div className="col-12  ">
                        <img src={val} alt="" className='img-fluid' />
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        }
      </div>



    </>
  )
}

export default LayoutFooter;