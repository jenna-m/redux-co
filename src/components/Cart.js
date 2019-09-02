import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    addQuantity,
    minusQuantity, 
    removeItem 
} from '../actions/CartActions';
import CalculateTotal from './CalculateTotal';

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
                    <li className="cart-item-card">
                        <div className="cart-item-image">
                            <img src={item.img} alt={item.title} />
                        </div>

                        <div className="cart-item-info">
                            <span className="cart-title">{item.title}</span>
                            <p class="cart-item-desc">{item.desc}</p>
                            <p class="cart-item-price">Price: ${item.price}</p>
                            <p class="cart-item-qty">Quantity: {item.quantity}</p>
                        </div>

                        <div className="add-remove">
                            <Link to="/cart">
                                <i class="fa fa-plus-circle"
                                onClick={ () => {this.handleAddQuantity(item.id)} }
                                ></i>
                            </Link>
                            <Link to="/cart">
                                <i class="fa fa-minus-circle" 
                                onClick={ () => {this.handleMinusQuantity(item.id)} }
                                ></i>
                            </Link>
                        </div>
                        <div className="remove">
                            <i class="fa fa-times-circle" 
                            onClick={ () => {this.handleRemoveItem(item.id)} }></i>
                        </div>
                    </li>
                )
            })
        ):
        // If there are no items in cart, display the following message
        (
            <div class="shopping-message">Nothing</div>
        )

        return (
            <div className="container">
                <h1>What's in your cart?</h1>
                <div className="cart">
                    <ul classname="collection">
                        {addedItems}
                    </ul>
                </div>
                <CalculateTotal />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);