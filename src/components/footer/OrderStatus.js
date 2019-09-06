import React from 'react';

class OrderStatus extends React.Component {
    render() {
        return(
            <div>
                <h1>Where's My Order?</h1>
                <div class="order-tracker">
                <p>Enter your order number below</p>
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