


import React, { StrictMode } from 'react'
import Isection1 from './Isection1';
import Isection2 from './Isection2';
import Isection3 from './Isection3';
import Isection4 from './Isection4';
import Isection5 from './Isection5';

const ISection = () => {
  return (
    <StrictMode>

            <div className="col-12 isection mb-5">
                <div className="row">

                    {/* section 1 */}
                    <Isection1 />

                    {/* section 2 */}
                    <Isection2/>


                    {/* section 3 */}
                    <Isection3/>

                    {/* Section 4 */}
                    <Isection4/>

                    {/* Section 5 */}
                    <Isection5/>



                </div>
            </div>






        
    </StrictMode>
  )
}

export default ISection;