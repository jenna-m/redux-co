import React from 'react';

class GiftCards extends React.Component {
    render() {
        return(
            <div>
                <h1>Gift Cards</h1>
                <h2>Select a gift card amount below to add to your cart.</h2>
                <div className="giftcard-options">
                    <button value="25">$25.00</button>
                    <button value="50">$50.00</button>
                    <button value="75">$75.00</button>
                    <button value="100">$100.00</button>
                </div>
                <div className="giftcard-purchase">
                    <button href="/">Purchase</button>
                </div>
            </div>
        );
    }
}

export default GiftCards;