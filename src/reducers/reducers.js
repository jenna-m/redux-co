import { ShopContent } from '../constants/shopContent';
import { 
    ADD_TO_CART,
    REMOVE_ITEM, 
    ADD_QUANTITY, 
    MINUS_QUANTITY,
    ADD_SHIPPING,
    SUBTRACT_SHIPPING,
    shippingCost,
    ADD_PICKUP,
} from '../constants/actionTypes';

const initState = {
    items: ShopContent,
    addedItems: [],
    subTotal: 0,
    cartTotal: 0,
}

const cartReducer = (state = initState, action) => {
    // If item is added to cart...
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id);
        let existedItem = state.addedItems.find(item => action.id === item.id);

        // Check if item already exists in cart
        // If item is already in cart, increase quantity by 1, and calculate subTotal and cartTotal
        if (existedItem) {
            addedItem.quantity += 1;
            return {
                ...state,
                subTotal: state.subTotal + addedItem.price,
                cartTotal: state.subTotal + addedItem.price
            }
        } else {
            // Add item to cart and calculate subTotal and cartTotal
            addedItem.quantity = 1;
            let newSubTotal = state.subTotal + addedItem.price;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                subTotal: newSubTotal,
                cartTotal: newSubTotal
            }
        }
    }

    //If item is removed from cart, remove item and recalculate subTotal and cartTotal
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id);
        let newItems = state.addedItems.filter(item => action.id !== item.id);
        let newSubTotal = state.subTotal - (itemToRemove.price * itemToRemove.quantity);
        console.log(itemToRemove);

        return {
            ...state,
            addedItems: newItems,
            subTotal: newSubTotal,
            cartTotal: newSubTotal
        }
    }
    
    // If item quantity is increased, increase quantity by 1 and recalculate subTotal and cartTotal
    if (action.type === ADD_QUANTITY) {
        const addedItem = state.items.find(item => item.id === action.id);
        const updatedItems = state.addedItems.map(item => item.id === action.id 
            ? {...item, quantity: item.quantity + 1 }
            : item
        );
        let newSubTotal = state.subTotal + addedItem.price;
        
        return {
            ...state,
            addedItems: updatedItems,
            subTotal: newSubTotal,
            cartTotal: newSubTotal
        }
    }

    // If item quantity is decreased, subtract quantity and recalculate subTotal and cartTotal
    if (action.type === MINUS_QUANTITY) {
        let subtractedItem = state.items.find(item => item.id === action.id);
        if (subtractedItem.quantity === 1) {
            const updatedItems = state.addedItems.map(item => item.id === action.id 
                ? {...item, quantity: item.quantity - 1 } 
                : item
            );
            let newSubTotal = state.subTotal - subtractedItem.price;
            return {
                ...state,
                addedItems: updatedItems,
                subTotal: newSubTotal,
                cartTotal: newSubTotal
            }
        } else if (subtractedItem.quantity !== 0) {
            subtractedItem.quantity -=1;
            const updatedItems = state.addedItems.map(item => item.id === action.id
                ? {...item, quantity: item.quantity - 1 } 
                : item
            );
            let newSubTotal = state.subTotal - subtractedItem.price;
            return {
                ...state,
                addedItems: updatedItems,
                subTotal: newSubTotal,
                cartTotal: newSubTotal
            }
        }
    }

    // Logic to add and subtract shipping costs
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            subTotal: state.subTotal,
            shipping: shippingCost,
            cartTotal: state.subTotal + shippingCost
        }
    }

    if (action.type === SUBTRACT_SHIPPING) {
        return {
            ...state,
            subTotal: state.subTotal,
            shipping: 0,
            cartTotal: state.subTotal - shippingCost
        }
    }

    // Logic for in-store pickup
    if (action.type === ADD_PICKUP) {
        let shippingCost = 0;
        return {
            ...state,
            subTotal: state.subTotal,
            shipping: 0,
            cartTotal: state.subTotal + shippingCost
        }
    }
    
    return state;
}

export default cartReducer;