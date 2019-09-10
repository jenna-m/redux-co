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
        total: state.total
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
    componentWillUnmount() {
        if (this.refs.shipping.checked)
        this.props.subtractShipping();
    }    

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
                                    onChange={this.handleShipping} />
                                <label for="standard-shipping">Home Delivery (${shippingCost})</label>
                            </div>
                            <div className="shipping-item">
                                <input
                                    type="radio"
                                    ref="pickup"
                                    name="shipping"
                                    id="store-pickup"
                                    value="store-pickup"
                                    onChange={this.handlePickup} />
                                <label for="store-pickup">In-store pickup (free)</label>
                            </div>
                        </div>
                    </div>

                    <div className="checkout">
                        <div className="cart-total">
                            <p>Total: ${this.props.total}</p>
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