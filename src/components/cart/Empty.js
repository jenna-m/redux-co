import React from 'react';

class Empty extends React.Component {
    render() {
        return (
            <div className="empty-cart-message">
                <p>Nothing</p>
                <a className="button" href="/">Start shopping</a>
            </div>
        );
    }
}

export default Empty;