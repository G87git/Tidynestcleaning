import React from 'react'
import Services from '../../api/service';
import { Link } from 'react-router-dom'

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-newsletter-widget widget">
                    <h2>Newsletter</h2>
                    <p>Join Our Growing Community of Subscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link to="/terms">Terms & Conditions</Link></span>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How Can We <br /> Help You Today?</h2>
                    <p>
                        Whether you need a sparkling clean home, a spotless office, or reliable cleaning services for your property, we are here to assist. Reach out to us for tailored solutions to meet your needs.
                    </p>
                    <Link to="/contact" className="contact-link">
                        Contact Us
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default ServiceSidebar;