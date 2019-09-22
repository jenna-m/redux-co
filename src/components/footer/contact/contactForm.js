import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot be over 50 characters')
        .required('Name required'),
    email: yup.string()
        .email('Valid email required')
        .required('Email required'),
    message: yup.string()
        .min(10, 'Message must be at least 10 characters')
        .max(600, 'Message cannot be over 600 characters')
        .required('Message required')
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
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
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