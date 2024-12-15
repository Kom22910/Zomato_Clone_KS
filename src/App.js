

import React, { StrictMode } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetAppPage from './GetAppPage';
import InvestorPage from './InvestorPage';
import FoodPage from './FoodPage';
import PlacesPage from './PlacesPage';
import CartPage from './CartPage';
const App = () => {


  return (
    <StrictMode>


      <Router>

        <Routes>

            <Route path='/'  element={<Layout/>}></Route>
            <Route path='/mobile' element={<GetAppPage/>} ></Route>
            <Route path='/invest' element={<InvestorPage/>} ></Route>
            <Route path='/food' element={<FoodPage/>} ></Route>
            <Route path='/places' element={<PlacesPage/>}  ></Route>
            <Route path='/cart' element={<CartPage/>} ></Route>

        </Routes>
       
      </Router>


    </StrictMode>
  )
}



export default App;