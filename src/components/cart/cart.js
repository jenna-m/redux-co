import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    addQuantity,
    minusQuantity, 
    removeItem 
} from '../../actions/actions';
import Item from '../shopping/item';
import Empty from './empty';
import Checkout from './checkout';
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Font Awesome icons
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const minusIcon = <FontAwesomeIcon icon={faMinus} />;
const deleteIcon = <FontAwesomeIcon icon={faTimes} />;

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
    handleAddQuantity = ({id}) => {
        this.props.addQuantity(id);
    }

    // Decrease item quantity
    handleMinusQuantity = ({id, quantity}) => {
        if (quantity > 0)
            this.props.minusQuantity(id);
    }

    // Remove item
    handleRemoveItem = ({id}) => {
        this.props.removeItem(id);
    }

    render() {
        // If there are items in cart, display those items
        let addedItems = this.props.items.length ? (
            this.props.items.map(item => {
                return (
                        <li className="cart-item-card">
                            <div className="cart-item-image">
                                <Link to = {{
                                    pathname: `/products/${item.category}/${item.subcat}`,
                                    search: `?id=${item.id}`,
                                    }}
                                    component={ Item }>
                                    <img src={item.img} alt={item.title} />
                                </Link>
                            </div>

                            <div className="cart-item-info">
                                <Link to = {{
                                    pathname: `/products/${item.category}/${item.subcat}`,
                                    search: `?id=${item.id}`,
                                    }}
                                    component={ Item }>
                                    <span className="cart-title">{item.title}</span>
                                </Link>
                                <p class="cart-item-price">${item.price} ea.</p>
                                <p class="cart-item-qty">Qty: {item.quantity}</p>

                                <Link to="/cart">
                                    <span class="add-minus-btn" onClick={ () => {this.handleAddQuantity(item)} }>{ plusIcon }</span>
                                </Link>
                                <Link to="/cart">
                                <span class="add-minus-btn" onClick={ () => {this.handleMinusQuantity(item)} }>{ minusIcon }</span>
                                </Link>
                                <span class="add-minus-btn" onClick={ () => {this.handleRemoveItem(item)} }>{ deleteIcon }</span>
                            </div>
                        </li>
                
                )
            })
        ):
        // If there are no items in cart, display the Empty component
        (
                <Empty />
        )

        return (
            <div className="cart-container">
                <h1>What's in your bag?</h1>
                <div className="cart-items">
                    {addedItems}
                    <Checkout />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);