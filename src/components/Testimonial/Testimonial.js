import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial.jpg';

const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const testimonial = [
    {
        Des: "As an Airbnb host in Birmingham, I was struggling to keep up with cleaning demands between guest stays. TidyNest completely transformed my hosting experience! Their timely and thorough cleaning service has earned me consistent 5-star reviews. Highly recommend!",
        Title: "Sarah Johnson",
        Sub: "Airbnb Host, Birmingham",
    },
    {
        Des: "Managing multiple properties across the UK can be overwhelming, but TidyNest has been a lifesaver. They provide exceptional cleaning services for my Booking.com properties, ensuring every room is spotless and guest-ready. Guests constantly comment on the cleanliness of my homes.",
        Title: "James Edwards",
        Sub: "Property Owner, UK",
    },
    {
        Des: "TidyNest made all the difference for my short-term rental in Birmingham. Their attention to detail and reliability allowed me to focus on growing my business. Thanks to them, my property is always in top condition, and my guests love it!",
        Title: "Emma Thompson",
        Sub: "Short-Term Rental Host, Birmingham",
    },
];

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>What Our Clients Say</h2>
                            <p>Hear from hosts and property owners across Birmingham and the UK who trust TidyNest for their cleaning needs.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-testimonials-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="wpo-testimonials-img">
                                <img src={ts1} alt="Client Testimonials" width={"100%"}/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="wpo-testimonials-text">
                                <div className="quote">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <div className="wpo-testimonials-slide owl-carousel">
                                    <Slider {...settings}>
                                        {testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonials-slide-item" key={tsm}>
                                                <p>{tesmnl.Des}</p>
                                                <h5>{tesmnl.Title}</h5>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
