import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/footer-logo.svg';
import Services from '../../api/service';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
};

const Footer = () => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        {/* About Section */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="TidyNest Logo" />
                                </div>
                                <p>
                                    TidyNest Cleaning Service is dedicated to making your space spotless, offering
                                    reliable and professional cleaning solutions tailored to your needs.
                                    <br />
                                    Our commitment to excellence ensures your complete satisfaction. Discover the
                                    difference with TidyNest today!
                                </p>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/service-s2">Our Services</Link></li>
                                    <li><Link to="/appointment">Book Appointment</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/project">Our Projects</Link></li>
                                    <li><Link to="/terms">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget join-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>
                                    Stay updated with the latest offers and tips for keeping your space spotless.
                                    Join our newsletter today!
                                </p>
                                <form onSubmit={SubmitHandler}>
                                    <input type="email" placeholder="Enter your email" required />
                                    <button type="submit">
                                        Subscribe <i className="ti-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 6).map((service, index) => (
                                        <li key={index}>
                                            <Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>
                                                {service.sTitle}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Footer Section */}
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">
                                &copy; {new Date().getFullYear()} TidyNest Cleaning Service | All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
