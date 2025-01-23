import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about'
// import ServiceSection from '../../components/ServiceSection/Serx
// import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact from '../../components/FunFact/FunFact';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
// import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2.js';
// import WorkSection from '../../components/WorkSection/WorkSection.js';


const AboutPage = () => {
    return (
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About />
            <FunFact />
            <PartnerSection />
            {/* <ServiceSectionS2/>
            <WorkSection/> */}
            {/* <TeamSection /> */}
            <Testimonial />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
