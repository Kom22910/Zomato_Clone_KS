

import React from 'react';
import '../A-GlobalStyle/Investor.css';
import InvestorHeader from './InvestorHeader.jsx';
import InvestorBody from './InvestorBody.jsx';
import LayoutFooter from '../B-LayoutSection/LayoutFooter.jsx';

const InvestorPage = () => {
    return (
        <>

            <div className="col-12 investorpage">
                <div className="row">

                    <InvestorHeader/>


                    <InvestorBody/>


                    <div>
                        <LayoutFooter/>
                    </div>





                </div>

            </div>






        </>
    )
}

export default InvestorPage;