import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './A-GlobalStyle/App.css';
import Layout from './A-Mainlayout/Layout.jsx';
import GetAppPage from './E-ExtraPages/GetAppPage.jsx';
import InvestorPage from './F-InvestorPage/InvestorPage.jsx';
import FoodPage from './E-ExtraPages/FoodPage.jsx';
import CartPage from './E-ExtraPages/CartPage.jsx';
import AddFoodProductForm from './D-FORMS/AddFoodProductForm.jsx';
import AddPlaceProductForm from './D-FORMS/AddPlaceProductForm.jsx';
import PlacePage from './E-ExtraPages/PlacePage.jsx';
import LoginPage from './D-FORMS/LoginPage.jsx';
import SignUpPage from './D-FORMS/SignUpPage.jsx';
import Profile from './E-ExtraPages/Profile.jsx';

const App = () => {
  return (
    <>
  
      <Router>
        <Routes>

            <Route  path='/'  element={<Layout/>}  />
            <Route  path='/mobile'  element={<GetAppPage/>}  />
            <Route path='/invest' element={<InvestorPage/>}  />
            <Route path='/food' element={<FoodPage/>} />
            <Route path='/places' element={<PlacePage/>} />
            <Route path='/addfood' element={<AddFoodProductForm/>}  />
            <Route path='/addplace' element={<AddPlaceProductForm/>}  />
            <Route path = '/login' element={<LoginPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/profile/:id' element={<Profile/>} />

        </Routes>
      </Router>
    
    
    </>
  )
}

export default App;