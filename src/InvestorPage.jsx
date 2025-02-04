
import InvestHeader from './InvestHeader';
import './Investor.css';
import ISection from './ISection';
import FooterSec from "./FooterSec";

const InvestorPage = () => {
    return (
        <>


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




        </>
    )
}

export default InvestorPage;