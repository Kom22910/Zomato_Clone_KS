
import { useEffect, useState } from "react";
import '../A-GlobalStyle/LayoutHeader.css';
import { NavLink } from "react-router-dom";
import { useAuth } from "../UseContextStore/Auth.jsx";
import LoginPage from "../D-FORMS/LoginPage.jsx";
import SignUpPage from "../D-FORMS/SignUpPage.jsx";


const LayoutHeader = () => {


  let show_page = {
    login: false,
    sign: false
  }


  const [show, sethide] = useState(show_page);

  const [showdrop, sethidedrop] = useState(false);

  const { isLogin, userId } = useAuth();

  const hiding = () => {
    sethidedrop(!showdrop);
  }


  // ***************************** welcome alert operation
  const [showprofile, setHideProfile] = useState(false);
  const [showWelcome, setHideWelcome] = useState("");

  const ShowName = (name, id) => {
    setHideWelcome(name);
    setHideProfile(true);
  }



  return (
    <>
      <div className="col-12 p-4 hsection" >
        <div className="row">


          {/* section 1 */}
          <div className="col-md-10 col-12 m-auto hsection1">
            <div className="row">

              {/* part 1 */}
              <div className="col-md-4 col-4 text-md-center part1">
                <NavLink to="/mobile" className="nav-link">
                  <p>
                    <i class="bi bi-google-play"></i> Get the App
                  </p>
                </NavLink>
              </div>

              {/* part 2 */}
              <div className="col-md-6 col-8 ms-auto part2">
                <div className="row">

                  <div className="col-md-5 col-6">
                    <NavLink to="/invest" className="nav-link">
                      <p className="p1">Investor Relations</p>
                    </NavLink>
                  </div>



                  {
                    isLogin ?
                      (
                        <div className="col-6  ms-auto p-0 profile">
                          <div className="col-10 ms-auto">
                            <div className="row">
                              <NavLink to={`/profile/${userId}`}>
                                <div className="col-2 ms-auto">
                                  <img src="https://cdn.pixabay.com/photo/2024/03/08/19/58/ai-generated-8621512_1280.jpg" alt="" className="d-block w-100 rounded-pill" />
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>

                      ) :
                      (
                        <div className="col-5">

                          <div className="row">

                            <div className="col-md-6 col-3">
                              <p onClick={() => sethide({ login: true })} className="p1">Log in</p>
                            </div>

                            <div className="col-md-6 col-3">
                              <p onClick={() => sethide({ sign: true })} className="p1">Sign Up</p>
                            </div>
                          </div>
                        </div>
                      )
                  }






                </div>
              </div>


            </div>

          </div>


          {/* Section 2 */}

          <div className="col-md-10 m-auto my-md-5 hsection2">


            {/* part1 */}
            <div className="col-md-4 col-sm-6 col-8 m-auto mt-md-4 part1">
              <img src="/MainPageAsset/10028.webp" alt="Zomato" className="d-block w-100" />
            </div>

            {/* part 2 */}
            <div className="col-md-8 m-auto mt-4 part2">
              <p className="text-center">Discover the best food & drinks in Pune</p>
            </div>

            {/* part 3*/}
            <div className="col-md-8 col-12 m-auto mt-sm-4">
              <div className="col-12 bg-white px-3 py-sm-2 py-1 part3">
                <div className="row">

                  {/* first element */}
                  <div className="col-5 dis">
                    <div className="row">

                      <div className="col-2">
                        <img src="/MainPageAsset/10002.svg" alt="Location" />
                      </div>

                      <div className="col-8 ps-0 pe-0">
                        <input type="text" placeholder="Pune" className="form-control" />
                      </div>

                      <div className="col-sm-1 col-2  ">
                        <img src="/MainPageAsset/10003.svg" alt="Location" onClick={() => hiding()} />
                      </div>

                    </div>

                    {
                      showdrop &&
                      <div className="col-4 py-2 hiddencol">
                        <div className="col-12" onClick={() => hiding()}>
                          <p>Pune</p>
                          <p>Baner</p>
                          <p>Moshi</p>
                          <p>Chakan</p>
                          <p>Wakad</p>
                          <p>Wagholi</p>

                        </div>
                      </div>
                    }

                  </div>

                  {/* second element */}
                  <div className="col-md-7 col-12">
                    <div className="row">

                      <div className=" col-1 e1">
                        <img src="/MainPageAsset/10005.svg" alt="Location" />
                      </div>

                      <div className="col-md-11 col-10">
                        <input type="text" placeholder="Search for restaurant , cuisine or a dish" className="form-control" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


          </div>




        </div>
      </div>


      {
        showWelcome && (
          <div className="col-12 py-1 px-5 mt-5">
            <h2 className="fw-bold text-danger fw-bold">Welcome {showWelcome} !!!</h2>
          </div>
        )
      }


      {
        show.login && (
          <LoginPage
            close={() => sethide({ login: false })}
            showname={ShowName}
          />
        )
      }

      {
        show.sign && (
          <SignUpPage close={() => sethide({ sign: false })} />
        )
      }





    </>
  )
}

export default LayoutHeader;