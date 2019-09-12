import { ShopContent } from '../constants/ShopContent';
import { 
    ADD_TO_CART,
    REMOVE_ITEM, 
    ADD_QUANTITY, 
    MINUS_QUANTITY,
} from '../constants/ActionTypes';

const initState = {
    items: ShopContent,
    addedItems: [],
}

const cartReducer = (state = initState, action) => {
    // If item is added to cart...
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id);
        let existedItem = state.addedItems.find(item => action.id === item.id);

        // Check if item already exists in cart
        // If item is already in cart, increase quantity by 1
        if (existedItem) {
            addedItem.quantity += 1;
            return {
                ...state
            }
        } else {
            // Add item to cart
            addedItem.quantity = 1;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem]
            }
        }
    }

    //If item is removed from cart, remove item
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id);
        let newItems = state.addedItems.filter(item => action.id !== item.id);

        console.log(itemToRemove);
        return {
            ...state,
            addedItems: newItems
        }
    }
    
    // If item quantity is increased, increase quantity by 1 and recalculate subTotal and cartTotal
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        
        addedItem.quantity += 1;

        return {
            ...state
        }

    }

    // If item quantity is decreased, subtract quantity and recalculate subTotal and cartTotal
    if (action.type === MINUS_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        if (addedItem.quantity === 1) {
            let newItems = state.addedItems.filter(item => item.id !== action.id);
            return {
                ...state,
                addedItems: newItems
            }
        } else {
            addedItem.quantity -= 1;
            return {
                ...state
            }
        }
    }
    
    return state;
}


export default cartReducer;