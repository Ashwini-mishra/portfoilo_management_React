import React from "react";
import profileImg from "../img/profile-img.jpg";
import Fade from 'react-reveal/Fade';
import { BiMinus } from "react-icons/bi";

const About = () =>{

    return(
        <>
        {/* <!-- ======= About Section ======= --> */}
        <main id="main">
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <Fade right>
                            <div className="col-lg-4">
                                <img src={profileImg} className="img-fluid" alt="" />
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>UI/UX Designer &amp; Web Developer.</h3>
                                <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                        <li><BiMinus /> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                        <li><BiMinus /> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><BiMinus /> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                        <li><BiMinus /> <strong>City:</strong> <span>New York, USA</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                        <li><BiMinus /> <strong>Age:</strong> <span>30</span></li>
                                        <li><BiMinus /> <strong>Degree:</strong> <span>Master</span></li>
                                        <li><BiMinus /> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                        <li><BiMinus /> <strong>Freelance:</strong> <span>Available</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </main>
            {/* <!-- End About Section --> */}
        </>
    )
}

export default About;
