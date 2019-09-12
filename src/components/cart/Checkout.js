import React from 'react';
import { connect } from 'react-redux';
import { shippingCost } from '../../constants/ActionTypes';

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems
    }
}

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subTotal: 0,
            cartTotal: 0
        }
    }
    
    handleShipping = (e) => {
        if (e.target.checked) {
            this.setState({
                cartTotal: this.props.subTotal + shippingCost
            })
        } else {
            this.setState({
                cartTotal: this.props.subTotal - shippingCost
            })
        }
    }

    handlePickup = (e) => {
        if (e.target.checked) {
            this.setState({
                cartTotal: this.props.subTotal
            })
        }
        if (this.refs.shipping.checked) {
            this.setState({
                cartTotal: this.props.subTotal - shippingCost
            })
        }
    }

    render() {
        let cartItems = this.props.addedItems.length;
        if (cartItems) {
            return (
                <div className="checkout-container">
                    <div className="shipping-section">
                        <div className="shipping-message">
                            <h3>Delivery</h3>
                        </div>
                        <div className="shipping-options">
                            <div className="shipping-item">
                                <input
                                    type="radio"
                                    ref="shipping"
                                    name="shipping"
                                    id="standard-shipping"
                                    value="standard-shipping"
                                    defaultChecked
                                    onClick={this.handleShipping} />
                                <label for="standard-shipping">Standard Shipping (${shippingCost})</label>
                            </div>
                            <div className="shipping-item">
                                <input
                                    type="radio"
                                    ref="pickup"
                                    name="shipping"
                                    id="store-pickup"
                                    value="store-pickup"
                                    onClick={this.handlePickup} />
                                <label for="store-pickup">In-store pickup (free)</label>
                            </div>
                        </div>
                    </div>

                    <div className="checkout">
                        <div className="cart-total">
                            <p>Subtotal: ${this.props.subTotal}</p>
                            <p>Total: ${this.props.cartTotal}</p>
                        </div>
                        <div className="checkout-button">
                            <a className="button" href="/">Checkout</a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default connect(mapStateToProps)(Checkout);