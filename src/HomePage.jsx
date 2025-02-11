
import HeaderSection from "./Header";
import Section from "./Section";
import FooterSec from "./FooterSec";
import './App.css'


const HomePage = () => {


    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    {/* Header section */}
                    <HeaderSection />

                    {/* Section */}
                    <Section/>


                    {/* Footer */}
                    <FooterSec/>
                </div>
            </div>
        </>
    )
}


export default HomePage;