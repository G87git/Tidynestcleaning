import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import FAQ from './faq';
import Footer from '../../components/footer/Footer.js';
import tImg1 from '../../images/terms/terms.jpg';

const TermPage = () => {
    return (
        <Fragment>
            {/* Navigation Bar */}
            <Navbar />

            {/* Page Title Section */}
            <PageTitle pageTitle={'Terms & Conditions'} pagesub={'Terms & Conditions'} />

            {/* Terms & Conditions Section */}
            <section className="wpo-terms-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="wpo-terms-wrap">
                                {/* Main Image */}
                                <div className="wpo-terms-img">
                                    <img src={tImg1} alt="Terms and Conditions" />
                                </div>

                                {/* Terms & Conditions Content */}
                                <div className="wpo-terms-text">
                                    <h2>Reasons for Using Website Terms and Conditions</h2>
                                    <p>
                                        When creating a website, it’s easy to overlook adding a Terms and Conditions section. 
                                        While users might not frequently read these terms, having this page is essential for protecting 
                                        your business and setting clear expectations.
                                    </p>
                                    <p>
                                        Even a concise Terms and Conditions agreement should include key clauses to safeguard your business. 
                                        For instance, if you accidentally list an incorrect price for a product, these terms allow you 
                                        to cancel the order in a lawful manner.
                                    </p>

                                    <ul>
                                        <li>Acceptable use of your website and its content.</li>
                                        <li>Rules regarding content uploaded by users.</li>
                                        <li>Policies on linking to external websites.</li>
                                        <li>Website availability disclaimers.</li>
                                        <li>Customer returns and guarantees.</li>
                                    </ul>

                                    <p>
                                        If estimates for cleaning times are provided, they are approximations based on the average time 
                                        required for similar properties. Actual cleaning time may vary due to factors like task complexity 
                                        or the condition of the property. One-off cleans may take longer than regular maintenance due to 
                                        extended intervals between sessions.
                                    </p>

                                    <p>
                                        Post-construction cleaning (builder's cleaning), event cleaning, or cleaning neglected homes may 
                                        take significantly longer than maintaining a well-kept property. We recommend requesting specialized 
                                        services such as Builders Cleaning or Event Cleaning for these scenarios.
                                    </p>
                                </div>

                                {/* FAQ Section */}
                                <FAQ />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer and Scrollbar */}
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default TermPage;
