import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";
const Navbar = () => {
  const navigate = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleWhyUs = (sectionId) => {
    navigate("/whyus");
    scrollToSection(sectionId);
  };

  const handleWhyUsnew = (sectionId) => {
    navigate("/whyus");
    scrollToSection(sectionId);
    setShowModal(!showModal);
  };

  const handleProduct = (sectionId) => {
    navigate("/product");
    scrollToSection(sectionId);
  };
  const handleProductnew = (sectionId) => {
    navigate("/product");
    scrollToSection(sectionId);
    setShowModal(!showModal);
  };
  const handleContact = (sectionId) => {
    navigate("/contactus");
    scrollToSection(sectionId);
  };
  const handleContactnew = (sectionId) => {
    navigate("/contactus");
    scrollToSection(sectionId);
    setShowModal(!showModal);
  };

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    if (windowWidth <= 768) {
      setShowModal(!showModal);
    }
  };

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="container-fluid m-0 p-0 g-0">
        <div className="row m-0 g-0 p-0">
          <div className="navcnt m-0 p-0 g-0">
            <div className="navleft">
              <img src="https://kesarcraft.com/images/logo.png" alt="logo" />
            </div>
            <div className="navright">
              <div className="menues">
                <div className="menu1" onClick={() => navigate("/")}>
                  Home
                </div>
                <div className="menu1" onClick={() => handleWhyUs("whyus")}>
                  Why Us
                </div>
                <div className="menu1" onClick={() => handleProduct("product")}>
                  Product
                </div>
                <div
                  className="menu1"
                  onClick={() => handleContact("contactus")}
                >
                  Contact Us
                </div>

                {windowWidth <= 768 && (
                  <div className="hamburger mx-2" onClick={handleToggleModal}>
                    {!showModal && (
                      <GiHamburgerMenu
                        fontSize={30}
                        color=" rgb(0, 48, 131)"
                        className="hamnew"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-close">
            <RxCross1 fontSize={35} onClick={handleClose} />
          </div>
          <div className="modal1-content">
            <div
              className="menu1-modal"
              onClick={() => {
                navigate("/");
                handleClose();
              }}
            >
              Home
            </div>
            <div
              className="menu1-modal"
              onClick={() => {
                handleWhyUsnew("whyus");
                handleClose();
              }}
            >
              Why Us
            </div>
            <div
              className="menu1-modal"
              onClick={() => {
                handleProductnew("product");
                handleClose();
              }}
            >
              Product
            </div>
            <div
              className="menu1-modal"
              onClick={() => {
                handleContactnew("contactus");
                handleClose();
              }}
            >
              Contact Us
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
