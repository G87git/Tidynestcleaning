import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    const [expanded, setExpanded] = React.useState(false);

    // Handle accordion state changes
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // FAQ Data Array for Cleaning Business
    const faqData = [
        {
            id: 'panel1',
            question: 'What services do you provide?',
            answer: 'We offer a range of cleaning services including Airbnb turnovers, regular domestic cleaning, deep cleaning, end-of-tenancy cleaning, after-builder cleaning, and commercial cleaning. Let us know your requirements, and we’ll customize a solution for you.'
        },
        {
            id: 'panel2',
            question: 'How do I book a cleaning service?',
            answer: 'Booking is simple! You can contact us via our website, phone, or email. Select the service you need, choose a date and time, and confirm your booking. We’ll handle the rest!'
        },
        {
            id: 'panel3',
            question: 'What areas do you cover?',
            answer: 'We provide cleaning services across the West Midlands. If you’re unsure whether we cover your location, please get in touch with us for confirmation.'
        },
        {
            id: 'panel4',
            question: 'Do I need to provide cleaning supplies or equipment?',
            answer: 'No, we bring all the necessary cleaning supplies and equipment. However, if you have specific products or tools you’d prefer us to use, just let us know in advance.'
        },
        {
            id: 'panel5',
            question: 'What is included in a deep cleaning service?',
            answer: 'Our deep cleaning service includes a thorough cleaning of every room, including hard-to-reach areas like behind appliances, under furniture, and inside cabinets. We also sanitize surfaces, remove dirt buildup, and leave your space spotless.'
        },
        {
            id: 'panel6',
            question: 'What happens if I need to cancel or reschedule my appointment?',
            answer: 'We understand that plans change. You can cancel or reschedule your appointment with at least 24 hours’ notice without any additional charges. For last-minute cancellations, a fee may apply.'
        },
        {
            id: 'panel7',
            question: 'Are your cleaners insured and background-checked?',
            answer: 'Yes, all our cleaners are fully insured, trained, and background-checked. Your safety and satisfaction are our top priorities.'
        },
        {
            id: 'panel8',
            question: 'Do I need to be home during the cleaning?',
            answer: 'You don’t need to be home during the cleaning. Many clients provide access instructions or leave keys in a secure location. If you prefer to be present, that’s perfectly fine too!'
        }
    ];

    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="wpo-benefits-section">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <div className="wpo-section-title">
                                <h2>Frequently Asked Questions</h2>
                                <p>
                                    Have questions about our cleaning services? Check out the answers to our most common inquiries below.
                                    If you don’t see your question here, feel free to reach out—we’re happy to help!
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="wpo-benefits-item">
                                {faqData.map((faq) => (
                                    <Accordion
                                        key={faq.id}
                                        expanded={expanded === faq.id}
                                        onChange={handleChange(faq.id)}
                                    >
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            expandIcon={'+'}

                                            aria-controls={`${faq.id}-content`}
                                            id={`${faq.id}-header`}
                                        >
                                            <Typography>{faq.question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ backgroundColor: '#13287e', padding: '15px', borderRadius: '5px' }}>
                                                <Typography style={{ color: "#fff" }}>
                                                    {faq.answer}
                                                </Typography>
                                            </div>
                                        </AccordionDetails>

                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
