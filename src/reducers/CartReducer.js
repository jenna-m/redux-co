import { ShopContent } from '../constants/ShopContent';
import { 
    ADD_TO_CART,
    REMOVE_ITEM, 
    ADD_QUANTITY, 
    MINUS_QUANTITY,
    ADD_SHIPPING,
    SUBTRACT_SHIPPING,
    shippingCost,
    ADD_PICKUP
} from '../constants/ActionTypes';

const initState = {
    items: ShopContent,
    addedItems: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    // If item is added to cart...
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id);
        let existedItem = state.addedItems.find(item => action.id === item.id);

        // Check if item already exists in cart
        // If item is already in cart, increase quantity by 1, and calculate total
        if (existedItem) {
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            // Add item to cart and calculate total
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    
    //If item is removed from cart, remove item and recalculate total
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id);
        let newItems = state.addedItems.filter(item => action.id !== item.id);

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
        console.log(itemToRemove);
        return {
            ...state,
            addedItems: newItems,
            total: newTotal
        }
    }
    
    // If item quantity is increased, increase quantity by 1 and recalculate total
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        
        addedItem.quantity += 1;

        let newTotal = state.total + addedItem.price;
        return {
            ...state,
            total: newTotal
        }

    }

    // If item quantity is decreased, subtract quantity and recalculate total
    if (action.type === MINUS_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        if (addedItem.quantity === 1) {
            let newItems = state.addedItems.filter(item => item.id !== action.id);
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                addedItems: newItems,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                total: newTotal
            }
        }
    }

    // Logic to add and subtract shipping costs
    if (action.type === ADD_SHIPPING) {
        return{
            ...state,
            total: state.total + shippingCost
        }
    }

    if (action.type === SUBTRACT_SHIPPING) {
        return {
            ...state,
            total: state.total - shippingCost
        }
    }

    // Logic for in-store pickup
    if (action.type === ADD_PICKUP) {
        return{
            ...state,
            total: state.total
        }
    }
    
    return state;
}


export default cartReducer;