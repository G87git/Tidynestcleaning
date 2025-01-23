// import React, { useState } from 'react';
// import SimpleReactValidator from 'simple-react-validator';

// const AppointmentS2 = () => {
//     const [forms, setForms] = useState({
//         name: '',
//         email: '',
//         service: '',
//         phone: '',
//         approx: '',
//         bedrooms: '',
//         bathrooms: '',
//         postcode: '',
//         message: ''
//     });

//     const [validator] = useState(
//         new SimpleReactValidator({
//             className: 'errorMessage'
//         })
//     );

//     const changeHandler = (e) => {
//         setForms({ ...forms, [e.target.name]: e.target.value });
//         if (validator.allValid()) {
//             validator.hideMessages();
//         } else {
//             validator.showMessages();
//         }
//     };

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (validator.allValid()) {
//             validator.hideMessages();
//             alert('Thank you for booking an appointment with Tidynest Cleaning Services!');
//             setForms({
//                 name: '',
//                 email: '',
//                 service: '',
//                 phone: '',
//                 approx: '',
//                 bedrooms: '',
//                 bathrooms: '',
//                 postcode: '',
//                 message: ''
//             });
//         } else {
//             validator.showMessages();
//         }
//     };


//     return (
//         <section className="wpo-contact-section-s2 section-padding">
//             <div className="container">
//                 <div className="wpo-contact-section-wrapper">
//                     <div className="row align-items-center justify-content-center">
//                         <div className="col-lg-8 col-md-12 col-12">
//                             <div className="wpo-contact-form-area">
//                                 <div className="wpo-section-title">
//                                     <h2>Book an Appointment</h2>
//                                 </div>
//                                 <form
//                                     onSubmit={(e) => submitHandler(e)}
//                                     className="contact-validation-active"
//                                 >
//                                     <div className="row">
//                                         {/* Name */}
//                                         <div className="col col-lg-6 col-12">
//                                             <div className="form-field">
//                                                 <input
//                                                     className="form-control"
//                                                     value={forms.name}
//                                                     type="text"
//                                                     name="name"
//                                                     onBlur={(e) => changeHandler(e)}
//                                                     onChange={(e) => changeHandler(e)}
//                                                     placeholder="Your Name"
//                                                 />
//                                             </div>
//                                             {validator.message('name', forms.name, 'required|alpha_space')}
//                                         </div>
//                                         {/* Email */}
//                                         <div className="col col-lg-6 col-12">
//                                             <div className="form-field">
//                                                 <input
//                                                     className="form-control"
//                                                     value={forms.email}
//                                                     type="email"
//                                                     name="email"
//                                                     onBlur={(e) => changeHandler(e)}
//                                                     onChange={(e) => changeHandler(e)}
//                                                     placeholder="Your Email"
//                                                 />
//                                                 {validator.message('email', forms.email, 'required|email')}
//                                             </div>
//                                         </div>
//                                         {/* service */}
//                                         <div className="col col-lg-6 col-12">
//                                             <div className="form-field">
//                                                 <select
//                                                     className="form-control"
//                                                     onBlur={(e) => changeHandler(e)}
//                                                     onChange={(e) => changeHandler(e)}
//                                                     value={forms.service}
//                                                     name="service"
//                                                 >
//                                                     <option value="">Choose a Service</option>
//                                                     <option value="AirBnB Cleaning">AirBnB Cleaning</option>
//                                                     <option value="Domestic Cleaning">Domestic Cleaning</option>
//                                                     <option value="Deep Cleaning">Deep Cleaning</option>
//                                                     <option value="After-Building Cleaning">After-Building Cleaning</option>
//                                                     <option value="Commercial Cleaning">Commercial Cleaning</option>
//                                                     <option value="End of Tenancy Cleaning">End of Tenancy Cleaning</option>
//                                                 </select>
//                                                 {validator.message('service', forms.service, 'required')}
//                                             </div>
//                                         </div>

//                                         {/* Bedrooms */}
//                                         <div className="col col-lg-6 col-12">
//                                             <div className="form-field">
//                                                 <select
//                                                     className="form-control"
//                                                     onBlur={(e) => changeHandler(e)}
//                                                     onChange={(e) => changeHandler(e)}
//                                                     value={forms.bedrooms}
//                                                     name="bedrooms"
//                                                 >
//                                                     <option value="">Number of Bedrooms</option>
//                                                     <option value="1">1 Bedroom</option>
//                                                     <option value="2">2 Bedrooms</option>
//                                                     <option value="3">3 Bedrooms</option>
//                                                     <option value="4+">4+ Bedrooms</option>
//                                                 </select>
//                                                 {validator.message('bedrooms', forms.bedrooms, 'required')}
//                                             </div>
//                                         </div>
//                                         {/* Bathrooms */}
//                                         <div className="col col-lg-6 col-12">
//                                             <div className="form-field">
//                                                 <select
//                                                     className="form-control"
//                                                     onBlur={(e) => changeHandler(e)}
//                                                     onChange={(e) => changeHandler(e)}
//                                                     value={forms.bathrooms}
//                                                     name="bathrooms"
//                                                 >
//                                                     <option value="">Number of Bathrooms</option>
//                                                     <option value="1">1 Bathroom</option>
//                                                     <option value="2">2 Bathrooms</option>
//                                                     <option value="3+">3+ Bathrooms</option>
//                                                 </select>
//                                                 {validator.message('bathrooms', forms.bathrooms, 'required')}
//                                             </div>
//                                         </div>
//                                         {/* Phone */}
//                                         <div className="col col-lg-6 col-12">
//                                             <div className="form-field">
//                                                 <input
//                                                     className="form-control"
//                                                     value={forms.phone}
//                                                     type="number"
//                                                     name="phone"
//                                                     onBlur={(e) => changeHandler(e)}
//                                                     onChange={(e) => changeHandler(e)}
//                                                     placeholder="Your Phone Number"
//                                                 />
//                                                 {validator.message('phone', forms.phone, 'required|phone')}
//                                             </div>
//                                         </div>
//                                         {/* Postcode */}
//                                         <div className="col col-lg-6 col-12">
//                                             <div className="form-field">
//                                                 <input
//                                                     className="form-control"
//                                                     value={forms.postcode}
//                                                     type="text"
//                                                     name="postcode"
//                                                     onBlur={(e) => changeHandler(e)}
//                                                     onChange={(e) => changeHandler(e)}
//                                                     placeholder="Your Postcode"
//                                                 />
//                                             </div>
//                                             {validator.message('postcode', forms.postcode, 'required')}
//                                         </div>
//                                         {/* Message */}
//                                         <div className="col col-lg-12 col-12">
//                                             <textarea
//                                                 className="form-control"
//                                                 value={forms.message}
//                                                 name="message"
//                                                 onBlur={(e) => changeHandler(e)}
//                                                 onChange={(e) => changeHandler(e)}
//                                                 placeholder="Additional Information (optional)"
//                                             ></textarea>
//                                             {validator.message('message', forms.message, 'required')}
//                                         </div>
//                                     </div>
//                                     {/* Submit Button */}
//                                     <div className="submit-area">
//                                         <button type="submit" className="theme-btn">
//                                             <i className="fa fa-angle-double-right" aria-hidden="true"></i> Submit Now
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AppointmentS2;


import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import emailjs from '@emailjs/browser'; // Import EmailJS

const AppointmentS2 = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        service: '',
        phone: '',
        approx: '',
        bedrooms: '',
        bathrooms: '',
        postcode: '',
        message: ''
    });

    const [validator] = useState(
        new SimpleReactValidator({
            className: 'errorMessage'
        })
    );

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
            // Hide validation messages
            validator.hideMessages();

            // EmailJS parameters
            const emailParams = {
                name: forms.name,
                email: forms.email,
                service: forms.service,
                phone: forms.phone,
                // approx: forms.approx,
                bedrooms: forms.bedrooms,
                bathrooms: forms.bathrooms,
                postcode: forms.postcode,
                message: forms.message
            };

            // EmailJS Send Function
            emailjs
                .send(
                    'service_wdhe4rf', // Replace with your EmailJS service ID
                    'template_n1fp2x5', // Replace with your EmailJS template ID
                    emailParams,
                    'hCCz8qq-IX64LKhGv' // Replace with your EmailJS public key
                )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('Thank you! Your appointment request has been sent.');
                        setForms({
                            name: '',
                            email: '',
                            service: '',
                            phone: '',
                            // approx: '',
                            bedrooms: '',
                            bathrooms: '',
                            postcode: '',
                            message: ''
                        });
                    },
                    (error) => {
                        console.log('FAILED...', error);
                        alert('Sorry, there was an issue sending your request. Please try again.');
                    }
                );
        } else {
            validator.showMessages();
        }
    };

    return (
        <section className="wpo-contact-section-s2 section-padding">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title">
                                    <h2>Book an Appointment</h2>
                                </div>
                                <form onSubmit={submitHandler} className="contact-validation-active">
                                    <div className="row">
                                        {/* Name */}
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.name}
                                                    type="text"
                                                    name="name"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                        {/* Email */}
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.email}
                                                    type="email"
                                                    name="email"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    placeholder="Your Email"
                                                />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                        </div>
                                        {/* Service */}
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <select
                                                    className="form-control"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    value={forms.service}
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
                                        {/* Bedrooms */}
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <select
                                                    className="form-control"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    value={forms.bedrooms}
                                                    name="bedrooms"
                                                >
                                                    <option value="">Number of Bedrooms</option>
                                                    <option value="1">1 Bedroom</option>
                                                    <option value="2">2 Bedrooms</option>
                                                    <option value="3">3 Bedrooms</option>
                                                    <option value="4+">4+ Bedrooms</option>
                                                </select>
                                                {validator.message('bedrooms', forms.bedrooms, 'required')}
                                            </div>
                                        </div>
                                        {/* Bathrooms */}
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <select
                                                    className="form-control"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    value={forms.bathrooms}
                                                    name="bathrooms"
                                                >
                                                    <option value="">Number of Bathrooms</option>
                                                    <option value="1">1 Bathroom</option>
                                                    <option value="2">2 Bathrooms</option>
                                                    <option value="3+">3+ Bathrooms</option>
                                                </select>
                                                {validator.message('bathrooms', forms.bathrooms, 'required')}
                                            </div>
                                        </div>
                                        {/* Phone */}
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.phone}
                                                    type="number"
                                                    name="phone"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    placeholder="Your Phone Number"
                                                />
                                                {validator.message('phone', forms.phone, 'required|phone')}
                                            </div>
                                        </div>
                                        {/* Postcode */}
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.postcode}
                                                    type="text"
                                                    name="postcode"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    placeholder="Your Postcode"
                                                />
                                            </div>
                                            {validator.message('postcode', forms.postcode, 'required')}
                                        </div>
                                        {/* Message */}
                                        <div className="col col-lg-12 col-12">
                                            <textarea
                                                className="form-control"
                                                value={forms.message}
                                                name="message"
                                                onBlur={changeHandler}
                                                onChange={changeHandler}
                                                placeholder="Additional Information (optional)"
                                            ></textarea>
                                            {validator.message('message', forms.message, 'required')}
                                        </div>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn">
                                            <i className="fa fa-angle-double-right" aria-hidden="true"></i> Submit Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentS2;
