import { FaFilePdf } from "react-icons/fa"; // Import PDF icon
import "./Testimonial.css";
import certificate from "../../assets/certificate.jpg";
import pdf from "../../certificate/certificate.pdf";
import "../Whyus/CoreValue.css";

const Testimonial = () => {
  return (
    <>
     
      {/* New section for Certificate of Compliance */}
      <div className="certificate-section">
        <div className="container whyuscnt">
          <h2 className="whyusTitle">Our Commitment to Quality</h2>
          <div className="certificate-container">
            <div className="certificate-info">
              <h3>Certificate of Compliance</h3>
              <p>We are proud to maintain the highest standards in our industry. Our Certificate of Compliance demonstrates our commitment to quality and adherence to industry regulations.</p>
              <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn-view-certificate">
                <FaFilePdf /> View Certificate
              </a>
            </div>
            <div className="certificate-image">
              <img src={certificate} alt="Certificate of Compliance Preview" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;