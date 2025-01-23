import React from 'react';
import ContactForm from '../ContactFrom/ContactForm';

const Contactpage = () => {
    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon" aria-label="Address icon">
                                                <i className="fi flaticon-placeholder" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p> Birmingham, UK</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon" aria-label="Email icon">
                                                <i className="fi flaticon-email" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p><a href="tidynestcleaninguk@gmail.com">tidynestcleaninguk@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon" aria-label="Phone icon">
                                                <i className="fi flaticon-phone-call" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p><a href="tel:+44 7958 569110">+44 7958 569110</a></p>
                                            <p><a href="tel:+44 7563 684082">+44 7563 684082</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>Feel free to reach out to us for any inquiries or questions about our cleaning services.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.319287611091!2d-1.8990834845174356!3d52.48624327980917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc98cc9fc2f7%3A0xc8a264fd318f38d6!2sBirmingham%2C%20UK!5e0!3m2!1sen!2suk!4v1547518905671"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                </div>
            </section>
        </section>
    );
};

export default Contactpage;
