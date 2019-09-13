import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

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
                    initialValies={{
                        name: '', 
                        email: '', 
                        message: '' 
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            // Setting API errors
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400)
                    }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <span>Please allow up to 48 hours for a response</span>
                                <label for name="name">Name</label>
                                <Field type="name" name="name" />
                                <ErrorMessage name="name" component="span" />
                                <label for name="email">Email</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="span" />
                                <label for name="message">Message</label>
                                <Field component="textarea" name="message"/>
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