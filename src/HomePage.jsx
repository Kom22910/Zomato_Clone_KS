import { StrictMode } from "react"
import HeaderSection from "./Header";
import Section from "./Section";
import FooterSec from "./FooterSec";
import './App.css'


const HomePage = () => {


    return (
        <StrictMode>
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
        </StrictMode>
    )
}


export default HomePage;