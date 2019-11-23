import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as yup from 'yup';


// EmailJS template params
let template_params = {
    'senderEmail': 'senderEmail_value',
    'senderName': 'senderName_value',
    'message': 'message_value'
}

// EmailJS consts
const service_id = 'default_service';
const template_id = 'reduxco';
const emailJSUserID = 'user_8lE6dmtZVQPoLRtBnEI4v';


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


// Dynamic send button text
export const legendMessage = {
    default: 'Send',
    messageSent: 'Message Sent!',
    messageSentError: 'Error; try again'
}


// Submit method
const handleSubmit = async (values, actions, setLegend) => {
    const { name, email, message } = values;
    const { setStatus, setSubmitting, setErrors, resetForm } = actions;

    template_params['senderName'] = name;
    template_params['senderEmail'] = email;
    template_params['message'] = message;

    try {
        await emailjs.send(service_id, template_id, template_params, emailJSUserID);

        resetForm();
        setLegend(legendMessage.messageSent)
    }
    catch(error) {
        setSubmitting(false);
        setErrors(JSON.stringify(error));
        setStatus({
            msg: legendMessage.messageSentError
        });
        setLegend(legendMessage.messageSentError)
    }
}


export const ContactForm = () => {
    const [legend, setLegend] = useState(legendMessage.default);

    const handleBlur = () => {
        setLegend(legendMessage.default)
    }

    return (
        <div className="contact-form-content">
            <Formik
                initialValues={{
                    name: '', 
                    email: '', 
                    message: '' 
                }}
                validationSchema = {schema}
                onSubmit = {(values, actions) => handleSubmit(values, actions, setLegend)}
                >
                    {({ errors }) => (
                        <Form id="contact-form" role="form">
                            <label for name="name">Name</label>
                            <Field 
                                type="name" 
                                name="name" 
                                id="name" 
                                onBlur={handleBlur}/>
                            <ErrorMessage name="name" component="span" />
                            <label for name="email">Email</label>
                            <Field 
                                type="email" 
                                name="email" 
                                id="email" 
                                onBlur={handleBlur}/>
                            <ErrorMessage name="email" component="span" />
                            <label for name="message">Message</label>
                            <Field 
                                component="textarea" 
                                name="message" 
                                id="message" 
                                onBlur={handleBlur}/>
                            <ErrorMessage name="message" component="span" />
                            <button type="submit">
                                { legend }
                            </button>
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default ContactForm;