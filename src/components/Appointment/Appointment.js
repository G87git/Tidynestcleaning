import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import cimg from '../../images/contact.jpg'


const Appointment = () => {


    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };


    return (
        <section className="wpo-contact-section section-padding">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title-s2">
                                    <h2>Make An Appointment</h2>
                                </div>
                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                    <div className="row">
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.name}
                                                    type="text"
                                                    name="name"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Name" />
                                            </div>
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.email}
                                                    type="email"
                                                    name="email"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Email" />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.phone}
                                                    type="number"
                                                    name="phone"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your phone" />
                                                {validator.message('phone', forms.phone, 'required|phone')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <select className="form-control"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.subject}
                                                    type="text"
                                                    name="subject">
                                                    <option>Choose a Service</option>
                                                    <option value="AirBnB Cleaning">AirBnB Cleaning</option>
                                                    <option value="Domestic Cleaning">Domestic Cleaning</option>
                                                    <option value="Deep Cleaning">Deep Cleaning</option>
                                                    <option value="After-Building Cleaning">After-Building Cleaning</option>
                                                    <option value="Commercial Cleaning">Commercial Cleaning</option>
                                                    <option value="End of Tenancy Cleaning">End of Tenancy Cleaning</option>
                                                </select>
                                                {validator.message('subject', forms.subject, 'required|alpha_space')}
                                            </div>
                                        </div>
                                        <div className="col fullwidth col-lg-12 ">
                                            <textarea
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                value={forms.message}
                                                type="text"
                                                name="message"
                                                placeholder="Message">
                                            </textarea>
                                            {validator.message('message', forms.message, 'required')}
                                        </div>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn"><i className="fa fa-angle-double-right"
                                            aria-hidden="true"></i> Submit Now</button>
                                    </div>
                                </form>
                                <div className="border-style"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wpo-contact-img">
                                <img src={cimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment;