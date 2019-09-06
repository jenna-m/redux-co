import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <h1>Contact Us</h1>
                <div class="contact">
                <p>Do you have questions, comments, or concerns? Contact us with the form below.</p>
                    <form>
                        <input type="text" />
                        <button href="/">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;