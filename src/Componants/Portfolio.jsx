/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState, useEffect} from "react";
import profileImg from "../img/portfolio/portfolio-1.jpg";
import profileImg2 from "../img/portfolio/portfolio-2.jpg";
import profileImg3 from "../img/portfolio/portfolio-3.jpg";
import profileImg4 from "../img/portfolio/portfolio-4.jpg";
import profileImg5 from "../img/portfolio/portfolio-5.jpg";
import profileImg6 from "../img/portfolio/portfolio-6.jpg";
import profileImg7 from "../img/portfolio/portfolio-7.jpg";
import profileImg8 from "../img/portfolio/portfolio-8.jpg";
import profileImg9 from "../img/portfolio/portfolio-9.jpg";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Gallery from "./Gallery";
import Modal from 'react-bootstrap/Modal';
import { NavLink } from "react-router-dom";

const Portfolio = () =>{
    /************** use state to open lightbox ********* */
    const [ data, setState ] = useState({ photoIndex: 0, isOpen: false })

    /**************** use effect to open discription window ******* */
    const [ textContent, setContentState ] = useState({ contentIndex: 0, isOpen: false });

    /*************** use state for set value from api ************* */
    const [ portfolioData, setPortfolio ] = useState({
        images:[],
        content:[],
        ids:[],
    });

    /************** function for open lightbox ********* */
    const viewGallery = (event) =>{
        const length = event.target.id;
        setState({ photoIndex: length, isOpen: true })
    }

    /**************** function for discription window ******* */
    const viewContent = (event) =>{
        const length = event.target.id;
        setContentState({ contentIndex: length, isOpen: true })
    }

    let ids = [1,2,3,4,5,6,7,8,9];

    let images = [
        profileImg ,
        profileImg2,
        profileImg3,
        profileImg4,
        profileImg5,
        profileImg6,
        profileImg7,
        profileImg8,
        profileImg9,
    ];

    let content = [
        "content index 1",
        "content index 2",
        "content index 3",
        "content index 4",
        "content index 5",
        "content index 6",
        "content index 7",
        "content index 8",
        "content index 9",
    ];

    /******************* fetch api data ************ */
    const fetchData = async () => {
        const baseUrl = "http://localhost:4090/api/image";
        try {
            const data = await fetch('http://localhost:4090/api/portfolio?isActive=true', {
                method: 'GET',
                });
            const response = await data.json();
            response.data.forEach(element => {
                images.push(`${baseUrl}/${element.image}`);
                content.push(element.title);
                ids.push(element._id);
                setPortfolio({ images:images,content:content, ids: ids});
            });
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

    return(
        <>
        <main id="main">
            {/* <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="row portfolio-container">
                        {
                            portfolioData.images.map( (image, idx) => {
                                return <Gallery
                                    image = {image}
                                    key = {idx}
                                    idx = {idx}
                                    onSelect = {viewGallery}
                                    onShow = {viewContent}
                                />
                            })
                        }
                        <div id="gallery-image">
                            {data.isOpen && (
                                <Lightbox
                                    mainSrc={portfolioData.images[data.photoIndex]}
                                    nextSrc={portfolioData.images[(data.photoIndex + 1) % portfolioData.images.length]}
                                    prevSrc={portfolioData.images[(data.photoIndex + portfolioData.images.length - 1) % portfolioData.images.length]}
                                    onCloseRequest={() => setState({ isOpen: false, photoIndex : 0 })}
                                    onMovePrevRequest={() =>
                                    setState({
                                        photoIndex: (data.photoIndex + portfolioData.images.length - 1) % portfolioData.images.length,
                                        isOpen: true,
                                    })
                                    }
                                    onMoveNextRequest={() =>
                                    setState({
                                        photoIndex: (data.photoIndex + 1) % portfolioData.images.length,
                                        isOpen: true
                                    })
                                    }
                                />
                            )}
                        </div>
                        <div id="gallery-content">
                            <Modal show={textContent.isOpen}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                >
                                <Modal.Header closeButton onClick={()=> setContentState({ contentIndex: 0, isOpen: false })} style={{"backgroundColor":"#37b3ed"}}>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Project Description
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>{portfolioData.content[textContent.contentIndex]}</h4>
                                    <p>
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros.
                                    </p>
                                    <div>
                                        <NavLink to= {`/portfolio/${portfolioData.ids[textContent.contentIndex]}`}>-- Read More </NavLink>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Portfolio Section --> */}
        </main>
        </>
    )
}

export default Portfolio;
