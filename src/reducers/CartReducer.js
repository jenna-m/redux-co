import Item1 from '../images/item1.png';
import Item2 from '../images/item2.png';
import Item3 from '../images/item3.png';
import Item4 from '../images/item4.png';
import Item5 from '../images/item5.png';
import Item6 from '../images/item6.png';
import { ADD_TO_CART } from '../constants/ActionTypes';

const initState = {
    items: [
        { 
            id: 1, 
            title: 'Black Eyelet Dress', 
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 120,
            img: Item1
        },
        {
            id: 2,
            title: 'Halliday Sunglasses',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 30,
            img: Item2
        },
        {
            id: 3,
            title: 'Boardwalk Sandals',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 90,
            img: Item3
        },
        {
            id: 4,
            title: 'Chore Coat',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 110,
            img: Item4
        },
        {
            id: 5,
            title: 'Sunset Crossbody Bag',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
            price: 90,
            img: Item5
        },
        {
            id: 6,
            title: 'Perfect Shorts',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
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
        // If item is already in cart, increase quantity by 1, and calculate cart total
        if (existedItem) {
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            // Add item to cart and calculate cart total...
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    } else {
        return state;
    }
}

export default cartReducer;