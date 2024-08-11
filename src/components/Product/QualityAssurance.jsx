import React from "react";

const ParallaxImage = () => {
  return (
    <div className="parallax-wrapper">
      {/* Adjust the background image URL and other styles as needed */}
      <div className="parallax-image"></div>
    </div>
  );
};
const QualityAssurance = () => {
  return (
    <div>
      <>
        <ParallaxImage />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 whyuscnt">
              <h2 className="whyusTitle pb-2">QUALITY ASSURANCE</h2>
               
              <p className="w-75 p-4 " style={{ textAlign: "center" }}>
                "Our fully equipped QC lab rigorously tests all inbound and
                outbound materials to meet required standards.”
              </p>
              <div className="mb-4">
                <p>
                  → PALLET BOX: Jumbo-sized high-quality boxes for bulk and
                  heavy product storage and shipping, primarily for exports.
                </p>

                <p>
                  {" "}
                  → DUPLEX BOX: These boxes feature a white glossy finish,
                  optionally laminated for water-resistance, and can be printed
                  using offset machines.
                </p>

                <p>
                  {" "}
                  → MULTICOLOR BOX: Our in-house 3-colour Flexo printing
                  machines deliver varied designs, complemented by offset
                  printing for multi-color finishing.
                </p>

                <p>
                  {" "}
                  → DYE CUT BOX: Tailored to customer specifications, these
                  boxes boast high-quality finishes, aiding in product packing
                  ease.
                </p>

                <p>
                  {" "}
                  → REGULAR SLOTTED (RSC) BOX: Our RSC machine caters to
                  universal box sizes, ensuring quick job turnover for prompt
                  customer delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default QualityAssurance;
