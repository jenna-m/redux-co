import React from 'react';
import { connect } from 'react-redux';
import {
    ADD_SHIPPING,
    SUBTRACT_SHIPPING,
    shippingCost,
    ADD_PICKUP
} from '../constants/ActionTypes';

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
    // componentWillUnmount() {
    //     if (this.refs.shipping.checked)
    //     this.props.subtractShipping();
    //     }    

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
                <div className="shipping-container">
                    <div className="shipping-section">
                        <div className="shipping-message">
                            <h3>Finalize Your Order</h3>
                        </div>
                        <li className="shipping-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange={this.handleShipping} />
                                <span className="ShippingCost">Shipping (${shippingCost})</span>
                            </label>
                        </li>
                        <li className="shipping-item">
                            <label>
                                <input type="checkbox" ref="pickup" onChange={this.handlePickup} />
                                <span className="ShippingCost">In-store pickup (free!)</span>
                            </label>
                        </li>
                        <li className="shipping-item">
                            <p className="cart-total">Total: ${this.props.total}</p>
                        </li>
                    </div>

                    <div className="checkout">
                        <a class="button" href="/">Checkout</a>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);