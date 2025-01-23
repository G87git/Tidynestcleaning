import React from 'react';
import abimg from '../../images/about.JPG'; // Replace with an image of a cleaning professional or team
// import sign from '../../images/signeture.png';

const About = (props) => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={abimg} alt="About TidyNest Cleaning Services" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title-s2">
                                    <h2>Your Trusted Cleaning Partner in the UK</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>
                                        At <strong>TidyNest Cleaning Services UK</strong>, we’re committed to making life simpler, cleaner, and stress-free for our clients. 
                                        Whether it’s your home, office, or a rental property, we offer professional cleaning services designed to meet your unique needs.
                                    </p>
                                    <p>
                                        Our experienced team works diligently with eco-friendly products and advanced equipment, ensuring a spotless environment every time. 
                                        We’re proud to be a reliable choice for individuals, families, and businesses across Birmingham and the UK.
                                    </p>
                                    <div className="signeture">
                                        <h4>The Team</h4>
                                        <p>TidyNest Cleaning Services UK</p>
                                        {/* <span>
                                            <img src={sign} alt="Signature of Brubaker Nilka" />
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
