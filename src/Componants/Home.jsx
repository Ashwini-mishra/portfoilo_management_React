import React from "react";
import Typed from 'react-typed';

const Home = () => {

    return(
        <>
        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container">
                <h1>Bibhav Teddy</h1>
                <p>
                    <Typed
                        strings={["Designer", "Developer", "Freelancer", "Photographer"]}
                        typeSpeed={40}
                        loop
                    />
                </p>
            </div>
        </section>
        {/* <!-- End Hero --> */}
        </>
    )
}

export default Home;
