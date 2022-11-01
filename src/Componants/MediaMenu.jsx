/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const MediaMenu = () => {
    return(
        <>
            <a href="#" ><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#" ><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" ><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" ><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" ><FontAwesomeIcon icon={faSkype} /></a>
        </>
    )
}

export default MediaMenu;
