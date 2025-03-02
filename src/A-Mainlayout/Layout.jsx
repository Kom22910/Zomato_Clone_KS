import LayoutBody from "../B-LayoutSection/LayoutBody.jsx";
import LayoutFooter from "../B-LayoutSection/LayoutFooter.jsx";
import LayoutHeader from "../B-LayoutSection/LayoutHeader.jsx";



const Layout = () => {
  return (
    <>
    
        <div className="col-12">
            <div className="row">


                <LayoutHeader/>

                <LayoutBody/>

                <LayoutFooter/>


            </div>
        </div>
    
    
    </>
  )
}

export default Layout;