/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import logo from "../img/profile-img.jpg";
import MediaMenu from "./MediaMenu";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { BsFillTelephoneFill,BsFillHouseFill,BsBarChartLineFill,BsPersonFill } from "react-icons/bs";

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const setActive = () =>{
        const header = document.getElementById("navbar");
        const btns = header.getElementsByClassName("nav-link");

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "inactive");
            this.className += " active";
        });
        }
        setIsNavExpanded(false);
    }

    return(
        <>
            {/* <!-- ======= Mobile nav toggle button ======= --> */}
            <div className="mobile-nav-toggle d-xl-none">
                {isNavExpanded ? <HiX
                size={30}
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }}
                />  : <HiOutlineMenu
                size={30}
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }}/>}
            </div>

            {/* <!-- ======= Header ======= --> */}
            <header className={ isNavExpanded ? "header active":"header"}>
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={logo} alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="">Bibhav Teddy</a></h1>
                        <div className="social-links mt-3 text-center">
                            <MediaMenu />
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active" onClick={setActive}><BsFillHouseFill size={20} /><span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto" onClick={setActive}><BsPersonFill size={20}/> <span>About</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto" onClick={setActive}><BsBarChartLineFill size={20} /> <span>Portfolio</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto" onClick={setActive}><BsFillTelephoneFill size={20}/> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}
                </div>
            </header>
            {/* <!-- End Header --> */}
        </>
    )
}

export default Header;