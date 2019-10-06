import React from 'react';
import { Link } from 'react-router-dom';

class Empty extends React.Component {
    render() {
        return (
            <div className="empty-cart-message">
                <p>Nothing</p>
                <Link className="button" to="/new-arrivals">Start shopping</Link>
            </div>
        );
    }
}

export default Empty;