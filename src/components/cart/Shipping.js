import React from 'react';
import { connect } from 'react-redux';
import {
    ADD_SHIPPING,
    SUBTRACT_SHIPPING,
    shippingCost,
    ADD_PICKUP
} from '../../constants/ActionTypes';

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        subTotal: state.subTotal,
        cartTotal: state.cartTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => {
            dispatch({type: ADD_SHIPPING})
        },
        subtractShipping: () => {
            dispatch({type: SUBTRACT_SHIPPING})
        },
        addPickup: () => {
            dispatch({type: ADD_PICKUP})
        }
    }
}

class Shipping extends React.Component {
    handleShipping = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.subtractShipping();
        }
    }

    handlePickup = (e) => {
        if (e.target.checked) {
            this.props.addPickup();
        }
        if (this.refs.shipping.checked) {
            this.props.subtractShipping();

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
                                    checked
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
                            <a class="button" href="/">Checkout</a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);