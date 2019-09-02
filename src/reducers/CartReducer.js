import Item1 from '../images/item1.png';
import Item2 from '../images/item2.png';
import Item3 from '../images/item3.png';
import Item4 from '../images/item4.png';
import Item5 from '../images/item5.png';
import Item6 from '../images/item6.png';
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
    items: [
        { 
            id: 1, 
            title: 'Black Eyelet Dress', 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 120,
            img: Item1
        },
        {
            id: 2,
            title: 'Halliday Sunglasses',
            desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            price: 30,
            img: Item2
        },
        {
            id: 3,
            title: 'Black Chelsea Boots',
            desc: 'Posuere morbi leo urna molestie at elementum eu facilisis sed. At auctor urna nunc id cursus metus. Eu consequat ac felis donec et odio pellentesque.',
            price: 120,
            img: Item3
        },
        {
            id: 4,
            title: 'Chore Coat',
            desc: 'Dui sapien eget mi proin sed libero. Pharetra pharetra massa massa ultricies. Nisi scelerisque eu ultrices vitae auctor eu augue. Blandit cursus risus at ultrices.',
            price: 110,
            img: Item4
        },
        {
            id: 5,
            title: 'Sunset Crossbody Bag',
            desc: 'Eget nunc lobortis mattis aliquam faucibus purus. Nibh praesent tristique magna sit amet purus gravida quis.',
            price: 90,
            img: Item5
        },
        {
            id: 6,
            title: 'Perfect Shorts',
            desc: 'Quisque egestas diam in arcu. Amet risus nullam eget felis. Faucibus a pellentesque sit amet. Morbi leo urna molestie at elementum eu.',
            price: 70,
            img: Item6
        }
    ],
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