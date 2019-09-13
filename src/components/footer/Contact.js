import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <h1>Contact Us</h1>
                <div class="contact">
                    <h2>Do you have questions, comments, or concerns?</h2>
                    <h3>Contact us with the form below.</h3>
                    <div className="form-content">
                        <Formik
                            initialValies = {{ name: '', email: '', message: '' }}
                            validate = { values => {
                                let errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400)
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Field type="name" name="name" />
                                        <ErrorMessage name="name" component="div" />
                                        <Field type="email" name="email" />
                                        <ErrorMessage name="email" component="div" />
                                        <Field type="message" name="message" />
                                        <ErrorMessage name="message" component="div" />
                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </Form>
                                )}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;