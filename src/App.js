

import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetAppPage from './GetAppPage.jsx';
import InvestorPage from './InvestorPage.jsx';
import FoodPage from './FoodPage.jsx';
import PlacesPage from './PlacesPage.jsx';
import CartPage from './CartPage.jsx';
import Profile from './Profile.jsx';

const App = () => {
  

  return (
    <>


      <Router>

        <Routes>

            <Route path='/'  element={<Layout/>}></Route>
            <Route path='/mobile' element={<GetAppPage/>} ></Route>
            <Route path='/invest' element={<InvestorPage/>} ></Route>
            <Route path='/food' element={<FoodPage/>} ></Route>
            <Route path='/places' element={<PlacesPage/>}  ></Route>
            <Route path='/cart' element={<CartPage/>} ></Route>
            <Route path='/profile/' element={<Profile/>} ></Route>

        </Routes>
       
      </Router>


    </>
  )
}



export default App;