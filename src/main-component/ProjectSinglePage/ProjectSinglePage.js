import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Project from '../../api/project';
import Footer from '../../components/footer/Footer.js'
import ServiceSidebar from '../ServiceSinglePage/sidebar.js';

const ProjectSinglePage = (props) => {
    const { id } = useParams()

    const projectDetails = Project.find(item => item.Id === id)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={`${projectDetails.title} Cleaning `} pagesub={'Project'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <img src={projectDetails.pImg} alt="" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>{projectDetails.subTitle}</h2>
                                        <p>{projectDetails.description}</p>
                                        <p>{projectDetails.details}</p>
                                    </div>
                                </div>
                                <div className="wpo-related-section">
                                    <h2>Our Work Process</h2>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-lamp"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Quality We Ensure</h3>
                                                    <p>We deliver top-notch cleaning services by focusing on detail, hygiene, and professionalism, ensuring a pristine environment every time.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-medal"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Experienced Workers</h3>
                                                    <p>Our team of skilled and experienced cleaners is trained to meet your unique requirements, providing reliable and efficient service.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="wpo-related-item">
                                                <div className="wpo-related-icon">
                                                    <i className="fi flaticon-trophy"></i>
                                                </div>
                                                <div className="wpo-related-text">
                                                    <h3>Modern Equipment Use</h3>
                                                    <p>We use advanced, eco-friendly cleaning tools and techniques to deliver exceptional results, safeguarding your health and the environment.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar/>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;
