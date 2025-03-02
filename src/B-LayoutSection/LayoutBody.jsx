import BodySection1 from "../C-BodySection/BodySection1.jsx";
import BodySection2 from "../C-BodySection/BodySection2.jsx";
import BodySection3 from "../C-BodySection/BodySection3.jsx";
import BodySection4 from "../C-BodySection/BodySection4.jsx";
import BodySection5 from "../C-BodySection/BodySection5.jsx";
import '../A-GlobalStyle/BodySection.css';


const LayoutBody = () => {
  return (
    <>
        <div className="col-md-10 mt-5 p-4 m-auto">
          <div className="row">


              <BodySection1/>

              <BodySection2/>

              <BodySection3/>

              <BodySection4/>

              <BodySection5/>

          </div>
        </div>

    </>
  )
}

export default LayoutBody;