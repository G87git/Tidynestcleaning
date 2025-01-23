import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-2.jpg';
import hero2 from '../../images/slider/slide-3.jpg';

const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
};

const Hero2 = () => {
    return (
        <section className="wpo-hero-slider">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div className="hero-slide">
                            <div 
                                className="slide-inner slide-bg-image" 
                                style={{ backgroundImage: `url(${hero1})` }}
                            >
                                <div className="gradient-overlay"></div>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>Professional Cleaning for a Spotless Experience</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>At TidyNest Cleaning Service, we ensure your Airbnb or short-term rental is always guest-ready. Trust us to create a welcoming environment that leaves lasting impressions.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link to="/about" className="theme-btn">
                                                <i className="fa fa-angle-double-right"></i> Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="hero-slide">
                            <div 
                                className="slide-inner slide-bg-image" 
                                style={{ backgroundImage: `url(${hero2})` }}
                            >
                                <div className="gradient-overlay"></div>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>Your Trusted Partner for Impeccable Cleanliness</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>Let us handle the cleaning so you can focus on delighting your guests. Our expert team ensures every corner is spotless and ready for the next visitor.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link to="/appointment" className="theme-btn">
                                                <i className="fa fa-angle-double-right"></i>Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
