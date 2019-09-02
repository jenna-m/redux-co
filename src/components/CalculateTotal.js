import React from 'react';
import { connect } from 'react-redux';
import {
    ADD_SHIPPING,
    SUBTRACT_SHIPPING,
    shippingCost
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
        }
    }
}

class CalculateTotal extends React.Component {
    componentWillUnmount() {
        if (this.refs.shipping.checked)
        this.props.subtractShipping();
    }    

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.subtractShipping();
        }
    }

    render() {
        return (
            <div className="shipping-container">
                <div className="shipping-section">
                    <li className="shipping-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping (${shippingCost})</span>
                        </label>
                    </li>
                    <li className="shipping-item">
                        <p>Total: ${this.props.total}</p>
                    </li>
                </div>

                <div className="checkout">
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculateTotal);