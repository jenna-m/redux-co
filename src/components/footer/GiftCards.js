import React from 'react';

class GiftCards extends React.Component {
    render() {
        return(
            <div>
                <h1>Gift Cards</h1>
                <h2>Select a gift card amount below to add to your cart.</h2>
                    <div className="form-content">
                        <form>
                            <select name="gift-card-value">
                                <option value="25">$25.00</option>
                                <option value="50">$50.00</option>
                                <option value="75">$75.00</option>
                                <option value="100">$100.00</option>
                            </select>
                            <button href="/">Purchase</button>
                        </form>
                    </div>
            </div>
        );
    }
}

export default GiftCards;