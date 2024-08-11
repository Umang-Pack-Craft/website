import React from 'react'
const ParallaxImage = () => {
    return (
      <div className="parallax-wrapper">
        {/* Adjust the background image URL and other styles as needed */}
        <div className="parallax-image"></div>
      </div>
    );
  };
const Industries = () => {
  return (
    <div>
       <>
       <ParallaxImage />
        <div className='container-fluid'>
    <div className="row">
      <div className="col-12 whyuscnt">
          <h2 className="whyusTitle pb-2">INDUSTRIES</h2>
         
          <p className='w-75 p-4 ' style={{textAlign:"center"}}>"We cater to various types of industries:”
       
          </p>
          <div className='mb-4'>

<p>→   Food & Beverages: We manufacture high-strength, odourless boxes for many frozen food industries. Additionally, we supply special quality boxes for the dairy industry.</p> 

<p> →  Oil Industry:We specialise in producing boxes for the oil industry, focusing on high Compression Strength (CS) and Bursting Strength (BS).</p>

<p> →  Textile: Our large machines enable us to create large-size boxes suitable for the textile industry.</p>
          
<p> →  Pharmacy:We produce various sizes of boxes for the pharmaceutical industry, including custom fitments to support their products. Our skilled operators ensure the precision of these fitments.</p>  



          </div>
        
      </div>
    </div>
        </div>
    </>
    </div>
  )
}

export default Industries
