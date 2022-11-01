/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from "react";
import MediaMenu from "./MediaMenu";
import logo from "../img/profile-img.jpg";
import Footer from "./Footer";
import { BsFillHouseFill } from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink, useParams } from "react-router-dom";

const PortfolioPage = () =>{
    const {idx} = useParams();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const setActive = () =>{
        setIsNavExpanded(false);
    }

    /*************** use state for set value from api ************* */
    const [ portfolioData, setPortfolio ] = useState({
        image:"",
        content:"",
    });

    /******************* fetch api data ************ */
    const fetchData = async () => {
        const baseUrl = "http://localhost:4090/api/image";
        try {
            const data = await fetch(`http://localhost:4090/api/portfolio/${idx}`, {
                method: 'GET',
                });
            const response = await data.json();
            if(data.status !== 200){
                alert(response.data );
                window.location = "/"
            }
            let image = (`${baseUrl}/${response.data.image}`);
            let content = (response.data.title);
            setPortfolio({ image:image,content:content});
        }
        catch (error) {
            console.log("{{{{error in fetch resource}}}}}", error.message);
        }
    }

    /***************** to call api data fetch function ************** */
    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return (
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
                    <h1 className="text-light">Trippin Teddy</h1>
                    <div className="social-links mt-3 text-center">
                        <MediaMenu />
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><NavLink to="/" className="nav-link scrollto active" onClick={setActive}><BsFillHouseFill size={20} />Home</NavLink></li>
                    </ul>
                </nav>
                {/* <!-- .nav-menu --> */}
                </div>
            </header>
            {/* <!-- End Header --> */}

            <main id="main">
            {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Portfoio Details</h2>
                            <ol>
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li>Portfoio Details</li>
                            </ol>
                        </div>
                    </div>
                </section>
                {/* <!-- End Breadcrumbs --> */}

            {/* <!-- ======= Portfolio Details Section ======= --> */}
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">
                        <div className="row gy-6">
                            <div className="col-lg-6">
                                <div className="portfolio-details-slider swiper">
                                    <div className="swiper-wrapper align-items-center">
                                        <div className="swiper-slide">
                                            <img src={portfolioData.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Web design</li>
                                        <li><strong>Client</strong>: ASU Company</li>
                                        <li><strong>Project date</strong>: 01 March, 2020</li>
                                        <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                    </ul>
                                </div>
                                <div className="portfolio-description">
                                    <h2>{portfolioData.content}</h2>
                                    <p>
                                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* <!-- End Portfolio Details Section --> */}

            </main>
            {/* <!-- End #main --> */}
            <Footer />
        </>
    )
};

export default PortfolioPage;
