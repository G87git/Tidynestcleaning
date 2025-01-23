import React from 'react';
// import wImg1 from '../../images/work/1.jpg'
// import wImg2 from '../../images/work/2.jpg'
// import wImg3 from '../../images/work/3.jpg'

const WorkSection = () => {
    return (
        <section className="wpo-work-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>How It Works</h2>
                            <p>
                                TidyNest Cleaning Service UK makes booking a cleaning service simple and stress-free. Follow
                                these three easy steps to enjoy a sparkling clean home or office!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                {/* <div className="wpo-work-img">
                                    <img src={wImg1} alt="Schedule Cleaning" />
                                </div> */}
                                <div className="wpo-work-text">
                                    <h2>Step 1: Book Your Service</h2>
                                    <p>
                                        Schedule your cleaning online or by phone. Select the date, time, and type of service
                                        you need—whether it's residential, commercial, or office cleaning.
                                    </p>
                                </div>
                                <div className="visible-text">
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-text">
                                    <h2>Step 2: We Clean <br /> For You</h2>
                                    <p>
                                        Our professional cleaners arrive on time and handle all cleaning tasks efficiently,
                                        using eco-friendly products and advanced equipment.
                                    </p>
                                </div>
                                <div className="visible-text">
                                    <span>2</span>
                                </div>
                                {/* <div className="wpo-work-img">
                                    <img src={wImg2} alt="Cleaning Process" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                {/* <div className="wpo-work-img">
                                    <img src={wImg3} alt="Happy Cleanliness" />
                                </div> */}
                                <div className="wpo-work-text">
                                    <h2>Step 3: Enjoy a Pristine Space</h2>
                                    <p>
                                        Relax and enjoy a clean and healthy environment, knowing that your home or office is
                                        sparkling and sanitized.
                                    </p>
                                </div>
                                <div className="visible-text">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
