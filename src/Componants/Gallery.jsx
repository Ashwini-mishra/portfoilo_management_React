/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsLink45Deg, BsChevronExpand } from "react-icons/bs";

const Gallery = (props) =>{
    return(
        <>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={props.idx}>
            <div className="portfolio-wrap">
                <img src={props.image} className="img-fluid" alt="" />
                <div className="portfolio-links">
                    <a href="#portfolio" title="More Details"><BsChevronExpand id = { props.idx } onClick={ props.onSelect }/></a>
                    <a href="#portfolio" title="More Details"><BsLink45Deg id = { props.idx } onClick={ props.onShow }/></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Gallery;
