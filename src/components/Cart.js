// OG Cart.js DON'T DELETE

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    addQuantity,
    minusQuantity, 
    removeItem 
} from '../actions/CartActions';
import Empty from './Empty';
import Shipping from './Shipping';

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuantity: (id) => {dispatch(addQuantity(id))},
        minusQuantity: (id) => {dispatch(minusQuantity(id))},
        removeItem: (id) => {dispatch(removeItem(id))}
    }
}

class Cart extends React.Component {
    // Increase item quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    // Decrease item quantity
    handleMinusQuantity = (id) => {
        this.props.minusQuantity(id);
    }

    // Remove item
    handleRemoveItem = (id) => {
        this.props.removeItem(id);
    }

    render() {
        // If there are items in cart, display those items
        let addedItems = this.props.items.length ? (
            this.props.items.map(item => {
                return (
                    <div>
                        <li className="cart-item-card">
                            <div className="cart-item-image">
                                <img src={item.img} alt={item.title} />
                            </div>

                            <div className="cart-item-info">
                                <span className="cart-title">{item.title}</span>
                                <p class="cart-item-desc">{item.desc}</p>
                                <p class="cart-item-price">${item.price}</p>
                                <p class="cart-item-qty">Qty: {item.quantity}</p>

                                <Link to="/cart">
                                    <span class="add-minus-btn"><i class="fa fa-plus-circle"
                                    onClick={ () => {this.handleAddQuantity(item.id)} }
                                    ></i></span>
                                </Link>
                                <Link to="/cart">
                                <span class="add-minus-btn"><i class="fa fa-minus-circle" 
                                    onClick={ () => {this.handleMinusQuantity(item.id)} }
                                    ></i></span>
                                </Link>
                                <span class="add-minus-btn"><i class="fa fa-times-circle" 
                                onClick={ () => {this.handleRemoveItem(item.id)} }></i></span>
                            </div>
                        </li>
                        <Shipping />
                    </div>
                )
            })
        ):
        // If there are no items in cart, display the Empty component
        (
            <Empty />
        )

        return (
            <div className="container">
                <h1>What's in your bag?</h1>
                <div className="cart">
                    <ul classname="collection">
                        {addedItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);