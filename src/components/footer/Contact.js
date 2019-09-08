import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <h1>Contact Us</h1>
                <div class="contact">
                    <h2>Do you have questions, comments, or concerns?</h2>
                    <h3>Contact us with the form below.</h3>
                    <div className="form-content">
                        <form>
                            <input type="text" />
                            <button href="/">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;