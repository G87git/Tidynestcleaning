import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
// import Hero from '../../components/hero/Hero'
import Scrollbar from '../../components/scrollbar/scrollbar'
// import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WorkSection from '../../components/WorkSection/WorkSection';
// import Appointment from '../../components/Appointment/Appointment';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
// import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
// import BlogSection from '../../components/BlogSection/BlogSection.js';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer.js';
import Hero2 from '../../components/hero2/Hero2.js';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2.js';
import FAQ from '../TermPage/faq.js';
import Pricing from '../../components/Pricing/Pricing.js';
import AppointmentS2 from '../../components/AppointmentS2/AppointmentS2.js';


const HomePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Hero2/>
            <ServiceSectionS2/>
            <PartnerSection/>
            <WorkSection/>
            <AppointmentS2/>
            <ProjectSection/>
            <Pricing/>
            {/* <TeamSection/> */}
            <Testimonial/>
            <FAQ/>
            {/* <BlogSection/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;