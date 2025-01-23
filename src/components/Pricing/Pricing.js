import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = (props) => {
    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <h2>Choose Your Pricing Plan</h2>
                            <p>At Tidynest Cleaning Services, we offer clear and affordable pricing for all cleaning services. Whether it's a one-time clean or a regular package, our plans are designed to meet your needs and budget.</p>
                        </div>
                    </div>
                </div>
                <div className="pricing-grids clearfix">

                     {/* Domestic Cleaning */}
                    <div className="grid">
                        <div className="type">
                            <h5>Domestic Cleaning</h5>
                        </div>
                        <div className="pricing-header">
                            <h3 className="price">£18 - £20</h3>
                            <p>Per Hour</p>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Weekly or Bi-weekly: £18/hour</li>
                                <li>With Equipment (Hoover & Mop): £20/hour</li>
                                <li>Monthly: £20/hour</li>
                            </ul>
                            <Link to="/appointment" className="get-started">Book Now</Link>
                        </div>
                    </div>

                    {/* AirBnB Cleaning */}
                    <div className="grid">
                        <div className="type">
                            <h5>AirBnB Cleaning</h5>
                        </div>
                        <div className="pricing-header">
                            <h3 className="price">From £40</h3>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>01 Bedroom + 01 Bathroom: £40</li>
                                <li>02 Bedroom + 01 Bathroom: £55</li>
                                <li>Wash and Dry: £8</li>
                                <li>Iron: £5</li>
                                <li>Contact us for larger properties</li>
                            </ul>
                            <Link to="/appointment" className="get-started">Book Now</Link>
                        </div>
                    </div>

                    {/* End of Tenancy Cleaning */}
                    <div className="grid">
                        <div className="type">
                            <h5>End of Tenancy Cleaning</h5>
                        </div>
                        <div className="pricing-header">
                            <h3 className="price">From £110</h3>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Studio Flat: From £110</li>
                                <li>1 Bed + 1 Bath: From £130</li>
                                <li>2 Bed + 1 Bath: From £175</li>
                                <li>3 Bed + 2 Bath: From £245</li>
                                <li>Blinds: £10</li>
                                <li>Second Oven: £28</li>
                                <li>Conservatory: From £30</li>
                            </ul>
                            <Link to="/appointment" className="get-started">Book Now</Link>
                        </div>
                    </div>

                    {/* Deep Cleaning */}
                    <div className="grid">
                        <div className="type">
                            <h5>Deep Cleaning</h5>
                        </div>
                        <div className="pricing-header">
                            <h3 className="price">£20</h3>
                            <p>Per Hour</p>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Detailed, all-inclusive cleaning</li>
                            </ul>
                            <Link to="/appointment" className="get-started">Book Now</Link>
                        </div>
                    </div>

                    {/* After-Building Cleaning */}
                    <div className="grid">
                        <div className="type">
                            <h5>After-Building Cleaning</h5>
                        </div>
                        <div className="pricing-header">
                            <h3 className="price">£25</h3>
                            <p>Per Hour</p>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Thorough cleaning after building work</li>
                            </ul>
                            <Link to="/appointment" className="get-started">Book Now</Link>
                        </div>
                    </div>

                    {/* Commercial Cleaning */}
                    <div className="grid">
                        <div className="type">
                            <h5>Commercial Cleaning</h5>
                        </div>
                        <div className="pricing-header">
                            <h3 className="price">Get a Quote</h3>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Professional cleaning for businesses</li>
                            </ul>
                            <Link to="/contact" className="get-started">Get a Quote</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Pricing;
