import { StrictMode } from "react"
import Section1 from "./Section1";
import './section.css';
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";



const Section =()=>{



    return(
        <StrictMode>

            <div className="col-md-10 mt-5 p-4 m-auto">
                <div className="row">

                    {/* Section 1 */}
                    <Section1/>


                    {/* section 2 */}
                    <Section2/>


                    {/* section 3 */}
                    <Section3/>

                    {/* Section 4 */}
                    <Section4/>

                    {/* Section 5 */}
                    <Section5/>

                </div>
            </div>

        </StrictMode>
    )
}


export default Section;