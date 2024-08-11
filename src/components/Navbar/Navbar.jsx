import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";
import logo from "../../assets/umangLogo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (path, sectionId) => {
    navigate(path);
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 100);
    }
    setShowModal(false);
  };

  return (
    <>
      <div className={`navcnt ${scrolled ? 'scrolled' : ''}`}>
        <div className="navleft">
          <img src={logo} alt="logo" onClick={() => handleNavigation('/')} />
        </div>
        <div className="navright">
          <div className="menues">
            <div className="menu1" onClick={() => handleNavigation('/')}>Home</div>
            <div className="menu1" onClick={() => handleNavigation('/about', 'whyus')}>About</div>
            <div className="menu1" onClick={() => handleNavigation('/product', 'product')}>Product</div>
            <div className="menu1" onClick={() => handleNavigation('/customers', 'customers')}>Customers</div>
            <div className="menu1" onClick={() => handleNavigation('/contactus', 'contactus')}>Contact</div>
          </div>
          {windowWidth <= 768 && (
            <div className="hamburger" onClick={() => setShowModal(!showModal)}>
              <GiHamburgerMenu fontSize={30} color="rgb(0, 48, 131)" />
            </div>
          )}
        </div>
      </div>
      <div className={`modal ${showModal ? 'show' : ''}`}>
        <div className="modal-close">
          <RxCross1 fontSize={35} onClick={() => setShowModal(false)} />
        </div>
        <div className="modal1-content">
          <div className="menu1-modal" onClick={() => handleNavigation('/')}>Home</div>
          <div className="menu1-modal" onClick={() => handleNavigation('/about', 'whyus')}>About</div>
          <div className="menu1-modal" onClick={() => handleNavigation('/product', 'product')}>Product</div>
          <div className="menu1-modal" onClick={() => handleNavigation('/customers', 'customers')}>Customers</div>
          <div className="menu1-modal" onClick={() => handleNavigation('/contactus', 'contactus')}>Contact</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;