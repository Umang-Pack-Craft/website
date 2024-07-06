import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";

import "./OurProductRange.css";

const ParallaxImage = () => {
  return (
    <div className="parallax-wrapper">
      {/* Adjust the background image URL and other styles as needed */}
      <div className="parallax-image"></div>
    </div>
  );
};

const MainProducts = () => {
  return (
    <>
      <ParallaxImage />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 whyuscnt">
            <h2 className="whyusTitle pb-2">
              We are mainly produce two types of product
            </h2>
            <div className="line"></div>
            <h4 className="whyush3title mb-3">Corrugated Box</h4>
            <h4 className="whyush3title mb-3">Corrugated Sheet Board</h4>

            <p className="w-75 p-4 whyusTitleContent notCen">
              <blockquote>
                <q>
                  We understand the need to reliably deliver high quality boxes
                  and sheet board, to fulfill the demands of customers so all
                  our boxes and sheet board are supplied to exacting standards
                  in quality, services and environmental compliance. Our
                  corrugated sheet/boxes are absolutely essential to modern
                  manufacturers, distributors and retailers. Our 3 ply & 5 ply
                  Automatic corrugated packaging boxes go into many different
                  industries including, food manufacturing, Pharmaceutical,
                  Electronic, CeramicTile, Textile, Automobile and
                  pesticide,etc...
                </q>
              </blockquote>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProducts;
