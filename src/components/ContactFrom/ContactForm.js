import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import emailjs from '@emailjs/browser'; // Import EmailJS from @emailjs/browser

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        service: '',
        phone: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            // Send form data using EmailJS
            emailjs
                .send(
                    'service_uzcj0wl', // Replace with your EmailJS service ID
                    'template_dtiiml2', // Replace with your EmailJS template ID
                    {
                        name: forms.name,
                        email: forms.email,
                        service: forms.service,
                        phone: forms.phone,
                        message: forms.message
                    },
                    'hCCz8qq-IX64LKhGv' // Replace with your EmailJS public key
                )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('Message sent successfully!');
                        setForms({
                            name: '',
                            email: '',
                            service: '',
                            phone: '',
                            message: ''
                        });
                    },
                    (err) => {
                        console.error('FAILED...', err);
                        alert('Message failed to send. Please try again.');
                    }
                );

            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name"
                        />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email"
                        />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your phone"
                        />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.service}
                            type="text"
                            name="service"
                        >
                            <option value="">Choose a Service</option>
                            <option value="AirBnB Cleaning">AirBnB Cleaning</option>
                            <option value="Domestic Cleaning">Domestic Cleaning</option>
                            <option value="Deep Cleaning">Deep Cleaning</option>
                            <option value="After-Building Cleaning">After-Building Cleaning</option>
                            <option value="Commercial Cleaning">Commercial Cleaning</option>
                            <option value="End of Tenancy Cleaning">End of Tenancy Cleaning</option>
                        </select>
                        {validator.message('service', forms.service, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message"
                    ></textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i> Submit Now
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
