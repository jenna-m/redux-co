import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required('Name required'),
    email: yup.string().email().required('Valid email required'),
    message: yup.string().min(10).max(600).required('Message required')
});

class ContactForm extends React.Component {
    render() {
        return (
            <div className="contact-form-content">
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        name: '', 
                        email: '', 
                        message: '' 
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        alert('Form submitted!');
                        setTimeout(() => {
                            // axios POST
                            const appURL = 'http://localhost:3001/contact'
                            axios.post(appURL, {
                                name: values.name,
                                email: values.email,
                                message: values.message
                            })
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                            setSubmitting(false);
                        }, 400)
                    }}
                    >
                        {({ isSubmitting }) => (
                            <Form id="contact-form" role="form">
                                <label for name="name">Name</label>
                                <Field type="name" name="name" id="name" />
                                <ErrorMessage name="name" component="span" />
                                <label for name="email">Email</label>
                                <Field type="email" name="email" id="email" />
                                <ErrorMessage name="email" component="span" />
                                <label for name="message">Message</label>
                                <Field component="textarea" name="message" id="message" />
                                <ErrorMessage name="message" component="span" />
                                <button type="submit" disabled={isSubmitting} >
                                    Submit
                                </button>
                            </Form>
                        )}
                </Formik>
            </div>
        );
    }
}

export default ContactForm;