import React from 'react';
import { connect } from 'react-redux';
import {
    ADD_SHIPPING,
    SUBTRACT_SHIPPING
} from '../constants/ActionTypes';

componentWillUnmount() {
    if(this.refs.shipping.checked) {
        this.props.subtractShipping();
    }
}

handleChecked = (e) => {
    if (e.target.checked) {
        this.props.addShipping();
    } else {
        this.props.subtractShipping();
    }
}


const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const dispatchStateToProps = (dispatch) => {
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
    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.subtractShipping();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping ($10)</span>
                        </label>
                    </li>
                    <li className="collection-item">
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

export default connect(mapStateToProps, dispatchStateToProps)(CalculateTotal);