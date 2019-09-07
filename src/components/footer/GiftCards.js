import React from 'react';

class GiftCards extends React.Component {
    render() {
        return(
            <div>
                <h1>Gift Cards</h1>
                <h2>Enter a gift card amount below to add to your cart.</h2>
                <form>
                    <input type="text" />
                    <button href="/">Purchase</button>
                </form>
            </div>
        );
    }
}

export default GiftCards;