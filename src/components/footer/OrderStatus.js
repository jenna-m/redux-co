import React from 'react';

class OrderStatus extends React.Component {
    render() {
        return(
            <div>
                <h1>Where's My Order?</h1>
                <div class="order-tracker">
                <h2>Enter your order number below to find out.</h2>
                    <form>
                        <input type="text" />
                        <button href="/">Track</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default OrderStatus;