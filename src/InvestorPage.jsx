



import React, { StrictMode } from 'react'
import InvestHeader from './InvestHeader';
import './Investor.css';
import ISection from './ISection';
import FooterSec from "./FooterSec";

const InvestorPage = () => {
    return (
        <StrictMode>


            <div className="col-12 investorpage">
                <div className="row">


                            {/* Header */}
                            <InvestHeader />



                            {/* Section  */}
                            <ISection/>

                            {/* footer */}
                            <div>
                                <FooterSec/>
                            </div>
                            

                </div>
            </div>




        </StrictMode>
    )
}

export default InvestorPage;